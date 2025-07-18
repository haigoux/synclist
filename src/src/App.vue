<script setup>
import draggable from 'vuedraggable'
import overlay from './components/overlay.vue';
</script>

<template>
    <overlay v-if="_add_task_overlay" @close="_add_task_overlay = false" title="Add Task">
        <span>
            Task Details
        </span>
        <input type="text" placeholder="Enter text here" v-model="_taskInput" />
        <span>
            Task Group
        </span>
        <select v-model="_selected_subject">
            <option v-for="subject in list" :key="subject.name" :value="subject">{{ subject.name }}</option>
        </select>
    </overlay>
    <div class="navbar">
        <div class="header">
            <h1>TASK GROUPS</h1>
            <button>
                <img src="@/assets/plus.png" />
            </button>
        </div>
        <draggable v-model="list" item-key="name" class="list" :animation="200">
            <template #item="{ element }">
                <button class="draggable-item" @click="_selected_subject = element"
                    :class="{ selected: _selected_subject === element }" @click.right.stop.prevent="_selected_editing = element; _selected_subject = element">
                    <div class="left">
                        <div class="color-bar" :style="{ backgroundColor: element.color }"></div>
                        <span v-if="!(_selected_editing && _selected_subject === element)">
                            {{ element.name }}</span>
                        <input type="text" v-else v-if="_selected_editing && _selected_subject === element" v-model.lazy="element.name" @blur="_selected_editing = null" />
                    </div>
                    <div class="right">
                        <span>{{element.objects.filter(obj => !obj.completed).length}}</span>
                    </div>
                </button>
            </template>
        </draggable>
    </div>
    <div class="content">
        <div class="actions">
            <div class="left">

                <button @click="_add_task_overlay = true">
                    <img src="@/assets/plus.png" />
                    <span>
                        add task
                    </span>
                </button>
                <!-- remove all objects from the subject in list -->
                <button @click="clearTaskGroupObjects(list.indexOf(_selected_subject))">
                    <img src="@/assets/trash.png" />
                    <span>
                        clear tasks
                    </span>
                </button>
                <button>
                    <img src="@/assets/mark.png" />
                    <span>
                        mark all
                    </span>
                </button>
                <button>
                    <img src="@/assets/unmark.png" />
                    <span>
                        unmark all
                    </span>
                </button>
            </div>
            <div class="right">
                <!-- sync indicator -->
            </div>
        </div>
        <div class="object" v-if="_selected_subject" v-for="(obj, index) in _selected_subject.objects" :key="index">
            <div class="object-item" :class="{ completed: obj.completed }">
                <span>{{ obj.value }}</span>
                <input type="checkbox" v-model="obj.completed" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            _taskInput: '',
            _add_task_overlay: false,
            _selected_subject: null,
            _selected_editing: null,
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
                            "value": "Object B1",
                            "completed": false,
                        },
                        {
                            "value": "Object B1",
                            "completed": false,
                        },
                        {
                            "value": "Object B1",
                            "completed": false,
                        },
                        {
                            "value": "Object B1",
                            "completed": false,
                        },
                        {
                            "value": "Object B1",
                            "completed": false,
                        },
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
        clearTaskGroupObjects(taskGroupIndex) {
            this.list[taskGroupIndex].objects = [];
        }
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
    max-width: 350px;
    background-color: #3e3c41;
    font-family: 'Montserrat', sans-serif;
    padding: 1rem;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 1rem;
        width: 100%;
        padding-bottom: 5px;

        h1 {
            margin: 0;
            color: white;
            font-weight: 100;
            width: 100%;
            font-size: 1.2rem;
            // 0cce6b
        }

        button {
            all: unset;
            padding: 5px;
            border-radius: 4px;
            display: flex;
            flex-direction: row;
            align-items: center;

            img {
                width: 20px;
                height: 20px;
            }

            &:hover {
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }


    .list {
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

            input[type="text"] {
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-size: 1rem;
                background-color: rgba(255, 255, 255, 0.1);
                border: none;
                outline: none;
            }
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            // width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            padding: 0 0.5rem;
        }

        &:hover {
            opacity: 0.8;
        }
    }
}

.content {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    padding: 1rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

    .actions{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;

        .left{
            width: fit-content;
            display: flex;
        }

        button {
            all: unset;
            padding: 0.5rem;
            border-radius: 4px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;

            img {
                width: 20px;
                height: 20px;
            }

            &:hover {
                cursor: pointer;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .object {
        // flex: 1;
        // margin-bottom: 1rem;
        max-width: 50%;
        width: 100%;

        .object-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1);

            &.completed {
                text-decoration: line-through;
                opacity: 0.6;
            }

            span {
                flex-grow: 1;
                margin-right: 1rem;
            }

            input[type="checkbox"] {
                cursor: pointer;
            }
        }
    }
}
</style>
