<script setup>

</script>

<template>
    <div class="overlay" @click="$emit('close')">
        <div class="content" @click.stop>
            <div class="header">
                <h2>{{ title }}</h2>
                <button @click="$emit('close')">
                    <img src="@/assets/close.png" alt="Close" />
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        default: 'Overlay Title'
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted(){

  }
}
</script>

<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;

    .content {
        z-index: 51;
        background-color: rgb(43, 43, 43);
        color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 600px;
        min-height: 400px;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;

            h2 {
                margin: 0;
                font-size: 1.5rem;
                font-family: 'Montserrat', sans-serif;
            }

            button {
                all: unset;
                cursor: pointer;

                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        span{
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            margin-bottom: 10px;
        }

        input{
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #3e3c41;
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            margin-bottom: 10px;

            &:focus {
                outline: 2px solid #27d4ff;
                box-shadow: 0 0 5px rgb(39, 212, 255);
            }
        }

        select {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #3e3c41;
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            margin-bottom: 10px;

            &:focus {
                outline: 2px solid #27d4ff;
                box-shadow: 0 0 5px rgb(39, 212, 255);
            }
        }
    }
}
</style>
