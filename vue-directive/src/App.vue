<template>
  <div id="app">
   <div>
      <HookDirective v-if="updateMsg" :msg="updateMsg"/>
      <input v-model="updateMsg" type="text">
   </div>
   <div>
      <localDirective :color-local="colorLocal" :font-size-local="fontSizeLocal"/>
      <label for="fontColor1">文本颜色</label>
      <input type="text" v-model="colorLocal" name="fontColor1">
      <br>
      <br>
      <label for="fontSize1">文字大小</label>
      <input type="number" v-model="fontSizeLocal"  name="fontSize1" id="">
   </div>
   <div>
      <globalDirective :color-global="colorGlobal" :font-size-global="fontSizeGlobal"/>
      <label for="fontColor2">文本颜色</label>
      <input type="text" v-model="colorGlobal" name="fontColor2">
      <br>
      <br>
      <label for="fontSize2">文字大小</label>
      <input type="number" v-model="fontSizeGlobal"  name="fontSize2" id="">
      <p v-my-global="{color:'red',fontSize:'22'}">我在主页面使用了全局指令，成功了耶～</p>
   </div>
  </div>
</template>

<script>
import HookDirective from './components/HookDirective.vue'
import localDirective from './components/localDirective.vue'
import globalDirective from './components/globalDirective.vue'

export default {
  name: 'App',
  components: {
    HookDirective,
    localDirective,
    globalDirective
  },
  data(){
    return{
      updateMsg:'测试生命周期',
      colorLocal:'red',
      fontSizeLocal:'12',
      colorGlobal:'blue',
      fontSizeGlobal:'24'
    }
  }
}
</script>

<style>
#app {
  width: 700px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  border: 2px dashed #ddd;
  padding: 20px;

}
#app >div{
  padding: 20px;
  border-bottom: 2px dashed #ddd;
}
#app >div:last-child{
  border:none
}
#app input{
  margin-left: 5px;
}
</style>
