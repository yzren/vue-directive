<template>
  <div class="hello">
    <h1>局部测试生命周期test</h1>
    <p v-my-local-hook="msg">{{ msg }}</p>
  </div>
</template>
<script>
//测试生命周期test
export default {
  name: 'HookDirective',
  props: {
    msg: String
  },
  directives:{
    myLocalHook:{
      bind(){
        //首次绑定dom，相当于第一次初始化
        console.log('bind 首次绑定dom，相当于第一次初始化')
      },
      inserted(){
        //被绑定元素插入到父节点时候调用
        console.log('inserted 被绑定元素插入到父节点时候调用')
      },
      update(){
        console.log('update 数据更新的时候')
      },
      componentUpdated(){
        console.log('componentUpdated 指令所在组件的Vnode及其子Vnode全部更新后调用')
      },
      unbind(){
        console.log('unbind 只调用用一次，就是当指令与元素解绑时候调用')
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
