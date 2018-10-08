<template>
    <div id="test-background">
        22234
    </div>
</template>

<script>
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'end function');
        });
    }
    console.log("start function")
    timeout(2000).then((value) => {
        console.log(value);
    });
    setTimeout(function () {
        console.log("main thread line")
    },3000);

    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    })

    p2.then(result => console.log(result))
        .catch(error => console.log(error))


    export default {
        name: "SymbolDemo",
        data() {
            return {
                value:"",
            }
        },
        created() {

        },
        mounted() {
        },
        watch: {},
        methods: {
            testPromise(){

            }
        },
        computed: {},
        components: {
        },
    }
</script>

<style scoped>
    #test-background{
    }
</style>