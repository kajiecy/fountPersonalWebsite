<template>
  <div class="loginBackground">
    登录页面
  </div>
</template>

<script>
export default {
  data (){
    return {
      formData:{
        name:'',
        pwd:''
      },
      ruleData:{
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
//        { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  created (){

  },
  mounted(){

  },
  methods:{
    login(){
//      this.$refs.formInline.validate((valid)=>{
//        if (valid) {
//          this.$Message.success('登录成功!');
//          //向cookies 中存 Token 现在没有 存name
//          Cookies.set('Token',this.formData.name);
//          //将用户信息存入 state
//          this.$store.commit('upUserInfo',this.formData);
//          this.$router.push({name:'home'})
//        } else {
//        }
//      })
    }
  },
  computed:{

  },
  components:{

  }
}
</script>

<style scoped>

</style>
