<template>
  <div class="slider-container" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
    <button @click="prevSlide" class="slider-button left">⟨</button>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(movie, index) in movies" :key="movie.id" class="slide">
          <img :src="movie.poster" :alt="movie.title" />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </div>
    <button @click="nextSlide" class="slider-button right">⟩</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Остров проклятых', poster: '/public/Остров.jpeg' },
        { id: 2, title: 'Престиж', poster: '/public/prestige.jpeg' },
        { id: 3, title: 'Зеленая книга', poster: '/public/green-book.jpeg' },
        { id: 4, title: 'В погоне за счастьем', poster: '/public/will.webp' },
        { id: 5, title: 'Гладиатор', poster: '/public/gladiator.jpg' },
        { id: 6, title: 'Темный рыцарь 2008г', poster: '/public/BatMan2008.jpg' },
        { id: 7, title: '1+1', poster: '/public/1+1.jpg' },
      ],
      currentSlide: 0,
      autoScrollInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.movies.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.movies.length) % this.movies.length;
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.nextSlide, 1000);
    },
    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
      }
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
};
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 1rem 0;
  border-radius: 10px;
  overflow: hidden;
}

.slider {
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex-shrink: 0;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2em;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.slider-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>
