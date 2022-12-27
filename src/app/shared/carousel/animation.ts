import { animate, state, style, transition, trigger } from "@angular/animations";

export const carouselAnimation = 
trigger('slideInOut', [
  state('slidingToggled1', style({
    transform: 'translateX( calc( -100% * {{displacement}} ) )', // 0% => initially no displacement, index 0
  }), {params: {displacement: 0}}), // required default value
  state('slidingToggled2', style({
    transform: 'translateX( calc( -100% * {{displacement}} ) )'
  }), {params: {displacement: 0}}),
  // state stylings persist after animation ends
  // transition stylings are only intermediate styles.
  transition('slidingToggled1 <=> slidingToggled2', [ 
    // no animation if state doesnt change. Thus slidingToggled 1 & 2 are used.
    // each time button clicked, it toggles transition of 2 states with increment/decrement of displacement
    // parameter displacement is used here because infinite animation is desired(the given solution in angular doc is a looping animation, transition can only occur within defined stages)
    // only the state matches the triggered value will be taken into account (styles). 
    // In the end of transition, the styles persist as defined in the triggered state.
    // The previous state(styles) is literally neglected. Transition function takes only the states string/name, it doesnt take the styles of each state into account.
    // As long as there is state change, animation takes place and the triggered state's styles persist. 
    animate('0.5s')
  ])
]);