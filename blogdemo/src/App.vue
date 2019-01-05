<template>
  <div id="app">
    <h1>我的博客</h1>
    <!-- <img src="./assets/logo.png"> -->
    <div class="main">
        <div id="left" >
            <el-tabs type="border-card">
              <el-tab-pane label="我的历程">
                <blog :intrdesc="msg" @changeOk="getmsg1"></blog>
              </el-tab-pane>
              <el-tab-pane label="查看文章">
                <mainpage></mainpage>
              </el-tab-pane>
              <el-tab-pane label="管理">
                <slidebar></slidebar>
              </el-tab-pane>
            </el-tabs>
        </div>
    </div>
        <h4>{{msgs}}</h4>
        <el-button type="success" @click='play'>了解我</el-button>
        <transition-group  name="custom-classes-transition"
                          enter-active-class="animated rollIn"
                          leave-active-class="animated rollOut">
        <el-progress type="circle" :percentage="85" status="text" :width="110" :key="1" v-if="show">{{Done}}</el-progress>
        <el-progress type="circle" :percentage="75" status="text" :width="80" :key="2" v-if="show" color="red">{{hello}}</el-progress>
        <el-tag type="success":key="3" v-if="show">活泼</el-tag>
        <el-tag type="info" :key="4" v-if="show">开朗</el-tag>
        <el-tag type="warning" :key="5" v-if="show">高兴</el-tag>
        <el-tag type="danger" :key="6" v-if="show">钻研</el-tag>
        </transition-group>
  </div>
</template>

<script>
import mainpage from '@/components/pages/mainpage'
import blog from '@/components/pages/blog'
import slidebar from '@/components/pages/slidebar'
export default {
  name: 'App',
  data() {
      return {
        Done:'学习能力',
        hello:"广交朋友",
        msg:"宝剑锋从磨砺出,梅花香自苦寒来",
        msgs:"欢迎来到我的博客,关于我",
        show:false
      };
    },
    components:{
        blog,
        mainpage,
        slidebar
    },
    methods:{
        getmsg1(val){ //子元素传过来的值
           this.msgs = val;
        },
        play(){
            this.show = this.show?false:true;
        }
    }

}
</script>

<style>  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  overflow: hidden;
}
.el-progress-circle{
  margin:0 20px 0 20px;
}
.el-tag{
  margin:10px;
}
.el-tabs__content{
  max-height: 1500px; 
  overflow:hidden; 
}

</style>
