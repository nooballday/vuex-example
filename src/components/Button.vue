<template>
    <div>
        <button v-on:click="addClicked" type="button">Add More</button>
    </div>
</template>

<script>
export default {
    name: "MyButton",
    methods: {
        addClicked(){
            this.$store.commit('g/increment')
        }
    }
}
</script>