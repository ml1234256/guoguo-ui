<demo>设置卡片头文字与样式</demo>
<template>  
    <Card header="Card Title">
        card content ... <br />
        card content ... <br />
        card content ... <br />
        card content ... <br />
    </Card>
    <Card header="Card Title" :headerStyle="{color:'red', padding: '20px'}">
        card content ... <br />
        card content ... <br />
        card content ... <br />
        card content ... <br />
    </Card>
</template>
<script lang="ts">
import Card from '../../lib/Card.vue';

export default{
    components: {Card},
}
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 18px;
    }
</style>