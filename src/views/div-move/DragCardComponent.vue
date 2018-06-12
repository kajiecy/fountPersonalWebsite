<template>
    <div
        :key="id"
        class="drag-card"
        :class="cardClass"
    >
        <div class="float-child-title">
            <div class="text_clamp1 color-context">
                {{title}}
            </div>
            <div class="text_clamp1" style="font-size: 12px;color: #8492AE">
                {{subTitle}}
            </div>
            <div class="option-button">
                <el-dropdown  trigger="click"  @command="clickOption">
                      <span class="el-dropdown-link">
                        <i class="el-icon-more el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item command="div-float-mini" :disabled="cardClass=='div-float-mini'">小</el-dropdown-item>
                        <el-dropdown-item command="div-float-normal" :disabled="cardClass=='div-float-normal'">中</el-dropdown-item>
                        <el-dropdown-item command="div-float-large" :disabled="cardClass=='div-float-large'">大</el-dropdown-item>

                        <el-dropdown-item command="drop-option" >设置</el-dropdown-item>
                        <el-dropdown-item command="drop-delete" divided>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="float-child-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            id:{
                type:[String,Number],
                default(){
                    return ""
                }
            },
            cardClass:{
                type:String,
                default(){
                    return "";
                }
            },
            title:{
                type:String,
                default(){
                    return "标题：文字过多时会自动隐藏";
                }
            },
            subTitle:{
                type:String,
                default(){
                    return "2018-06-03~2018-06-17";
                }
            }

        },
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {
            clickOption(command){
//                console.log(command)
                if(command==='drop-delete'){
                    this.$confirm('确认删除？')
                        .then(_ => {
                            this.$emit("delItem");
                        })
                        .catch(_ => {});

                }else if(command==='drop-option'){
                    this.$emit("optItem");
                }else {
                    this.$emit("changeItem",this.id,command)
                }
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>
    /*卡片的通用样式*/
    [class*='div-float-']{
        height: 300px;
        padding: 10px;
        margin: 10px 1%;
        float: left;
        background-color: #ffffff;
        border-radius: 7px;
        box-shadow:0px 1px 5px rgba(31, 16, 16, 0.2);
    }

    [class*='div-float-']:hover{
        border: 1px solid #2AB1F0;
    }
    /*三种大小的框框*/
    .div-float-mini{
        width: calc(23% - 20px);
        height: 130px;
    }
    .div-float-normal{
        width: calc(48% - 20px);
    }
    .div-float-large{
        width: calc(98% - 20px);
    }

    .div-float-mini:hover{
        width: calc(23% - 20px - 2px);
        height: calc(130px - 2px);
    }
    .div-float-normal:hover{
        width: calc(48% - 20px - 2px);
        height: calc(300px - 2px);
    }
    .div-float-large:hover{
        width: calc(98% - 20px - 2px);
        height: calc(300px - 2px);
    }

    /*框框中内容和标题*/
    [class*='div-float-'] [class*='float-child']{
    }
    [class*='div-float-'] .float-child-title{
        height: 40px;
        cursor: move;
        border-bottom: 1px dashed #C0C4CC;
        font-size: 14px;
    }
    [class*='div-float-'] .float-child-content{
        height: calc(100% - 40px);
        cursor: default;
    }
    /*拖拽状态下显示蓝色框*/
    .sortable-ghost{
        background-color: rgba(85,172,238,.1);
        border-radius: 7px;
    }
    .sortable-ghost [class*='float-child']{
        display: none;
    }
    /*设置按钮样式*/
    .option-button{
        float: right;
        position: relative;
        top: -33px;
        cursor: pointer;
        display: none;
    }
    [class*='div-float-']:hover .option-button{
        display: block;
    }
    /*响应式配置*/
    @media all and (max-width: 1000px){
        .div-float-mini{
            width: calc(48% - 20px);

        }
        .div-float-normal{
            width: calc(98% - 20px);
        }

        .div-float-mini:hover{
            width: calc(48% - 20px - 2px);
            height: calc(130px - 2px);
        }
        .div-float-normal:hover{
            width: calc(98% - 20px - 2px);
        }
    }
    @media all and (max-width: 600px){
        .div-float-mini{
            width: calc(98% - 20px);
        }
        .div-float-normal{
            width: calc(98% - 20px);
        }
        .div-float-mini:hover{
            width: calc(98% - 20px - 2px);
            height: calc(130px - 2px);
        }
        .div-float-normal:hover{
            width: calc(98% - 20px - 2px);
        }
    }
</style>