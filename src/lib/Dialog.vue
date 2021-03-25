<template>
    <template v-if="visible">
        <teleport to='body'> 
            <div class="guoguo-dialog-overlay" @click="onClickOverlay"></div>
            <div class="guoguo-dialog-wrapper">
                <div class="guoguo-dialog">
                    <header>
                        <slot name="title" />
                        <span @click="close" class="guoguo-dialog-close"></span>
                    </header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer v-if="footer">
                        <Button @click="cancel">Cancel</Button>
                        <Button theme="primary" @click="ok">OK</Button>
                    </footer>
                </div>
            </div>
        </teleport>

    </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
    components: {Button},
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        footer:{
            type: Boolean,
            default:true,
        },
        ok: {
            type:Function
        },
        cancel: {
            type: Function
        }
    },
    setup (props, context) {
        const close = () => {
            context.emit('update:visible', false)
        }
        const onClickOverlay = () => {
            if(props.closeOnClickOverlay) {
                close();
            }
        }
        const ok = () => {
            if (props.ok && props.ok() !== false) {
                close()
            }
        }
        const cancel = () => {
            props.cancel && props.cancel();
            close();
        }
        return {close, onClickOverlay, ok, cancel}
    }
}
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;

.guoguo-dialog {
    background: #fff;
    // padding: 16px;
    min-width: 15em;
    max-width: 90%;
    border-radius: $radius;
    box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.5);
    &-overlay {
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade-out($color: #000000, $amount: 0.5);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        justify-content: space-between;
        align-items:center;
        font-size: 20px;
    }
    >main {
        padding: 2em 16px;
    }
    >footer {
        padding: 8px;
        border-top: 1px solid $border-color;
        text-align: right;
    }
    &-close {            
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before, &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #000;
            top: 50%;
            left: 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
   
}
</style>