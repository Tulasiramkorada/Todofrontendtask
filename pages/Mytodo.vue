<template>
  <div>
    <html>
      <body>
        <div class="container">
          <div class="header">
            <span class="signup">MyTodos</span>
          </div>
          <div style="overflow-x: auto">
            <table>
              <tr v-for="(todo, i) in $store.state.MyTodos" :key="i">
                <th>{{ todo.id }}</th>
                <th>{{ todo.description }}</th>
                <th><button @click="deleteTodo(todo.id)">Delete</button></th>
                <th>
                  <button>
                    <nuxt-link :to="{ name: 'Update', params: { id: todo.id } }"
                      >Update</nuxt-link
                    >
                  </button>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      description: "",
    };
  },
  async mouted() {
    await this.$store.dispatch("getMyTodos");
  },
  methods: {
    async addTodo() {
      await this.$store.dispatch("addTodo", this.description);
      await this.$store.dispatch("getMyTodos");
    },
    async deleteTodo(id) {
      await this.$store.dispatch("deleteTodo", id);
      await this.$store.dispatch("getMyTodos");
    },
    async updateTodo(id) {
      await this.$store.dispatch("updateTodo", id);
      await this.$store.dispatch("getMyTodos");
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>