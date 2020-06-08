<template>
  <div class="hello">
    <h1>全局自定义指令demo</h1>
    <p v-my-global="{color:colorGlobal,fontSize:fontSizeGlobal}">我是内部组件使用了全局指令，任意地方都可以用到我哦～</p>
  </div>
</template>

<script>
//测试生命周期test
export default {
  name: 'globalDirective',
  props: {
    colorGlobal:{
      type:String,
      default:'blue'
    },
    fontSizeGlobal:{
      type:String,
      default:'24'

    }
  },
   data(){
    return{
      
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
