<template>
    <div class="guoguo-tabs">
        <div class="guoguo-tabs-nav" ref="container">
            <div 
                class="guoguo-tabs-nav-item" 
                v-for="(node, index) in defaults" 
                :ref="el => {if (node.props.title === selected) selectedItem = el}" 
                @click="select(node)" 
                :class="[node.props.title===selected ? 'selected' : '', node.props.disabled === '' ? 'disabled' : '']" 
                :key="index">{{node.props.title}}</div>
            <div class="guoguo-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="guoguo-tabs-content" ref="content">
            <component :is="current" :key="current.props.title" />
        </div>
    </div>
</template>

<script lang="ts">
import {ref, computed, onMounted, onUpdated } from 'vue';
import Tab from './Tab.vue';

export default {
    props: {
        selected: {
            type: String
        },
        center: {
            teyp: Boolean,
            default:false,
        }
    },
    setup (props, context) {
        let {selected} = props;
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);
        const content = ref<HTMLDivElement>(null);
        const defaults = context.slots.default();
        const select = (node) => {
            if(node.props.disabled === '') return;
            context.emit('update:selected', node.props.title)
        }
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs 子标签必须是 Tab')
            }
            
        })
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const titles = defaults.map(tag => tag.props.title)
        const updateIndicator = () => {
            const {width} = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + 'px';
            const {left: left1} = container.value.getBoundingClientRect();
            const {left: left2} = selectedItem.value.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + 'px';
        }
        onMounted(() => {
            // defaults.forEach((node) => {
            //     if(node.props.disabled === '' && selected === node.props.title) {
            //         selected = defaults[0].props.title;
            //     }
            // })
            updateIndicator();
        });
        onUpdated(updateIndicator);

        return {
            current, 
            defaults, 
            titles, 
            select, 
            selectedItem, 
            indicator, 
            container,
            content}
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";

.guoguo-tabs {
    &-nav {
        display: flex;
        color: $text-color;
        border-bottom: 1px solid $border-color;
        position: relative;
        white-space: nowrap;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        &-item {
            padding: 8px 16px;
            cursor: pointer;
            &.selected {
                color: $blue;
            }
            &.disabled{
                cursor: not-allowed;
                color: #ccc
             }
        }
        &-indicator {
            position: absolute;
            height: 2px;
            background: $blue;
            left: 0;
            bottom: 0px;
            transition: all 250ms;
        }
    }
    &-content{
        padding: 1.5em 1em;
    }
 }   
</style>