<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <div class="contact-info">
      <p><strong>Адрес:</strong> ул. Хан Шатыр</p>
      <p><strong>Телефон:</strong> +7 (775) 538-80-61</p>
    </div>
    <div class="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2664245361902!2d71.4010023679085!3d51.13232484875865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458684cc000001%3A0x525eacc8c2f9eed9!2zQ2hhcGxpbiBDaW5lbWEsINC60LjQvdC-0YLQtdCw0YLRgA!5e0!3m2!1sru!2skz!4v1735276625302!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
