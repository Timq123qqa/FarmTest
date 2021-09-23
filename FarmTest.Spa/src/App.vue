<template>
    <div id="app">
        <Home msg="Hello world!" />
        <AddAnimal v-on:save-animal="saveAnimal" ref="addAnimal"/>
        <Animals v-bind:animals="animals" v-on:del-animal="deleteAnimal" v-on:edit-animal="editAnimal"/>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Animals from './components/Animals.vue';
    import AddAnimal from './components/AddAnimal.vue';
    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            Home,
            Animals,
            AddAnimal
        },
        data() {
            return {
                animals: []
            }
        },
        methods: {
            async editAnimal(id, name) {
                this.$refs.addAnimal.edit(id, name);
            },

            async deleteAnimal(id) {
                console.log('delete', id);

                axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/Animals?id=${id}`)
                    .then(res => { this.animals = this.animals.filter(a => a.id !== id); console.log(res); })
                    .catch(error => alert(error.response.data));
            },

            async saveAnimal(newAnimal) {
                if (newAnimal.id)
                    await this.updateAnimal(newAnimal);
                else
                    await this.addAnimal(newAnimal);
            },

            async updateAnimal(newAnimal) {
                axios.put(`${process.env.VUE_APP_API_ENDPOINT}/Animals`, newAnimal)
                    .then(res => {
                        if (this.animals.filter(a => a.id === newAnimal.id))
                            this.animals.filter(a => a.id === newAnimal.id)[0].name = res.data.name;
                    })
                    .catch(error => alert(error.response.data));
            },

            async addAnimal(newAnimal) {
                axios.post(`${process.env.VUE_APP_API_ENDPOINT}/Animals`, newAnimal)
                    .then(res => this.animals = [...this.animals, res.data])
                    .catch(error => alert(error.response.data));
            }
        },
        async created() {
            var fn = function () {
                console.log(this.test);
            };
            var
                v1 = { test: 'b' },
                v2 = { test: 'A' },
                v3 = { test: 'c' },
                fna = fn.bind(v1);

            fna();
            fna.apply(v2, []);
            fna.call(v3);

           // console.log(a.color, b.color, c.color, d.color);

            //axios.get(`${process.env.VUE_APP_API_ENDPOINT}/Animals`)
              //  .then(res => this.animals = res.data)
                //.catch(error => alert(error.response.data));
        }
    };
</script>

<style>
</style>

