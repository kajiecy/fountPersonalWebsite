<template>
    <el-header height="64px">
        <div class="dis_table wd100 div_header_sum"  style="">
            <div class="dis_table_cell" style="width: 64px;text-align: center">
                <div style="display: inline-block;width: 24px;height: 24px">
                    <i class="iconfont icon-zhankai menu_ctrl_icon " :class="$store.state.app.isCollapse==true?'rote90':''" style="font-size: 24px" @click="menuChange()"></i>
                </div>
            </div>
            <div class="dis_table_cell textleft " style="padding-left: 20px">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <template v-for="(item,index) in $store.state.app.breadcrumbArr">
                        <el-breadcrumb-item :to="item.name==null?null:{ name: item.name,query:item.query}">{{item.title}}</el-breadcrumb-item>
                    </template>

                </el-breadcrumb>
            </div>
            <div class="dis_table_cell textright">
                <div class="dis_table wd100 ">
                    <div class="dis_table_cell textright">
                        <!--导航图标-->
                        <a href="https://www.jianshu.com/u/5636d2922139" target="_blank">
                            <div style="display: inline-block;width: 27px;height: 27px;background-color: #495060;border-radius: 15px;text-align: center;position: relative;top: 2px;">
                                <span style="font-size: 16px;line-height: 27px;color: white">简</span>
                            </div>
                        </a>

                        <a href="https://github.com/kajiecy" target="_blank">
                            <i class="iconfont icon-github"></i>
                        </a>
                    </div>
                    <div class="dis_table_cell textright" style="width: 80px">
                        <!--下拉菜单 start-->
                        <el-dropdown size="small" @command="handleCommand">
                          <span class="el-dropdown-link color-default">
                            kajie<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">个人中心</el-dropdown-item>
                                <el-dropdown-item command="2" divided>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <!--下拉菜单 end-->
                    </div>
                    <div class="dis_table_cell" style="width: 80px">
                        <!--头像图片-->
                        <img src="http://qiniu.kajie88.com/28913648.jpg" class="head_img">
                    </div>
                </div>


            </div>
        </div>
    </el-header>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {
            handleCommand(command) {
                this.$message('click on item ' + command);
            },
            //控制菜单的 展开与收起
            menuChange(){
                this.$store.commit("changeCollapse");
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>
    .el-header {
        background-color: #ffffff;
        padding: 0;
        /*background-color: #EC3329;*/
    }
    .div_header_sum{
        height: 60px;
        background-color: white;
        box-shadow:0px 1px 4px rgba(31, 16, 16, 0.4)

    }
    .head_img {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(31, 16, 16, 0.5), 0 0 15px rgba(31, 16, 16, 0.2) inset;
    }
    .el-dropdown-link{
        font-size: 14px;
        cursor: pointer;
    }
    .iconfont{
        font-size: 26px;
        color: #495060;
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;

    }
    .menu_ctrl_icon{
        transition:all 0.5s;
    }
    .rote90{
        transform:rotate(-90deg);
    }
</style>