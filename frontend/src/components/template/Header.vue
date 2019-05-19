<template>
    <div class = "header">

        <a class = "toggle">
          <i class="fa fa-lg" :class="icon" @click="toggleMenu" v-if="!hideToggle"></i>
        </a>
        <h1 class = "title">
            {{title}}
        </h1>
    </div>
</template>

<script>
export default {
    name : "Header",
    props:{
        title : String,
        hideToggle:Boolean
    },
    computed : { 
        icon(){
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods : {
        toggleMenu(){
            this.$store.commit("toggleMenu")
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right,#081738,#025c75);

        display: flex;
        justify-content: center;
        align-items: center;
    }    
    .title{
        color: #fff;
        font-size: 1.2rem;
        font-weight: 100;
        flex-grow: 1;

        text-align: center;
    }    

    .title a{
        color: #fff;
        text-decoration: none;
    }    

    a.toggle{
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    a.toggle:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
