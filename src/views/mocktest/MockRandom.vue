<template>
    <div>
        <el-table
                :data="userMoreInfo"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID('id|+1':1)"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱(随机生成)"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名(@cname)"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄('age|18-90':1)"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="star"
                    label="星级('star|2-5': '★')"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="data"
                    label="日期"
                    width="200">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "MockRandom",
        data() {
            return {
                userMoreInfo:[],
            }
        },
        created() {

        },
        mounted() {
            this.loadUserMoreInfo();
        },
        watch: {},
        methods: {
            loadUserMoreInfo(){
                this.$req.post(this.$store.state.app.interfaceURL.getUserMoreInfoList,
                    {}, data => {
                        this.userMoreInfo = data.userMoreList;
                    })
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>