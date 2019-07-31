<template>
    <div>
        <h1>This one is double the amount {{doubleValueText}}</h1>
    </div>
</template>
<script>
export default {
    name: "SecondText",
    computed : {
        doubleValueText(){
            return this.$store.getters["g/doubleAmount"]
        }
    }
}
</script>