const state = () => ({
    token: null,
    MyTodos: [],

});

const getters = {};

const mutations = {
    setToken(state, data) {
        state.token = data;
    },
    GetMyTodos(state,data) {
        state.MyTodos = data;
    },
    CreateTodo(state, data) {
         state.CreateTodo = data;
     },
     AddTodo(state, data) {
        state.CreateTodo = data;
    },
    DeleteTodo(state, data) {
        state.CreateTodo = data;
    },
    UpdateTodo(state, data) {
        state.CreateTodo = data;
    }
};

const actions = {
    async login({ commit }, data) {
        console.log("iogo")
        // debugger;
        console.log(data.user_id)
        console.log(data.password)
        const res = await this.$axios.post("http://localhost:5000/api/user/log_in",{
            
            userId: data.user_id,
            password: data.password,
        }).then((res) => {
            console.log(res.data);
            commit('setToken', res.data);
         })
      },
      

      async getMyTodos({ commit }) {
        
         await this.$axios.get("http://localhost:5000/api/todo", {
            headers: { 'Authorization': 'Bearer' + this.state.token }
         }).then((res) => {
            console.log(res.data);
            commit('GetMyTodos', res.data);
         })
      },
      async CreateTodo({ commit }, data) {
        await this.$axios.post("http://localhost:5000/api/todo", {
           description: data.description,
           title: data.title
        }, { headers: { 'Authorization': 'Bearer ' + state.token } }).then((res) => {
          commit('CreateTodo', res.data);
        })
     },
     async GetAllTodos({ commit, state }) {
        await this.$axios.get("http://localhost:5000/api/todo", {
           headers: { 'Authorization': 'Bearer ' + state.token }



        }).then((res) => {
         commit('GetAllTodos', res.data);
        })
     },
     async addTodo({ commit },data) {
        await this.$axios.post("http://localhost:5000/api/todo",{description:data}, {
           headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
            // this.MyTodos.addTodo(res.data)
               console.log("added")
            // commit('AddTodo', res.data);
        })
     },
     async deleteTodo({ commit },id) {
        await this.$axios.delete("http://localhost:5000/api/todo/"+id, {
           headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
        // commit('DeleteTodo', res.data);
        })
     },
     async updateTodo({ commit },data) {
        console.log(data.id)
        console.log(data.description)
        

        await this.$axios.put("http://localhost:5000/api/todo/" + data.id,{description:data.description},{
           headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
         //commit('UpdateTodos', res.data);
        })
     },

   };



export default {
    state,
    getters,
    mutations,
    actions,
};