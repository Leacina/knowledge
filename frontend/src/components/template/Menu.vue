<template>
    <aside class="aside"></aside>
</template>

<script>
export default {
    name : "aside"
}
</script>

<style>
    .aside{
        grid-area: aside;
        background: linear-gradient(to rigth,#232526,#414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
