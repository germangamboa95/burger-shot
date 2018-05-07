<template>
  <div class="burgers">
      <form>
          <h2>Add New Burger</h2>
          <label for="burger">Burger Name:</label>
          <br>
          <input v-model="burgerToBeAdded" name="burger_name" type="text">
          <br>
          <button v-on:click="addBurger">Add Burger</button>
      </form>
    <h2>Current Menu:</h2>
    <ul id="list">
        <li v-for="item in items">
            {{item}}
        </li>

    </ul>
  </div>
</template>

<script>
import burgersService from '@/services/burgersService.js';

export default {
  name: "burgers",
  data() {
      return {
          items: [],
          burgerToBeAdded: ""
      }
  },
  mounted() {
      this.getItems();
  }, 
  methods: {
      async getItems() {
          const res = await burgersService.fetchBurgers();
          this.items  = res.data; 

      },
      async addBurger(event) {
          event.preventDefault();
          await burgersService.addBurger(this.burgerToBeAdded);



      }
  }
}
</script>
