<template>
    <div>
        <div :id="id" style="width: 400px;height: 350px"></div>
        <div>
            数据交换次数：{{changeCount}}
        </div>
        <div>
            循环次数：{{sumCount}}
        </div>
        <div>
            isComplate:{{isComplate}}
        </div>
    </div>

</template>

<script>

    let timePicker = null;
    export default {

        props:{
            id:{
              type:String,
              default(){
                  return ""
              }
            },
            //父组件传来的统一数据
            arrayDataP:{
                type:Array,
                default(){
                    return [];
                }
            },
            title:{
                type:String,
                default(){
                    return "插入排序";
                }
            },
            animation: false
        },
        data() {
            return {
                disposeData:[
                    0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0,
                ],
                arrayDataO:[],
                i:0,
                j:0,
                get:0,
                state:0,
                isComplate:0,
                myChart:{},
                changeCount:0,
                sumCount:0,
            }
        },
        created() {

        },
        mounted() {
            let vm = this;
            let echarts = require('echarts/lib/echarts');
            // 引入柱状图
            require('echarts/lib/chart/bar');
            // 引入提示框和标题组件
            require('echarts/lib/component/tooltip');
            require('echarts/lib/component/title');
//            let myChart = null;


            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(document.getElementById(vm.id));
            // 绘制图表
            this.myChart.setOption(vm.options,false);
        },

        watch: {},
        methods: {
            softMethods(){
                //sumcount 次数不变了 说明已经完成了
                let beginCount = this.sumCount;

                for (; this.i < this.arrayData.length; ){        // 类似抓扑克牌排序
                    if(this.state==0){
                        this.get = this.arrayData[this.i];                 // 右手抓到一张扑克牌
                        this.j = this.i - 1;                  // 拿在左手上的牌总是排序好的
                    }
                    for (;this.j >= 0 && this.arrayData[this.j] > this.get;){    // 将抓到的牌与手牌从右向左进行比较
                        this.state = 1;
                        this.arrayData[this.j + 1] = this.arrayData[this.j];            // 如果该手牌比抓到的牌大，就将其右移
                        this.changeCount++;
                        this.j--;
                        this.myChart.setOption(this.options,false);
                        this.sumCount++;
                        return;
                    }
                    this.state = 0;
                    this.arrayData[this.j + 1] = this.get; // 直到该手牌比抓到的牌小(或二者相等)，将抓到的牌插入到该手牌右边(相等元素的相对次序未变，所以插入排序是稳定的)
                    this.i++;
                    this.changeCount++;
                    this.sumCount++;
                    this.myChart.setOption(this.options,false);
                    return;
                }

                if(beginCount === this.sumCount){
                    this.isComplate = 1;
                }
            },
            changeDataj(){
                let vm = this;
//                timePicker = window.setInterval(function () {
                    vm.softMethods()
//                },150);
            },

        },
        computed: {
            options(){
                return {
                    title: {
                        text: this.title
                    },
                    animation: false,
                    tooltip: {},
                    xAxis: {
                        data: []
                    },
                    yAxis: {},
                    series: [{
                        name: '',
                        type: 'bar',
                        data: this.arrayData,
                        itemStyle:{
                            normal:{
                                color:(item)=>{
//                                    console.log(item)
//                                    if(this.disposeData[item.dataIndex]==0){
//                                        return '#409EFF';
//                                    }else {
//                                        return '#67C23A'
//                                    }
                                    if(item.dataIndex==this.i){
                                        return '#F56C6C'
                                    }else if(item.dataIndex+1==item.data){
                                        return '#67C23A'
                                    } else {
                                        return '#409EFF';
                                    }
                                }
                            }},
                    },{
                        type: 'bar',
                        barGap: '-140%',
                        itemStyle: {
                            opacity: 0.8,
                            color:(item)=>{
                                //console.log(item)
                                if(item.dataIndex==this.j+2){
                                    return '#E6A23C';
                                }else {
                                    return 'rgba(252,214,80,0)'
                                }
//                                if(item.dataIndex+1==item.data){
//                                    return 'rgb(52,212,65)'
//                                }else {
//                                    return 'rgb(252,214,80)';
//                                }
                            }
                        },
                        barWidth: '60%',
                        z:-1,
                        data: [
                            30,30,30,30,30,30,30,30,30,30,
                            30,30,30,30,30,30,30,30,30,30,
                            30,30,30,30,30,30,30,30,30,30,
                        ],
                    }]
                }
            },
            arrayData:{
                get(){
                    if(this.arrayDataO.length==0){
                        Object.assign(this.arrayDataO, this.arrayDataP);
                    }
                    return this.arrayDataO;
                },
                set(val){
                    this.this.arrayDataO = val;
                }
            },
        },
        components: {}
    }
</script>

<style scoped>

</style>