export default {
    actions: {
        async logout({ commit }) {
            axios
                .post('/logout')
        }
    }
}
