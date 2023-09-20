


const Vue = require('vue')
const Vuex = require('vuex')

// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex)


const s1 = new Vuex.Store({
    state: { count: 0 },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})


const s2 = new Vuex.Store({
    state: { count: 0 },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

console.log(s1 === s2); // false  说明两个实例  完全是两个不同的Store