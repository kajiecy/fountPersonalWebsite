<template>
    <el-aside class="" :width="null">



        <el-menu style="height: calc(100%)" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 background-color="#495060"
                 text-color="#fff"
                 active-text-color="#409EFF"
        >
            <div class="menu-color" style="text-align: center;padding:  10px 0;">
                <!--//在线生成的艺术字有点位置问题 卡字有些靠上了 我要处理一下-->
                <span class="img_logo" :class="isCollapse==false?'logo_big':'logo_small'" >
                    <img class="img_logo":class="isCollapse==false?'logo_big':'logo_small'" :src="isCollapse==false?$store.state.app.logoImgUrl:$store.state.app.logoImgSmallUrl">
                </span>
            </div>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            }
        },
        computed: {
            isCollapse(){
                return this.$store.state.app.isCollapse
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .el-aside{

    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .img_logo{
        border-radius: 7px;
        border-bottom-left-radius: 0px;
        display: inline-block;
        overflow: hidden;
        background-color: #2D8CF0;
        transition: all .5s;
    }
    .logo_big{
        width: 160px;
        height: 40px;
    }
    .logo_small{
        width: 40px;
        height: 40px;
        position: relative;
        top: 5px;
    }
</style>