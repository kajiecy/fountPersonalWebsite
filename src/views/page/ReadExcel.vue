<template>
    <div>
        <div style="margin-top: 10px">
        <span
                style="display: inline-block;width: 10px;height: 24px;background-color: #409EFF;position: relative;top: 7px;margin: 0px 10px"></span>
            <span style="font-size: 14px;">上传并读取Excel</span>
            <el-button @click="testJson">111</el-button>
            <el-tooltip class="item" effect="dark" content="" placement="right">
                <div slot="content">暂时仅支持常规格式的Excel的读取^_^, <a href="http://qiniu.kajie88.com/test.xls" style="color: #409EFF">模板下载</a></div>
                <i class="el-icon-question" style="color: #E6A23C;display: inline-block;margin-left: 10px;cursor: pointer"></i>
            </el-tooltip>
        </div>
        <div style="padding: 20px">
            <el-upload
                    class="upload-demo"
                    :action="$store.getters.getWholeUrl('receiveExcel')"
                    :show-file-list="false"
                    :on-success="upSuccess"
                    :before-upload="beforeUpload"
                    >
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <div style="padding: 20px">
                <div class="dis_table wd100">
                    <div class="dis_table_row">
                        <div class="dis_table_cell table-head" v-for="(item,index) in tableData.tableHead">
                            {{item}}
                        </div>
                    </div>
                    <div class="dis_table_row" v-for="(item,index) in tableData.tableBody">
                        <div class="dis_table_cell table-body" v-for="(citem,cindex) in tableData.tableBody[index]">
                            {{citem}}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        data() {
            return {
                tableData:{
                    tableHead:[],
                    tableBody:[],
                },

            }
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {
            testRequest() {
                this.$req.post(this.$store.state.app.interfaceURL.readExcelTest,
                    {}, data => {
                        console.log(data)
                    })
            },
            upSuccess(response, file){
                console.log("response",response);
                console.log("file",file);
                this.tableData.tableHead = response.data.tableHead;
                this.tableData.tableBody = response.data.tableBody;
            },
            beforeUpload(file){
                console.log("update file",file);
            },
            testJson(){
                this.$req.post(this.$store.state.app.interfaceURL.readExcelTest,
                    {}, data => {
                        console.log(data)
                    })
            }
        },
        computed: {},
        components: {
            ElButton
        }
    }
</script>

<style scoped>
    .table-head{
        padding: 10px 5px;
        font-size: 18px;
    }
    .table-body{
        padding: 5px 5px;
    }
</style>