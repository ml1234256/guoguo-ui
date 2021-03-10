<demo>图片卡</demo>
<template>  
    <Card>
        <img src="../../assets/mdl.jpg" class="image" />
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
    width: 80%
}
</style>