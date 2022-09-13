import { navigate } from "gatsby"
import { animateScroll } from 'react-scroll';
export function linkScroll(to,scroll){
  navigate(to);
  animateScroll.scrollTo(scroll);
}