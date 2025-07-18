<script setup>
import draggable from 'vuedraggable'

</script>

<template>
    <div class="navbar">
        <h1>TASK GROUPS</h1>
        <draggable v-model="list" item-key="name" class="list" :animation="200">
            <template #item="{ element }">
                <button class="draggable-item" @click="_selected_subject = element" :class="{ selected: _selected_subject === element }">
                    <div class="left">
                        <div class="color-bar" :style="{ backgroundColor: element.color }"></div>
                        <span>{{ element.name }}</span>
                    </div>
                    <div class="right">
                        <span>{{ element.objects.filter(obj => !obj.completed).length }}</span>
                    </div>
                </button>
            </template>
        </draggable>
    </div>
    <div class="content">

    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            _selected_subject: null,
            list: [
                {
                    "name": "Subject A",
                    "color": "#FF5733",
                    "objects": [
                        {
                            "value": "Object A1",
                            "completed": false,
                        },
                        {
                            "value": "Object A2",
                            "completed": true,
                        }
                    ]
                },
                {
                    "name": "Subject B",
                    "color": "#33FF57",
                    "objects": [
                        {
                            "value": "Object B1",
                            "completed": false,
                        },
                        {
                            "value": "Object B2",
                            "completed": true,
                        }
                    ]
                },
                {
                    "name": "Subject C",
                    "color": "#FF33FF",
                    "objects": [
                        {
                            "value": "Object C1",
                            "completed": false,
                        },
                        {
                            "value": "Object C2",
                            "completed": true,
                        }
                    ]
                }
            ]
        };
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">
.navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    max-width: 300px;
    background-color: #3e3c41;
    font-family: 'Montserrat', sans-serif;
    padding: 1rem;

    h1 {
        margin: 0;
        text-align: center;
        color: white;
        font-weight: 100;
        width: 100%;
        font-size: 1.5rem;
        border-bottom: 3px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 1rem;
        // 0cce6b
    }

    .list{
        width: 100%;
    }

    .draggable-item {
        width: 100%;
        padding: 0.5rem;
        margin: 0.25rem 0;
        border: none;
        border-radius: 4px;
        color: rgb(236, 236, 236);
        font-weight: 300;
        cursor: pointer;
        font-size: 1.2rem;
        transition: background-color 0.3s ease;
        font-family: "Rubik", sans-serif;
        text-shadow: 1px 1px 0px rgb(0, 0, 0);
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        &.selected {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .left {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            gap: 0.5rem;

            .color-bar {
                width: 5px;
                height: 15px;

                flex-shrink: 0;
                border-radius: 2px;
            }
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
        }

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
