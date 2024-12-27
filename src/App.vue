<template>
  <div id="app">
    <header>
      <div>
        <p>Кинотеатр</p>
      </div>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 Кинотеатр</p>
    </footer>
  </div>
</template>

<style>
header {
  background-color: #333;
  padding: 1em;
  color: white;
  display: flex;
  justify-content: space-between;
}
header p {
  margin: 0%;
  font-size: 30px;
}
nav{
  display: flex;
  align-items: center;
}
nav a {
  margin: 0 1em;
  color: white;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}
nav a:hover {
  color: rgb(167, 165, 165);
  transform: scale(1.05);
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
}
body {
  margin: 0;
}
</style>
