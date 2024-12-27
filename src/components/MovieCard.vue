<template>
  <div class="movie-card">
    <img :src="movie.poster" :alt="movie.title" />
    <h3>{{ movie.title }}</h3>
    <button @click="viewDetails">Подробнее</button>
    <button @click="buyTicket">Купить билет</button>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
    viewDetails() {
      // Переход на страницу фильма по его ID
      this.$router.push(`/movie/${this.movie.id}`);
    },
    buyTicket() {
      alert('Билет куплен!');
    },
  },
};
</script>

<style>
.movie-card {
  border: 1px solid #ddd;
  padding: 1em;
  margin: 1em;
  text-align: center;
}

button {
  background-color: black;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 15px;
  margin-bottom: 2px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #444;
  transform: scale(1.05);
}

button:active {
  transform: scale(1);
}
</style>
