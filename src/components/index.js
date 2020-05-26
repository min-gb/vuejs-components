import Vue from "vue"
import Refresh from "./Refresh"
import SimpleTable from "./SimpleTable"
import VueTimers from 'vue-timers'

Vue.use(VueTimers)

Vue.use(require('vue-moment'));

const Components = {
    Refresh,
    SimpleTable
}

Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name])
})

export default Components
