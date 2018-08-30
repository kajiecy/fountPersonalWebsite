
<template>
    <div>
        <div class="show-user-div dis_table wd100">
            <div class="dis_table_row show-user-div" v-for="(item,index) in userList">
                <div class="dis_table_cell textleft">id:{{item.id}}</div>
                <div class="dis_table_cell textleft">username:{{item.username}}</div>
                <div class="dis_table_cell textleft">email:{{item.email}}</div>
                <div class="dis_table_cell textleft">password:{{item.password}}</div>
                <div class="dis_table_cell textleft">name:{{item.name}}</div>
            </div>
        </div>
        <div class="dis_table wd100">
            <div class="dis_table_cell wd25 textleft">
                <div class="inline-block">
                    <el-input v-model="tryLogin.name" placeholder="用户名"></el-input>
                    <el-input v-model="tryLogin.pwd" placeholder="密码"></el-input>
                    <el-button @click="checkPwd()">登录</el-button>
                </div>
            </div>
            <div class="dis_table_cell textleft pl10">
                <template v-if="loginInfo.id!=null">
                    登录成功：<br>
                    id：{{loginInfo.id}}<br>
                    姓名：{{loginInfo.name}}<br>
                    邮箱：{{loginInfo.email}}<br>
                </template>
            </div>

        </div>
        <div class="show-user-div">
            添加user: <br>
            <div class="inline-block wd35">
                <el-input v-model="newUser.id" placeholder="id"></el-input>
                <el-input v-model="newUser.username" placeholder="登录名"></el-input>
                <el-input v-model="newUser.email" placeholder="邮箱"></el-input>
                <el-input v-model="newUser.password" placeholder="密码"></el-input>
                <el-input v-model="newUser.name" placeholder="用户名"></el-input>
                <el-button @click="addUser()">添加</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";

    export default {
        data() {
            return {
                tryLogin:{
                    name:"",
                    pwd:"",
                },
                loginInfo:{},
                userList:[],
                newUser:{
                    id:"",
                    username:"",
                    email:"",
                    password:"",
                    name:"",
                }
            }
        },
        created() {

        },
        mounted() {
            this.loadUserList();
        },

        watch: {},
        methods: {
            checkPwd(){
                this.$req.post('/user/login',
                    this.tryLogin, data => {
                        console.log(data)
                        this.loginInfo = data.user;
                    })
            },
            loadUserList(){
                this.$req.post('/user/getUserList',
                    null, data => {
                        console.log(data)
                        this.userList = data.userList;
                    })
            },
            addUser(){
                this.$req.post('/user/addUser',
                    this.newUser, data => {
                        this.loadUserList();
                    })
            }
        },
        computed: {},
        components: {
            ElInput,
            ElButton}
    }
</script>

<style scoped>
    .show-user-div{
        border: 1px solid #666666;
    }
</style>