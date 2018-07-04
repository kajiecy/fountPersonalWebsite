<template>
    <div>
        <div :id="id" style="width: 400px;height: 350px"></div>
        数据交换次数：{{changeCount}}
        <div>
            循环次数：{{sumCount}}
        </div>
        <div>
            isComplate:{{isComplate}}
        </div>
    </div>


</template>

<script>

    export default {

        props: {
            id: {
                type: String,
                default() {
                    return ""
                }
            },
            //父组件传来的统一数据
            arrayDataP: {
                type: Array,
                default() {
                    return [];
                }
            },
            title: {
                type: String,
                default() {
                    return "冒泡排序";
                }
            },

        },
        data() {
            return {
                disposeData: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                arrayDataO: [],
                i: 0,
                j: 29,
                isComplate: 0,
                myChart: {},
                changeCount: 0,
                sumCount: 0,

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
            this.myChart.setOption(vm.options, false);
        },

        watch: {},
        methods: {
            softMethods() {
//                console.log("data length 222",this.arrayData.length)
                //如果 i == this.arrayData.length-1 跳出循环
                if (this.i == this.arrayData.length - 1) {
                    this.isComplate = 1;
                }
                for (; this.i < this.arrayData.length - 1;) {
//                  console.log("进入循环1")
                    for (; ;) {// j开始等于0，
                        if (!(this.j > this.i)) {
                            this.j = 29;
//                          this.softMethods()
                            this.i++
                            this.sumCount++;
                            this.myChart.setOption(this.options, false);
                            return
                        }
//                      console.log("进入循环2")
                        if (this.arrayData[this.j - 1] > this.arrayData[this.j]) {
                            let temp = this.arrayData[this.j - 1];
                            this.arrayData[this.j - 1] = this.arrayData[this.j];
                            this.arrayData[this.j] = temp;
                            this.changeCount++;
                        }
                        this.j--;
                        this.sumCount++;
                        this.myChart.setOption(this.options, false);
                        return
                    }
                }
            },
            changeDataj() {
                let vm = this;
//                timePicker = window.setInterval(function () {
                vm.softMethods()
//                },150);
            },
            reload() {
                this.i = 0;
                this.j = 29;
                this.changeCount = 0;
                this.sumCount = 0;
                Object.assign(this.arrayDataO, this.arrayDataP);
                this.myChart.setOption(this.options, false);
            }

        },
        computed: {
            options() {
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
                        itemStyle: {
                            normal: {
                                color: (item) => {
//                                    console.log(item)
//                                    if(this.disposeData[item.dataIndex]==0){
//                                        return '#409EFF';
//                                    }else {
//                                        return '#67C23A'
//                                    }
                                    if (item.dataIndex + 1 == item.data) {
                                        return '#67C23A'
                                    } else if (item.dataIndex == this.j) {
                                        return '#F56C6C'
                                    } else {
                                        return '#409EFF';
                                    }
                                }
                            }
                        },
                    }, {
                        type: 'bar',
                        barGap: '-140%',
                        itemStyle: {
                            opacity: 0.8,
                            color: (item) => {
                                //console.log(item)
                                if (item.dataIndex == this.j) {
                                    return '#E6A23C';
                                } else {
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
                        z: -1,
                        data: [
                            30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                            30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                            30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                        ],
                    }]
                }
            },
            arrayData: {
                get() {
                    if (this.arrayDataO.length == 0) {
                        Object.assign(this.arrayDataO, this.arrayDataP);
                    }
                    return this.arrayDataO;
                },
                set(val) {
                    this.this.arrayDataO = val;
                }
            },
        },
        components: {}
    }
</script>

<style scoped>

</style>