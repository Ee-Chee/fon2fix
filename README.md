# Highlighted Features of this project

## Fast rendering with Angular + Service Worker PWA
Single page application with lazy loaded modules, images

## Client side rendering
Due to the reason that the subsribed shared hosting plan does not support nodejs environment, Angular Universal Server side rendering is not used in this project.

## Dynamic SEO and Schema Data handling

## Lightweight carousel module
Reusable light Carousel module is built on angular animations. Hidden items in the carousel are on DOM (SEO crawlable and indexable) and item's image is lazy-loaded.

## Privacy handling

## Sitemaps + Google Search Console (GA and GTM dont come into the game yet)

### Notes:
1. Client side routing.
Unlike multi pages application, SPA(Angular) does not send url-page request to server to get whole page document. Only dynamic content with associated js and/or static assets(images) are requested when changing route/page. However, this leads to 404 page not found when reloading a route page (e.g. https://fon2fix.com.my/contact) because SPA doesnt have /contact page to serve on the server, only root page index.html(https//fon2fix.com.my). Error 404 page causes subsequently more other problems like not crawled by search engines, etc.

For that, Angular has 2 approaches - hash or path location strategy. Default path and recommended, use hash only for older web browsers. Hash changes the url pattern on the client side, e.g. https://fon2fix.com.my/#/contact. In this way, https://fon2fix.com.my is requested and on the server, the hash will be taken to render the associated view. On the hand, path does not change url pattern. But webserver configuration is needed to make sure every route page request made to server is redirected to index.html. E.g. https://fon2fix.com.my/home is requested, webserver redirects to https://fon2fix.com.my, then path location strategry handles the rest and output the correct view content.

#### References:
https://www.tektutorialshub.com/angular/angular-location-strategies/

https://www.tektutorialshub.com/angular/the-requested-url-was-not-found-on-this-server-error-in-angular/

2. Indexing - get crawled and shown in the search results page. It is usually slow process for Google 2-3 weeks. Use sitemap to speed up the process.

https://www.contentkingapp.com/academy/google-index/faq/indexing-speed/



