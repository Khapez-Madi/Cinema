<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <div class="contact-info">
      <p><strong>Адрес:</strong> ТЦ Хан Шатыр, Chaplin Cinema</p>
      <p><strong>Телефон:</strong> +7 (775) 538-80-61</p>
    </div>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2664245361902!2d71.4010023679085!3d51.13232484875865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458684cc000001%3A0x525eacc8c2f9eed9!2zQ2hhcGxpbiBDaW5lbWEsINC60LjQvdC-0YLQtdCw0YLRgA!5e0!3m2!1sru!2skz!4v1735276625302!5m2!1sru!2skz"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="reviews">
      <h2>Отзывы</h2>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <strong>{{ review.name }}:</strong> {{ review.comment }}
        </li>
      </ul>
      <form @submit.prevent="addReview">
        <div>
          <label for="name">Ваше имя:</label>
          <input type="text" id="name" v-model="newReview.name" required />
        </div>
        <div>
          <label for="comment">Ваш отзыв:</label>
          <textarea id="comment" v-model="newReview.comment" required></textarea>
        </div>
        <button type="submit">Оставить отзыв</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      newReview: {
        name: "",
        comment: "",
      },
    };
  },
  created() {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      this.reviews = JSON.parse(savedReviews);
    }
  },
  methods: {
    addReview() {
      if (this.newReview.name && this.newReview.comment) {
        const newReview = { ...this.newReview };
        this.reviews.push(newReview);

        localStorage.setItem("reviews", JSON.stringify(this.reviews));

        this.newReview.name = "";
        this.newReview.comment = "";
        alert("Спасибо за ваш отзыв!");
      }
    },
  },
};
</script>

<style scoped>
.contacts {
  padding: 2em;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.contact-info {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.contact-info p {
  margin: 0.5rem 0;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

iframe {
  border-radius: 10px;
}

.reviews {
  margin-top: 2rem;
  background: #fff;
  padding: 1.5em;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.reviews h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

.reviews ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.reviews li {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #f1f1f1;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form label {
  font-weight: bold;
}

form input,
form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  background-color: black;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button:hover {
  background-color: #444;
}
</style>
