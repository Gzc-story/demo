<template>
<div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(itemValue,key) in lists" :key="itemValue.id?itemValue.id:itemValue">
      <h3>{{itemValue.desc?itemValue.desc:itemValue}}</h3>
    </el-carousel-item>
  </el-carousel>
  <h3 @click="change">{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
        lists:[
          "node",
          "angular.js",
          "mysql",
          "vue.js",
          "element-ui"
        ],
        msg:this.intrdesc,
        msgch:"迷茫不可怕，说明你还在向前走。失败不可怕，只要你还能爬起来"
    }
  },
  created:function(){
    this.axios.get('/api/getAllhome').then( (res) => {
        this.lists = res.data;
      })
  },
  props:["intrdesc"],//父元素传过的值
  methods:{
    change(){
      this.$emit("changeOk",this.msgch);
    }

  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 50px;
    margin: 20px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;  
  }
  
    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  h3{
    text-align: center;
  }
</style>