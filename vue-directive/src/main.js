import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('myGlobal',{
  bind(el,binding,vnode) {
        //首次绑定dom，相当于第一次初始化
        console.log(el,binding,vnode)
        el.style.color=binding.value.color
        el.style.fontSize=binding.value.fontSize+'px'
      },
      update(el, binding, vnode) {
       //首次绑定dom，相当于第一次初始化
        console.log(el,binding,vnode)
        el.style.color=binding.value.color
        el.style.fontSize=binding.value.fontSize+'px'
      }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
