<template>
    <div class="animal">
        <p>
            {{animal.name}}&nbsp;
            <span class="buttons">
                <button @click="$emit('edit-animal', animal.id, animal.name)" class="btn edt">Edit</button>&nbsp;&nbsp;
                <button @click="$emit('del-animal', animal.id)" class="btn del">Delete</button>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Animal",
        props: ["animal"]
    }
</script>

<style scoped>
    p{
        margin:0px;
    }

    .animal {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .buttons {
        float: right;
    }

    .btn {
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 10%;
        cursor: pointer;
    }

    .del {
        background: #aa0000;
    }
    .edt {
        background: #00aa00;
    }
</style>