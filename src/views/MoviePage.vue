<template>
  <div class="movie-page">
    <h1>{{ movie.title }}</h1>
    <img :src="movie.img" alt="Movie Poster" />
    <p><strong>Жанр:</strong> {{ movie.genre }}</p>
    <p><strong>Продолжительность:</strong> {{ movie.duration }} мин</p>
    <p><strong>Рейтинг:</strong> {{ movie.rating }}</p>
    <p><strong>Описание:</strong> {{ movie.description }}</p>

    <div class="trailer">
      <h2>Трейлер:</h2>
      <iframe
        v-if="movie.trailer"
        :src="movie.trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p v-else>Трейлер отсутствует.</p>
    </div>

    <button @click="buyTicket">Купить билет</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        img: "",
        title: "",
        genre: "",
        duration: "",
        rating: "",
        description: "",
        trailer: "",
      },
    };
  },
  created() {
    const movieId = this.$route.params.id;

    const movieData = {
      1: {
        img: "/public/Остров.jpeg",
        title: "Остров проклятых",
        genre: "Триллер, Драма",
        duration: 138,
        rating: "8.1/10",
        description: "Детектив расследует исчезновение пациента в психиатрической больнице на острове.",
        trailer: "https://www.youtube.com/embed/_l7R9Rz5URw",
      },
      2: {
        img: "/public/prestige.jpeg",
        title: "Престиж",
        genre: "Триллер, Драма, Мистика",
        duration: 130,
        rating: "8.5/10",
        description: "Два фокусника соревнуются, чтобы создать самый невероятный фокус.",
        trailer: "https://www.youtube.com/embed/0B6O17m9sWE",
      },
      3: {
        img: "/public/green-book.jpg",
        title: "Зеленая книга",
        genre: "Драма, Комедия, Биография",
        duration: 130,
        rating: "8.2/10",
        description: "История о путешествии черного пианиста и его водителя по югу США в 1960-х годах.",
        trailer: "https://www.youtube.com/embed/e6b9urtUJt0",
      },
      4: {
        img: "/public/will.webp",
        title: "В погоне за счастьем",
        genre: "Драма",
        duration: 117,
        rating: "8.3/10",
        description: "Крис Гарднер изо всех сил старается обеспечить счастливую жизнь своему сыну.",
        trailer: "https://www.youtube.com/embed/Q-W2L9nyJTY",
      },
      5: {
        img: "/public/gladiator.jpg",
        title: "Гладиатор",
        genre: "Боевик/Приключения",
        duration: 155,
        rating: "8.6/10",
        description: "Максимус пытается отомстить за смерть своей семьи и восстановить справедливость.",
        trailer: "https://www.youtube.com/embed/F2Dr7Qb2Zf8",
      },
      6: {
        img: "/public/BatMan2008.jpg",
        title: "Темный рыцарь 2008г",
        genre: "Боевик/Криминал",
        duration: 152,
        rating: "8.5/10",
        description: "Бэтмен борется с Джокером, который сеет хаос в Готэме.",
        trailer: "https://www.youtube.com/embed/HF1_epZNoCg",
      },
      7: {
        img: "/public/1+1.jpg",
        title: "1+1",
        genre: "Комедия/Драма",
        duration: 112,
        rating: "8.8/10",
        description: "Филипп нанимает в помощники Дрисса, который меняет его жизнь.",
        trailer: "https://www.youtube.com/embed/tTwFeGArcrs",
      },
      8: {
        img: "/public/interstellar.jpg",
        title: "Интерстеллар",
        genre: "Научная фантастика/Приключения",
        duration: 169,
        rating: "8.6/10",
        description: "Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.",
        trailer: "https://www.youtube.com/embed/qcPfI0y7wRU",
      },
      9: {
        img: "/public/gamp.webp",
        title: "Форрест Гамп (1994)",
        genre: "драма, комедия, мелодрама, история, военный",
        duration: 144,
        rating: "8.9/10",
        description: "Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни.",
        trailer: "https://www.youtube.com/embed/otmeAaifX04",
      },
      10: {
        img: "/public/green-mile.webp",
        title: "Зеленая миля (1999)",
        genre: "драма",
        duration: 189,
        rating: "9.1/10",
        description: "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        trailer: "https://www.youtube.com/embed/otmeAaifX04",
      },
    };

    if (movieData[movieId]) {
      this.movie = movieData[movieId];
    }
  },
  methods: {
    buyTicket() {
      this.$router.push("/purchase");
    },
  },
};
</script>

<style>
.movie-page {
  padding: 2em;
}

img {
  max-width: 220px;
  max-height: 220px;
  border-radius: 10px;
}

button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #444;
}

.trailer {
  margin-top: 2em;
}

.trailer iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
  border-radius: 10px;
}
</style>
