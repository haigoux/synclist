<script setup>

</script>

<template>
    <div>
        <span v-if="!_editing" @click="_editing = true;focusSelf()">{{ value }}</span>
        <!-- update v-model -->
        <input ref="input" v-else @blur="_editing = false;" :placeholder="placeholder"
            @input="$emit('update:value', _value)" v-model="_value" />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Enter label'
        },
        value: {
            type: String,
            default: ''
        }

    },
    data() {
        return {
            _editing: false,
            _value: this.value
        };
    },
    methods: {
        focusSelf() {
            // nexttick is needed because the input is not focused immediately after blur, due to it being conditional
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">
input{
    all: unset;
    
    
}</style>
