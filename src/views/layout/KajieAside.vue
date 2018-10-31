<template>
    <el-aside class="" :width="null">


        <el-menu style="height: calc(100%)" class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 background-color="#495060"
                 text-color="#fff"
                 active-text-color="#409EFF"
                 unique-opened
                 :default-active="onRoutes"
                 @select="selectMenu"
        >
            <div class="menu-color" style="text-align: center;padding:  10px 0;">
                <!--//在线生成的艺术字有点位置问题 字有些靠上了 我要处理一下-->
                <span class="img_logo" :class="isCollapse==false?'logo_big':'logo_small'">
                    <img class="img_logo" :class="isCollapse==false?'logo_big':'logo_small'"
                         :src="isCollapse==false?$store.state.app.logoImgUrl:$store.state.app.logoImgSmallUrl">
                </span>
            </div>
            <template v-for="(item,index) in menuList">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="index">
                        <template slot="title"><i :class="item.icon"></i>
                            <span slot="title">
                {{ item.title }}
                                <!--<span style="display: inline-block;float: right;margin-right: 22px;font-size: 18px;color: #8C8A81" @click="addUsermenu()">+</span>-->
                <template v-if="item.index === 'StatisticOverview'">
                  <el-popover
                          placement="bottom"
                          trigger="click"
                          v-model="visible2"
                          popper-class="user_statistic_popver"
                          ref="myPopover"
                          :width="250"
                  >
                    <div>
                      <div style="padding: 10px;background-color: #F7F7F7;border-bottom: 1px solid #E4E7ED">
                        创建新的概览
                      </div>
                      <div style="padding: 20px 10px 0px 10px">
                        <el-form :model="newStatisticForm" :rules="newStatisticRules" ref="statisticForm"
                                 label-width="60px">
                          <el-form-item label="名称" prop="name">
                            <el-input v-model="newStatisticForm.name"></el-input>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div style="text-align: right;padding: 10px;background-color: #F7F7F7;border-top: 1px solid #E4E7ED">
                        <el-button size="mini" @click="visible2 = false">取消</el-button> <el-button size="mini"
                                                                                                   type="primary"
                                                                                                   @click="createStatistic()">创建</el-button>
                      </div>
                    </div>


                    <el-button class="user_statistic_add" slot="reference">+</el-button>
                  </el-popover>
                </template>

              </span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="index">
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
                visible2: false,
                newStatisticForm: {
                    name: ""
                },
                newStatisticRules: {
                    name: [
                        {required: true, message: '请输入数据概览的名称', trigger: 'blur'},
                    ],
                },
            }
        },
        created() {

        },
        mounted() {
            this.loadUserMenuList();
        },
        watch: {},
        methods: {
            loadUserMenuList() {
                //todo 此处通过请求服务器获取数据 后期处理
//                this.$req.post(this.$store.state.app.interfaceUrls.getUserThemeList,
//                    {
//                        userId:'1'
//                    }, data => {
//                        let userMenuData = [];
//                        for(let item of data){
//                            userMenuData.push({id:item.id,title:item.title})
//                        }
//                        this.$store.commit("changeUserMenuData",userMenuData);
//                    })
                let userMenuData = [{id: 0, title: "自定义子菜单"}];
                this.$store.commit("changeUserMenuData", userMenuData);

            },
            selectMenu(index) {
                if (index.indexOf("!") == -1) {
                    this.$router.push({name: index});
                } else {
                    alert(1)
                    let menuInfo = index.split("!");
                    this.$router.push({name: menuInfo[0], query: {id: menuInfo[1]}})
                }
            },
            changeShow() {
                this.visible2 = !this.visible2;
            },
            createStatistic() {
                if (this.newStatisticForm.name === null || this.newStatisticForm.name === '') {
                    this.$message({
                        message: '数据概览名称不能为空',
                        type: 'warning'
                    });
                } else {
                    // todo 这里发送请求 添加一条数据
//                    this.$req.post(this.$store.state.app.interfaceUrls.addThemeList,
//                        {
//                            userId:'1',
//                            title:this.newStatisticForm.name,
//                        }, data => {
//                            console.log(data)
//                            this.$store.commit("pushUserMenuList",{id:data,title:this.newStatisticForm.name})
//                            this.newStatisticForm.name = '';
//                            this.$router.push({name:'thememanage',query:{id:data}})
//                        })
                    //模拟id
                    let simulateId = this.$store.state.user.userMenuData.length;
                    this.$store.commit("pushUserMenuList", {id: simulateId, title: this.newStatisticForm.name})
                    this.newStatisticForm.name = '';
                    this.$router.push({name: 'custom', query: {id: simulateId}})

                    this.visible2 = false;
                }

            }
        },
        computed: {
            isCollapse() {
                return this.$store.state.app.isCollapse;
            },
            menuList() {
                let menuList = [];
                let userStatisticOverview = {
                    icon: 'el-icon-setting',
                    index: 'StatisticOverview',
                    title: '可操作菜单',
                    subs: []
                }
                if (this.$store.state.user.userMenuData.length > 0) {
                    this.$store.state.user.userMenuData.forEach(function (item) {
                        userStatisticOverview.subs.push({
                            index: 'custom' + "!" + item.id,
                            title: item.title,
                            id: item.id
                        });
                    })
                }
                menuList = menuList.concat(userStatisticOverview, this.$store.getters.getMenuList);
                return menuList;
            },
            //此属性用于获取 菜单的选中状态
            onRoutes() {
                //fixme 当此处存在多级菜单 路由是 会存在问题 但多级路由尚未定义
                if (this.$route.query.id != null) {
                    return this.$route.path.replace('/', '') + "!" + this.$route.query.id;
                } else {
                    return this.$route.path.replace('/', '');
                }
            }
        },
        components: {},

    }
</script>

<style scoped>


    .user_statistic_add{
        display: inline-block;
        color: #8C8A81;
        background-color: RGBa(1,0,0,0);
        padding: 3px;
        float: right;
        font-size: 18px;
        position: relative;
        border: 0 solid #ffffff;
        top: 15px;
        right: 18px;
    }
    .user_statistic_add:hover{
        background-color: transparent;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .img_logo {
        border-radius: 7px;
        border-bottom-left-radius: 0px;
        display: inline-block;
        overflow: hidden;
        background-color: #2D8CF0;
        /*transition: all .5s;*/
    }

    .logo_big {
        width: 160px;
        height: 40px;
    }

    .logo_small {
        width: 40px;
        height: 40px;
        position: relative;
        top: 5px;
    }

    [class*="el-icon"] {
        color: white;
    }

</style>
