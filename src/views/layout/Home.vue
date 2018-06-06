<template>
  <el-container>
    <kajie-aside></kajie-aside>
    <el-container>
      <el-header style="display: none"></el-header>
      <kajie-header></kajie-header>
      <!--main-->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>



<script>
    import KajieAside from "./KajieAside.vue"
    import KajieHeader from "./KajieHeader.vue"
    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {},
        computed: {},
        components: {
            KajieAside,
            KajieHeader,
        }
    };
</script>
<style scoped>
  .el-container{
    height: 100%;
  }
  .el-main{
    background-color: #ffffff;
    margin-top: 5px;
  }

</style>