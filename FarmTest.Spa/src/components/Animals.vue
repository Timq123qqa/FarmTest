<template>
    <div>
        <div v-bind:key="animal.id" v-for="animal in animals">
            <Animal v-bind:animal="animal" v-on:del-animal="$emit('del-animal', animal.id)" v-on:edit-animal="$emit('edit-animal', animal.id, animal.name)" />
        </div>
    </div>
</template>

<script>
    import Animal from './Animal.vue';
    export default {
        name: "Animals",
        components: {
            Animal
        },
        props: ["animals"]
    }
</script>

<style scoped>
</style>