<template>
  <div class="home-container">
    <MovieSlider />
    <h2 class="title">Фильмы в прокате</h2>
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: { MovieSlider, MovieCard },
  data() {
    return {
      movies: [
        { id: 1, title: 'Остров проклятых', poster: '/public/Остров.jpeg' },
        { id: 2, title: 'Престиж', poster: '/public/prestige.jpeg' },
        { id: 3, title: 'Зеленая книга', poster: '/public/green-book.jpeg' },
        { id: 4, title: 'В Погоне за счастьем', poster: '/public/will.webp' },
        { id: 5, title: 'Гладиатор', poster: '/public/gladiator.jpg' },
        { id: 6, title: 'Темный Рыцарь', poster: '/public/BatMan2008.jpg' },
        { id: 7, title: '1+1', poster: '/public/1+1.jpg' },
        { id: 8, title: 'Интерстеллар', poster: '/public/interstellar.jpg' },
        { id: 9, title: 'Форест Гамп', poster: '/public/gamp.webp' },
        { id: 10, title: 'Зеленая Миля', poster: '/public/green-mile.webp' },
      ],
    };
  },
};
</script>

<style>
.home-container {
  padding: 2rem;
  background-color: #f0f0f0;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.movie-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.movie-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
  margin-top: 1rem;
}
</style>
