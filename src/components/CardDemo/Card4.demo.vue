<demo>图片卡</demo>
<template>  
    <Card class="card" :body-style="{padding: 0}">
        <img src="../../assets/mdl.jpg" class="image" />
        <h3>McDonald's</h3>
    </Card>
</template>
<script lang="ts">
import {Card} from '../../lib/index';

export default{
    components: {Card},
}
</script>

<style lang="scss" scope>
.image {
    width: 100%;
}
h3 {
    margin:16px;
}
</style>