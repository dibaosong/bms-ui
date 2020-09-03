import Time from './src/time';

Time.install = function(Vue) {
  Vue.component(Time.name, Time);
};

export default Time;