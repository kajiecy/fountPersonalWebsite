<template>
    <div>
        <div>
            <el-button @click="runArithmetic()">执行</el-button>
        </div>
        <el-row>
            <el-col :span="12">
                <my-echart ref="mydata1" :id="'mydata1'" :arrayDataP="arrayData"></my-echart>
            </el-col>
            <el-col :span="12">
                <selection-sort-components  ref="mydata2" :id="'mydata2'" :arrayDataP="arrayData"></selection-sort-components>
            </el-col>
        </el-row>

    </div>
</template>

<script>

    import  myEchart from  "./echartsComponents.vue";
    import SelectionSortComponents from  './SelectionSortComponents.vue';
    export default {
        data() {
            return {
                arrayData:[
                    1,13,2,23,3,10,4,5,29,6,7,30,9,26,
                    12,11,14,28,17,16,20,19,15,24,
                    21,22,25,27,8,18,
                ]
            }
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {
            runArithmetic(){
                console.log(this.$refs)
                window.setInterval(()=>{
                    for(let refName in this.$refs){
                        this.$refs[refName].changeDataj();
                    }
                },100)


            }
        },
        computed: {},
        components: {
            myEchart,
            SelectionSortComponents,
        }
    }
</script>

<style scoped>

</style>