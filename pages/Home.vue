<template>
  <div>
    <html>
      <head>
        <title>signUp</title>
        <!-- <link rel="stylesheet" type="text/css" href="signUp.css" /> -->
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="signup"><a href="Login">Login</a></span>
            <span class="signup"><a href="Regestration">Register</a></span>
            <!-- <h2><a href="Login">Login</a></h2> -->
          </div>
          <!-- <div class="par">
            <p class="first">welcome to my website</p>
            <p class="second">this regestration form made by me</p>
            <p class="third">if u want any designs please contact me :)</p>
          </div> -->

          <form>
            <h1>Homeeee</h1>
            <h1>This is my Task</h1>
            <!-- <input type="text" class="text" placeholder=" Name" /> -->
            <!-- <input type="text" class="text" placeholder=" UserName" />
            <input type="password" class="text" placeholder="PassWord" /> -->
            <!-- <input type="mobile" class="tel" placeholder="Mobile" /> -->
            <!-- <button>Login</button> -->
          </form>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
export default {};
</script>

<style>
.h1 {
  color: green;
  font-family: "Courier New", Courier, monospace;
}
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