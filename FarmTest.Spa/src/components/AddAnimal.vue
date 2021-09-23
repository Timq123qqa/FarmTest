<template>
    <div>
        <form @submit="addAnimal">
            <input type="text" v-model="name" name="name" placeholder="Add animal..." />
            <input type="submit" value="Submit" class="btn" />
            <input type="submit" value="Cancel" class="btn" v-bind:class="{'edit-mode': !this.editMode}" />
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddAnimal",
        data() {
            return {
                editMode:false,
                name: '',
                id: null
            }
        },
        methods: {
            edit(id, name) {
                this.editMode = true;
                this.name = name;
                this.id = id;
            },
            addAnimal(e) {
                e.preventDefault();

                if (e.submitter.value != 'Cancel') {
                    if (this.editMode) {
                        const newAnimal = {
                            id: this.id,
                            name: this.name
                        }
                        this.$emit('save-animal', newAnimal);
                    }
                    else {
                        const newAnimal = {
                            name: this.name
                        }
                        this.$emit('save-animal', newAnimal);
                    }
                }

                this.editMode = false;
                this.name = '';
            }
        }
    }
</script>

<style scoped>
    form{
        display:flex;
    }

    .edit-mode{
        display:none;
    }

    input[type="text"]{
        flex:10;
        padding:5px;
    }

    input[type="submit"] {
        flex: 2;
    }

</style>