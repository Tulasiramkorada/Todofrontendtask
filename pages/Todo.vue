<template>
  <div>
    <html>
      <body>
        <div class="container">
          <div class="header">
            <span class="signup">Todo</span>
          </div>

          <form @submit.prevent="addTodo">
            <input
              type="text"
              v-model="description"
              id="description"
              class="text"
              placeholder="Add Your Todo"
            />
            <button>Add Todo</button>
          </form>
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
  // created() {
  //   this.getMyTodos();
  // },
  methods: {
    async getMyTodos() {
      await this.$store.dispatch("getMyTodos");
    },
    async addTodo() {
      await this.$store.dispatch("addTodo", this.description);
      await this.$store.dispatch("getMyTodos");
      this.$router.push("/Mytodo");
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
.container {
  width: 450px;
  height: 630px;
  background-color: #222;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 30px 60px -5px #000;
}
.header {
  margin: 20px;
}
form {
  margin-top: 50px;
}
.signup {
  font-size: 34px;
  font-weight: lighter;
  color: #52c4d8;
  font-style: inherit;
  font-family: "Open Sans Condensed", sans-serif;
}
.comp {
  font-size: 91px;
  font-weight: bold;
  color: gold;
  letter-spacing: -4px;
  font-family: "Montserrat", sans-serif;
}
.par {
  margin: auto;
  font-size: 16px;
}
.first {
  margin-left: 100px;
}
.second {
  margin-left: 70px;
}
.third {
  margin-left: 50px;
}
p {
  color: #3b6661;
}
input {
  display: block;
  margin: auto;
  width: 350px;
  padding-top: 20px;
  margin-top: 20px;
  background: none;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid #3b6661;
  color: #3b6661;
}
::-webkit-input-placeholder {
  color: #3b6661;
  font-size: 16px;
}
input:focus {
  outline: none;
}
.last {
  margin-bottom: 35px;
}
button {
  padding: 10px 40px;
  margin-top: 10px;
  font-size: 22px;
  margin-left: 250px;
  background-color: #1161ed;
  border: none;
  border-radius: 8px;
}
button:hover {
  cursor: pointer;
}
</style>