<script setup>

</script>

<template>
    <div class="context-menu" :style="{ top: `${top}px`, left: `${left}px` }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        top: {
            type: Number,
            default: 0
        },
        left: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {

        };
    },
    methods: {
        closeContextMenu(e) {
            if (!e.target.closest('.context-menu')) {
                this.$emit('close');
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.closeContextMenu);
        console.log('Context menu mounted at:', this.top, this.left);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeContextMenu);
    },
}
</script>

<style lang="scss">
.context-menu {
    display: flex;
    flex-direction: column;
    border: 2px solid #444444;
    background-color: rgb(31, 31, 31);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;

    z-index: 500;
    position: absolute;

    button{
        border: none;
        background-color: transparent;
        color: white;
        font-family: 'Roboto', sans-serif;
        padding: 5px;
        margin: 0;
        min-width: 120px;
        border-radius: 5px;
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            cursor: pointer;
        }
    }
}

*{
    box-sizing: border-box;
}
</style>
