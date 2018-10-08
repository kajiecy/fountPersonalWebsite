<template>
    <div class="">
        <div style="text-align: right">
            <el-button type="primary" icon="el-icon-plus" @click="addItems()"></el-button>
        </div>
        <draggable v-model="items"  @update="datadragEnd" :options='{animation:300,handle:".float-child-title"}'>
            <template v-for="(item,index) in items">
                <drag-card :key="item.id" :id="item.id" :cardClass="item.class" :title="item.title" :subTitle="item.subTitle"
                           @delItem="delItem(index)" @optItem="optItem(item)" @changeItem="changeItem">
                    {{item.content}}
                </drag-card>
            </template>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import DragCard from './DragCardComponent.vue'
    export default {
        data() {
            return {
                items:[
                    {class:'div-float-normal',id:0,title:"测试标题",subTitle:'副标题',content:'此处为一个插槽'},
                    {class:'div-float-mini',id:1},
                    {class:'div-float-mini',id:2},
                    {class:'div-float-mini',id:3},
                    {class:'div-float-mini',id:4},
                    {class:'div-float-large',id:5},
                ],
            }
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {
            addItems(){
              this.items.push({class:'div-float-mini',id:this.items.length})
            },
            datadragEnd (evt) {
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
            },
            delItem(index){
                this.items.splice(index,1);
            },
            optItem(item){
                alert("收到一个配置请求进行路由跳转,对象id:"+item.id);
            },
            changeItem(id,changeClass){
                for(let item of this.items){
                    if(item.id == id){
                        item.class = changeClass;
                        console.log(item)
                    }
                }
            }
        },
        computed: {

        },
        components: {
            draggable,
            DragCard,
        },
        beforeRouteEnter (to, from, next) {
            console.log("触发before守卫")
            next();
        }
    }
</script>

<style scoped>

</style>
