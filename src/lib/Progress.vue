<template>
    <div class="bar-wrapper" ref="barWrapper">
            <div class="up" ref="up">
                <slot class="bar-content" />
            </div>
            <div class="down" ref="down"></div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

    export default {
        props: {
            percentage: {
                type: Number,
                default: 50,
            },
            color: {
                type: String,
                default: 'rgb(64,142,208)',
            },
            strokeWidth: {
                type: Number,
                default: 10,
            },
            fillet: {
                type: Boolean,
                default: false,
            },
            backgroundGrey: {
                type:Boolean,
                default: false,
            }
        },
        setup(props) {
            let {percentage, color, strokeWidth, fillet, backgroundGrey} = props;
            const barWrapper = ref<HTMLDivElement>(null);
            const up = ref<HTMLDivElement>(null);
            const down = ref<HTMLDivElement>(null);
            onMounted(() => {
 
                if (percentage < 0) percentage =0 ;
                if (percentage > 100) percentage = 100;
                
                up.value.style.width = percentage + '%';
                up.value.style.backgroundColor = color;
                down.value.style.backgroundColor = color;


                if (strokeWidth < 0) strokeWidth = 0;
                barWrapper.value.style.height = strokeWidth + 'px';

                const {height} = barWrapper.value.getBoundingClientRect();
                if (fillet) barWrapper.value.style.borderRadius = Math.round(height/2) + 'px';
                
                if(backgroundGrey) {
                    down.value.style.backgroundColor= 'rgb(237,237,237)';
                    down.value.style.opacity = '1';
                }
                up.value.style.lineHeight = height + 'px';
             });
            return {up, down,barWrapper}
        }
        
    }
</script>

<style lang="scss" scoped>

.bar-wrapper{
    width: 100%;
    position: relative;
       overflow: hidden;
        >.up {
            height: 100%;
            z-index: 2;
            position: absolute;
            text-align: center;
            padding:0 0.5em;
        }
        >.down {
            height: 100%;
            width: 100%;
            z-index: 1;
            position: absolute;
            opacity: 0.2;
        }
    }


</style>