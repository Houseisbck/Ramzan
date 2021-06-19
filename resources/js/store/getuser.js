export default {
    actions:{
        async getUser ({ commit }, { email, password }) {
            axios.post('/login',{email, password})
        }
}}