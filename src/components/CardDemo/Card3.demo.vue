<demo>设置卡片内容样式</demo>
<template>  
    <Card header="Card Title" :body-style="{color:'red'}">
        card content ... <br />
        card content ... <br />
        card content ... <br />
        card content ... <br />
    </Card>
</template>
<script lang="ts">
import {Card} from '../../lib/index';

export default{
    components: {Card},
}
</script>