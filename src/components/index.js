import Vue from "vue"
import Refresh from "./Refresh"

const Components = {
    Refresh
}

Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name])
})

export default Components
