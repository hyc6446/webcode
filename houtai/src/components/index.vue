<template>
    <div>
        <a-row class="container">
            <a-col :span="12">col-12</a-col>
            <a-col :span="12">col-12</a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    background: teal;
    height: 60px;
}

</style>