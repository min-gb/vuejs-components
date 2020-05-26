<template>
    <div v-bind:class='{
                        "gb-min-alert-refresh": isAlert(),
                        "gb-min-warning-refresh": isWarning(),
                        "gb-min-ok-refresh": isOk()
                    }'>
        <slot></slot>
        Last Refresh: <span>{{lastDateRun | moment("yyyy-MM-dd h:mm:ss")}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                history: [],
                lastDateRun: new Date(),
                interval: 1000  // miliseconds
            }
        },
        methods: {
            isAlert() {
                return (new Date() - this.lastDateRun > 10000)
            },
            isWarning() {
                return (new Date() - this.lastDateRun > 50000)
            },
            isOk() {
                return (new Date() - this.lastDateRun >= 2000)
            }

        }
    }
</script>

<style scoped>
    .gb-min-alert-refresh {
        background-color: red;
        color: white;
    }

    .gb-min-warning-refresh {
        background-color: orange;
        color: #2c3e50;
    }

    .gb-min-ok-refresh {
        background-color: white;
        color: grey;
    }
</style>
