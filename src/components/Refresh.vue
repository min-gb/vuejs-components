<template>
    <div class="refresh">
        <slot></slot>
        Test
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .refresh {
        background-color: red;
    }
</style>
