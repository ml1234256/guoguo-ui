<demo>图片卡</demo>
<template>  
    <Card class="card">
        <img src="../../assets/mdl.jpg" class="image" />
        <h3>McDonald's</h3>
    </Card>
</template>
<script lang="ts">
import Card from '../../lib/Card.vue';

export default{
    components: {Card},
}
</script>

<style lang="scss" scope>
.image {
    width: 100%;
}
h3 {
    margin-top:16px;
}
</style>