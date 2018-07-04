<template>
    <div>
        <div style="margin-top: 10px">
        <span
                style="display: inline-block;width: 10px;height: 24px;background-color: #409EFF;position: relative;top: 7px;margin: 0px 10px"></span>
            <span style="font-size: 14px;">请选择模块</span>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange(checkAll,-1)">全选
            </el-checkbox>
        </div>
        <!--{{moduleCheckAll}}-->
        <div class="module-name">
            认知模块
            <el-checkbox :indeterminate="moduleCheckAll[0].isIndeterminate" v-model="moduleCheckAll[0].moduleAll"
                         @change="handleCheckAllChange(moduleCheckAll[0].moduleAll,moduleCheckAll[0].index)">全选
            </el-checkbox>

            <div class="module-sub">
                <el-checkbox-group v-model="moduleList">
                    <el-checkbox v-for="(item,index) in moduleData[0]" :key="item.value" :disabled="item.isDisabled"
                                 :label="item.value">{{item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="module-name">
            激活模块
            <el-checkbox :indeterminate="moduleCheckAll[1].isIndeterminate" v-model="moduleCheckAll[1].moduleAll"
                         @change="handleCheckAllChange(moduleCheckAll[1].moduleAll,moduleCheckAll[1].index)">全选
            </el-checkbox>

            <div class="module-sub">
                <el-checkbox-group v-model="moduleList">
                    <el-checkbox v-for="(item,index) in moduleData[1]" :key="item.value" :disabled="item.isDisabled"
                                 :label="item.value">{{item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="module-name">
            行动模块
            <el-checkbox :indeterminate="moduleCheckAll[2].isIndeterminate" v-model="moduleCheckAll[2].moduleAll"
                         @change="handleCheckAllChange(moduleCheckAll[2].moduleAll,moduleCheckAll[2].index)"
                         :disabled="moduleCheckAll[2].moduleAll">全选
            </el-checkbox>

            <div class="module-sub">
                <el-checkbox-group v-model="moduleList">
                    <el-checkbox v-for="(item,index) in moduleData[2]" :key="item.value" :disabled="item.isDisabled"
                                 :label="item.value">{{item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="module-name">
            应用模块
            <el-checkbox :indeterminate="moduleCheckAll[3].isIndeterminate" v-model="moduleCheckAll[3].moduleAll"
                         @change="handleCheckAllChange(moduleCheckAll[3].moduleAll,moduleCheckAll[3].index)">全选
            </el-checkbox>

            <div class="module-sub">
                <el-checkbox-group v-model="moduleList">
                    <el-checkbox v-for="(item,index) in moduleData[3]" :key="item.value" :disabled="item.isDisabled"
                                 :label="item.value">{{item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="module-name">
            发展模块
            <el-checkbox :indeterminate="moduleCheckAll[4].isIndeterminate" v-model="moduleCheckAll[4].moduleAll"
                         @change="handleCheckAllChange(moduleCheckAll[4].moduleAll,moduleCheckAll[4].index)"
                         :disabled="moduleCheckAll[4].moduleAll">全选
            </el-checkbox>

            <div class="module-sub">
                <el-checkbox-group v-model="moduleList">
                    <el-checkbox v-for="(item,index) in moduleData[4]" :key="item.value" :disabled="item.isDisabled"
                                 :label="item.value">{{item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div style="text-align: right">
            <el-button type="primary" @click="insertStep=1">上一步</el-button>
        </div>
        <div>
            <!--{{moduleList}}-->
        </div>
    </div>
</template>

<script>

    const allModule = ["1300009", "1300011", "1300013", "1300021", "1300020", "1300023", "1300003", "1300025", "1300004", "1300007", "1300005", "1300015", "1300008", "1300010", "1300018", "1300019"];
    const defaultModule = ["1300009", "1300011", "1300013"];
    const moduleData = [
        [
            {value: '1300021', name: '认知调研'},
            {value: '1300020', name: '认知考试'},
            {value: '1300023', name: '用户承诺'},
        ], [
            {value: '1300003', name: '学习目标'},
            {value: '1300025', name: '讲师介绍'},
            {value: '1300004', name: '学习地图'},
            {value: '1300007', name: '领导讲话'},
            {value: '1300005', name: '学习规则'},
            {value: '1300015', name: '群聊二维码'},
            {value: '1300008', name: '课前测验'},
        ], [
            {value: '1300009', name: '课程小节', isDisabled: true},
        ], [
            {value: '1300010', name: '签到'},
            {value: '1300011', name: '要点', isDisabled: true},
            {value: '1300018', name: '学生调研'},
            {value: '1300019', name: '老师调研'},
        ], [
            {value: '1300013', name: '发展任务', isDisabled: true},
        ],
    ];

    export default {
        data() {
            return {
                //多选框
                moduleList: ["1300009", "1300011", "1300013"],
                isIndeterminate: false,
                checkAll: false,

                moduleCheckAll: [
                    {index: 0, moduleAll: false, isIndeterminate: false,},
                    {index: 1, moduleAll: false, isIndeterminate: false},
                    {index: 2, moduleAll: true, isIndeterminate: false},
                    {index: 3, moduleAll: false, isIndeterminate: false},
                    {index: 4, moduleAll: true, isIndeterminate: false},
                ]
            }
        },
        created() {

        },
        mounted() {

        },
        watch: {
            moduleList: function (nval, oval) {
                let checkedCount = nval.length;
                this.checkAll = checkedCount === 16;//16为当前所有的模块数
                this.isIndeterminate = checkedCount > 3 && checkedCount < 16;

                for (let {index, moduleAll, isIndeterminate} of this.moduleCheckAll) {
                    let haveCount = 0;
                    let disableCount = 0;
                    //检查数组中是否含有当前模块的值
                    for (let {name, value, isDisabled} of this.moduleData[index]) {

                        if (this.moduleList.includes(value)) {
                            haveCount++;
                        }
                        if (isDisabled === true) {
                            disableCount++;
                        }
                    }
                    let sumModuleCount = this.moduleData[index].length;
                    this.moduleCheckAll[index].moduleAll = haveCount === sumModuleCount;
                    this.moduleCheckAll[index].isIndeterminate = haveCount > disableCount && haveCount < sumModuleCount;
                }
            }
        },
        methods: {
            handleCheckAllChange(val, index) {
//                alert(index);
                if (index == -1) {
                    this.moduleList = val ? allModule : defaultModule;
                    this.isIndeterminate = false;
                } else {
                    for (let {name, value, isDisabled} of this.moduleData[index]) {
                        if (val) {
                            //模块全选时循环 没有的 push 进待选数组
                            if (!this.moduleList.includes(value)) {
                                this.moduleList.push(value);
                            }
                        } else {
                            //说名移除
                            if (isDisabled != true) {
//                console.log("index",this.moduleList.findIndex(v=>v===value));
                                let index = this.moduleList.findIndex(v => v === value);
                                if (index != -1) {
                                    this.moduleList.splice(index, 1);
                                }
                            }

                        }
                    }

                }

            },
        },
        computed: {
            moduleData() {
                return moduleData;
            },
        },
        components: {

        }
    }
</script>

<style scoped>
    .module-name {
        padding: 20px 40px 0px 40px;
    }

    .module-sub {
        padding: 10px 20px 0px 20px;
    }

    .el-checkbox {
        margin: 5px;
    }
</style>