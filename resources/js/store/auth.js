export default {
    actions:{
        async login ({ commit }, { email, password }) {
            axios.post('/login',{email, password})
        },
        async register ({ commit }, { email, password, name }) {
            axios.post('/register', {email, password, name})
        },
        async logout ({ commit }) {
            axios.post('/logout')
        }
    }
}
