<template>
  <div class="hello">
    <h1>局部自定义指令demo</h1>
    <p v-my-local:argFoo.modifiersTest="{color:colorLocal,fontSize:fontSizeLocal}">我是局部指令</p>
  </div>
</template>

<script>
export default {
  name: 'localDirective',
  props: {
    colorLocal:{
      type:String,
    },
    fontSizeLocal:{
      type:String,
    }
  },
   data(){
    return{
      
    }
  },
  directives:{
    myLocal:{
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
