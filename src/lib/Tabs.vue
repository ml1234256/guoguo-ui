<template>
    <div class="guoguo-tabs">
        <div class="guoguo-tabs-nav" ref="container">
            <div class="guoguo-tabs-nav-item" v-for="(t, index) in titles" :ref="el => {if (t === selected) selectedItem = el}" @click="select(t)" :class="{selected: t===selected}" :key="index">{{t}}</div>
            <div class="guoguo-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="guoguo-tabs-content">
            <component :is="current" :key="current.props.title" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, onMounted, onUpdated } from 'vue';
import Tab from './Tab.vue';

export default defineComponent({
    props: {
        selected: {
            type: String
        }
    },
    setup (props, context) {
 
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);
        const updateIndicator = () => {
            const {width} = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + 'px';
            const {left: left1} = container.value.getBoundingClientRect();
            const {left: left2} = selectedItem.value.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + 'px';
        }
        onMounted(updateIndicator);
        onUpdated(updateIndicator);
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs 子标签必须是 Tab')
            }
            
        })
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const titles = defaults.map(tag => tag.props.title)
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {current, defaults, titles, select, selectedItem, indicator, container}
    }
})
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$text-color: #333;
$border-color: #d9d9d9;

.guoguo-tabs {
    &-nav {
        display: flex;
        color: $text-color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            // &:first-child {
            //     margin-left: 0;
            // }
            &.selected {
                color: $blue;
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