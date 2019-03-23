<template>
    <footer class = "footer"></footer>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style>
    .footer{
        grid-area: footer;
        background: #DDD;
        background-color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
