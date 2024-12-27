<template>
  <div class="purchase-page">
    <h1>Форма оплаты</h1>
    <form @submit.prevent="submitPayment">
      <div>
        <label for="cardNumber">Номер карты:</label>
        <input type="text" id="cardNumber" v-model="cardNumber" required />
      </div>
      <div>
        <label for="cardName">Имя на карте:</label>
        <input type="text" id="cardName" v-model="cardName" required />
      </div>
      <div>
        <label for="expiry">Срок действия:</label>
        <input type="text" id="expiry" v-model="expiry" placeholder="MM/YY" required />
      </div>
      <div>
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" required />
      </div>
      <button type="submit">Оплатить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
    };
  },
  methods: {
    submitPayment() {
      alert('Билет куплен!');
      this.resetForm();
    },
    resetForm() {
      this.cardNumber = '';
      this.cardName = '';
      this.expiry = '';
      this.cvv = '';
    },
  },
};
</script>

<style>
.purchase-page {
  padding: 2em;
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 70px;
}

form div {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}


</style>
