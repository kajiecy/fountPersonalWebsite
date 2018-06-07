<template>
    <el-aside class="" :width="null">



        <el-menu style="height: calc(100%)" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 background-color="#495060"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 unique-opened
                 router
                 :default-active="onRoutes"
        >
            <div class="menu-color" style="text-align: center;padding:  10px 0;">
                <!--//在线生成的艺术字有点位置问题 字有些靠上了 我要处理一下-->
                <span class="img_logo" :class="isCollapse==false?'logo_big':'logo_small'" >
                    <img class="img_logo":class="isCollapse==false?'logo_big':'logo_small'" :src="isCollapse==false?$store.state.app.logoImgUrl:$store.state.app.logoImgSmallUrl">
                </span>
            </div>
            <template v-for="item in menuList">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

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
                return this.$store.state.app.isCollapse;
            },
            menuList(){
                return this.$store.getters.getMenuList;
            },
            //此属性用于获取 菜单的选中状态
            onRoutes(){
                //fixme 当此处存在多级菜单 路由是 会存在问题 但多级路由尚未定义
                return this.$route.path.replace('/','');
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
    [class*="el-icon"]{
        color: white;
    }
</style>