import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        counter: state => state.counter * 2
    },
    mutations: {
        increment: state => state.counter++,
        decrement: state => state.counter--
    }
});

const App = new Vue({
    template: `
    <div>
    <p class="counter">{{counter}}</p>
        <div class="actions">
            <div class="actions-inner">
                <button @click="increment">PLUS</button>
            </div>
        </div>
    </div>
    `,
    store: store,
    computed: {
        counter: function () {
            return this.$store.getters.counter
        }
    },
    methods: {
        increment: function() {
            this.$store.commit('increment');
        }
    }
});


App.$mount('#app');
