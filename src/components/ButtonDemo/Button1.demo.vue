<demo>
按钮类型
</demo>
<template>
    <div>
        <Button class="button">基础按钮</Button>
        <Button theme="primary">主要按钮</Button>
        <Button theme="success">成功按钮</Button>
        <Button theme="warning">警告按钮</Button>
        <Button theme="danger">危险按钮</Button>
        <Button theme="link">连接按钮</Button>
        <Button theme="text">文本按钮</Button>
    </div>

    <div>
        <Button>B</Button>
        <Button theme="primary">P</Button>
        <Button theme="success">S</Button>
        <Button theme="warning">W</Button>
        <Button theme="danger">D</Button>
    </div>

</template>

<script lang="ts">
import {Button} from '../../lib/index';

export default{
    components: {Button}
}
</script>