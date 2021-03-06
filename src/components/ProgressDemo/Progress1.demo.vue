<demo>常规用法</demo>
<template>
<h3>设置颜色</h3>
<Progress percentage="80" class="process-bar" />
<Progress percentage="80" :color="red" class="process-bar" />
<h3>设置圆角</h3>
<Progress percentage="80" fillet class="process-bar" />
<h3>底部条置成灰色</h3>
<Progress percentage="80" background-grey class="process-bar" />
<h3>设置宽度</h3>
<Progress percentage="30" stroke-width='20' class="process-bar" />
<Progress percentage="30" stroke-width='60' color="rgb(247,70,104)" class="process-bar" />
<h3>设置内容</h3>
<Progress percentage="5" :stroke-width='35' class="process-bar" ><h4>primary</h4></Process>
</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress},
    setup(props) {
        const red = 'rgb(247,70,104)';
        return {red};
    }
}
</script>
<style lang="scss" scoped>
.process-bar {
    margin-top:10px;
}
h4 {
    color: #fff;
    text-align: right;
    display:flex;
    font-size: 30px;
}
</style> 