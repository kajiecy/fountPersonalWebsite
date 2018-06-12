<template>
  <el-container>
    <kajie-aside></kajie-aside>
    <el-container>
      <el-header style="display: none"></el-header>
      <kajie-header></kajie-header>
      <!--main-->
      <el-main>
        <template v-if="$route.path=='/div-move'">
          <router-view/>
        </template>
        <template v-else>
          <el-card class="box-card" :body-style="{ padding: '10px',height:'100%'}">
            <router-view/>
          </el-card>
        </template>

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
<style >
  .el-container{
    height: 100%;
  }
  .el-main{
    padding: 10px;
    margin-top: 0px;
    background-color: #F0F0F0;
  }

</style>