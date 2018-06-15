<template>
    <div>
        <div style="padding: 10px">
            <el-button @click="runArithmetic()" size="small" type="primary">执行</el-button>
            <el-button size="small" type="warning">打乱</el-button>
            <div>
                {{timer}}
            </div>
            <div>
                {{complete}}
            </div>
        </div>
        <el-row>
            <el-col :span="8">
                <my-echart ref="mydata1" :id="'mydata1'" :arrayDataP="arrayData"></my-echart>
            </el-col>
            <el-col :span="8">
                <selection-sort-components  ref="mydata2" :id="'mydata2'" :arrayDataP="arrayData"></selection-sort-components>
            </el-col>
            <el-col :span="8">
                <insertion-sort-components  ref="mydata3" :id="'mydata3'" :arrayDataP="arrayData"></insertion-sort-components>
            </el-col>
        </el-row>

    </div>
</template>

<script>

    import myEchart from  "./echartsComponents.vue";
    import SelectionSortComponents from  './SelectionSortComponents.vue';
    import InsertionSortComponents from  './InsertionSortComponents.vue';
    export default {
        data() {
            return {
                arrayData:[
                    1,13,2,23,3,10,4,5,29,6,7,30,9,26,
                    12,11,14,28,17,16,20,19,15,24,
                    21,22,25,27,8,18,
                ],
                timer:null,
                complete:0,
            }
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {
            runArithmetic(){
//                console.log(this.$refs)
                console.log('this.$refs.length',this.$refs)
                this.timer = window.setInterval(()=>{
                    console.log("running")
                    this.complete = 0;
                    let sumRef = 0;
                    for(let refName in this.$refs){
                        this.$refs[refName].changeDataj();

                        if(this.$refs[refName].isComplate==1){
                            this.complete++;
                        }
                        sumRef++;
                    }
                    if(this.complete===sumRef){
                        window.clearInterval(this.timer)
                        this.timer = null;
                    }else {
                        this.complete = 0;
                    }
                },100)

            }
        },
        computed: {},
        components: {
            myEchart,
            SelectionSortComponents,
            InsertionSortComponents,
        }
    }
</script>

<style scoped>

</style>