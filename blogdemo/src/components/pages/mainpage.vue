<template>
  <div>
      <div v-show="listart.length==0">博主很懒，暂时没有发表文章</div>
        <el-collapse accordion v-for="(val,key) in listart" :key="key"> 
          <el-collapse-item>
          <template slot="title">
            {{val.title}}<i class="el-icon-star-off"></i> <span>-----{{val.time | date}}</span>
          </template>
            <pre>{{val.article}}</pre>  
          </el-collapse-item>
        </el-collapse>
      </div>
  </div>
</template>
<script>

export default {
  name: 'mainpage',
   data() {
      return {  
        listart:'',
        intrdesc:"hello",
        times:""
      }
    },
    methods: {
      get(index){
          this.intrdesc = this.listart[index].article;
      },

    }, 
    filters:{

      date:function (input) {
       var d = new Date(input*1000);
       var year = d.getFullYear();
       var month = d.getMonth() + 1;
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
       var hour = d.getHours();
       var minutes = d.getMinutes();
       var seconds = d.getSeconds();
       return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }
    },
    mounted:function(){
    this.axios.get('/api/getAllart').then( (res) => {
         console.log(res.data);
        this.listart = res.data;
      })
  }
  }
</script> 
<style>
.el-collapse-item__header{
 color: green;
}
pre{
  background: #eee;
}
</style>