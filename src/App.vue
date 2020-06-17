<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="mynavbar">
        <router-link class="navbar-brand" to="/main"><img src="./google.png" width="40" height="35" id ="myimg" alt=""></router-link> 
        <button class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navBarNavM"
        ><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navBarNavM">   
          <div class="navbar-nav">

            <router-link class="nav-item nav-link" to="/main">Главная</router-link>

            <router-link class="nav-item nav-link" to="/employees">Сотрудники</router-link>

            <router-link class="nav-item nav-link" to="/contacts">Контакты</router-link>

          </div>
        </div>
    </nav>
    <div class="container">
          <router-view></router-view>     
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
