<template>
    <div>
        欢迎界面 <el-button @click="consoleDate()">11</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },

        watch: {},
        methods: {
            consoleDate(){

                console.log(this.$store.getters.getMenuList)
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>