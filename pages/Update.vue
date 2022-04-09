<template>
  <div class="container">
    <div class="header">
      <span class="signup">Update Todo</span>
      <!-- <h2><a href="Login">Login</a></h2> -->
    </div>
    <!-- <div class="par">
            <p class="first">welcome to my website</p>
            <p class="second">this regestration form made by me</p>
            <p class="third">if u want any designs please contact me :)</p>
          </div> -->
    <form @submit.prevent="updateTodo">
      <!-- <input type="text" class="text" placeholder=" Name" /> -->
      <h2>{{this.$route.params.id,}}</h2>
      <input
        type="text"
        v-model="description"
        id="user_id"
        class="text"
        placeholder="UpdateTodo"
      />

      <!-- <input type="mobile" class="tel" placeholder="Mobile" /> -->
      <button>Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      id: "",
    };
  },
  methods: {
    async updateTodo() {
      await this.$store.dispatch("updateTodo", {
        description: this.description,
        id: this.$route.params.id,
      });
      await this.$store.dispatch("getMyTodos");
      this.$router.push("/Mytodo");
    },
  },
};
</script>

<style>
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