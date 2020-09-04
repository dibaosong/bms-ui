import Times from './src/times';

Times.install = function(Vue) {
  Vue.component(Times.name, Times);
};

export default Times;