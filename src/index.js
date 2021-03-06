/* Automatically generated by './build/bin/entry.js' */
import Tabbar from './components/tabbar/index.js';
const components = [
   Tabbar
];
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  console.log(window, window.Vue)
  install(window.Vue);
}
export {
   Tabbar
}
export default {
  install,
   Tabbar
};
