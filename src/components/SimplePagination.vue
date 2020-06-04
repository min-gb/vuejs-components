<template>
    <div>
        <div class="min-gb-pagination">
        <button
                :disabled="isPreviousButtonDisabled"
                @click="previousPage"
        >Pref
        </button>

        <SimplePaginationTrigger
                v-for="(item, index) in paginationTriggers"
                :key="item"
                v-bind:class='{"min-gb-current-page": (currentPage===(index+1))}'
                :pageNumber="index+1"
                @loadPage="onLoadPage(index+1)"
        />

        <button
                :disabled="isNextButtonDisabled"
                @click="nextPage">
            Next
        </button>
        </div>

    </div>
</template>

<script>

    import SimplePaginationTrigger from "./SimplePaginationTrigger"


    export default {
        name: 'pagination',
        components: {
            SimplePaginationTrigger
        },
        props: {
            currentPage: {
                type: Number,
                required: true
            },
            pageCount: {
                type: Number,
                required: true
            },
            visiblePagesCount: {
                type: Number,
                default: 5
            }
        },
        data() {
            return {
            }
        },
        computed: {
            isPreviousButtonDisabled() {
                return this.currentPage === 1
            },
            isNextButtonDisabled() {
                return this.currentPage === this.pageCount
            },
            paginationTriggers() {
                return Array(this.pageCount -1)
            }
        },
        methods: {
            nextPage() {
                this.$emit('nextPage')
            },
            previousPage() {
                this.$emit('previousPage')
            },
            onLoadPage(value) {
                console.log(`onLoadPage: ${value}`)
                this.$emit('loadPage', value)

            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style scoped>
    .min-gb-pagination {
        margin-top: 7px;
    }
    .min-gb-current-page {
        font-weight: bold;
    }

</style>
