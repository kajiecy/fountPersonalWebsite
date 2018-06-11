<template>
    <div>
        <div>
            <el-button>
                222
            </el-button>
        </div>

    </div>
</template>

<script>
//    import Waterfall from 'vue-waterfall/lib/waterfall'
//    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

    export default {
        data() {
            return {
                items:[
                    {width:200,height:200,id:0},
                    {width:200,height:200,id:1},
                    {width:200,height:200,id:2},
                    {width:200,height:200,id:3},
                    {width:200,height:200,id:4},
                    {width:200,height:200,id:5},
                    {width:200,height:200,id:6},
                ]
            }
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {},
        computed: {},
        components: {
//            Waterfall,
//            WaterfallSlot
        }
    }
</script>

<style scoped>
    .item-move {
        transition: all .5s cubic-bezier(.55,0,.1,1);
        -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
    }

    .item {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        font-size: 1.2em;
        color: rgb(0,158,107);
    }
    .item:after {
        content: attr(index);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
</style>