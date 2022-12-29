import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SeoMetaData } from "../interfaces";

// https://www.tektutorialshub.com/
// https://www.heymeta.com/
// https://devhints.io/html-meta
// no such thing as meta tag with name: image => https://www.w3schools.com/tags/tag_meta.asp#:~:text=The%20tag%20defines%20metadata,the%20document%2C%20and%20viewport%20settings.
// meta tag with keywords no longer important since 2009 => https://www.safaridigital.com.au/blog/does-google-still-use-meta-keywords/
// 4 groups to set (title, description, image, etc.)=> html meta tags, facebook(og), twitter, google / search engine (itemprop)
// Plus additional canonical and robots
// updateTag method update first instance, otherwise insert.

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
    ) { 
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(() => {
          const activatedChild = this.getChild(this.activatedRoute);

          return activatedChild.data.pipe(take(1));
        })
      )
      .subscribe((routeData) => {
        // title, required
        this.titleService.setTitle(routeData['title']);
        this.meta.updateTag({ property: 'og:title', content: routeData['title'] });
        this.meta.updateTag({ name: 'twitter:title', content: routeData['title'] });
        this.meta.updateTag({ itemprop: 'name', content: routeData['title'] }, "itemprop='name'"); 
        // search criterion needed to be set explicitly whereas name and property are automatically set

        if (routeData['description']) {
          this.meta.updateTag({ name: 'description', content: routeData['description'] });
          this.meta.updateTag({ property: 'og:description', content: routeData['description'] });
          this.meta.updateTag({ name: 'twitter:description', content: routeData['description'] });
          this.meta.updateTag({ itemprop: 'description', content: routeData['description'] }, "itemprop='description'");
        } else {
          this.meta.removeTag("name='description'");
          this.meta.removeTag("property='og:description'");
          this.meta.removeTag("name='twitter:description'");
          this.meta.removeTag("itemprop='description'");
        }

        if (routeData['image']) {
          this.meta.updateTag({ property: 'og:image', content: environment.baserUrl + routeData['image'] });
          this.meta.updateTag({ name: 'twitter:image', content: environment.baserUrl + routeData['image'] });
          this.meta.updateTag({ itemprop: 'image', content: environment.baserUrl + routeData['image'] }, "itemprop='image'");
        } else {
          this.meta.removeTag("name='image'");
          this.meta.removeTag("property='og:image'");
          this.meta.removeTag("name='twitter:image'");
          this.meta.removeTag("itemprop='image'");
        }

        if (routeData['robots']) { // for special pages such as not found page which has no description and image
          this.meta.updateTag({ name: 'robots', content: routeData['robots'] });
          this.meta.removeTag("property='og:url'");
          this.meta.removeTag("property='og:type'");
          this.meta.removeTag("name='twitter:card'");
        } else {
          // Additional metatags for Facebook
          this.meta.updateTag({ property: 'og:url', content: environment.baserUrl + this.router.url });
          this.meta.updateTag({ property: 'og:type', content: 'website' });

          // Additional metatags for Twitter
          this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' }); // or summary

          // for production
          this.meta.updateTag({ name: 'robots', content: "follow, index" })
        }

        if(!routeData['canonicalLink']) {
          this.updateCanonicalUrl(environment.baserUrl + this.router.url)
        } else {
          this.updateCanonicalUrl(environment.baserUrl + routeData['canonicalLink'])
        }
      })
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  updateCanonicalUrl(url:string){
    const head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element === null) {
      element = this.document.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel','canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }
}
