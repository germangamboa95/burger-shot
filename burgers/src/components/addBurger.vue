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
    <ul id="list-one">
        <h3>Uneaten burgers</h3>
        <li v-for="item in itemsAvail">
            <div v-bind:data="item.id">
                 {{item.burger_name}}
                 <button v-on:click="eatIt(item.id)">Eat It!</button>
            </div>
        </li>

    </ul>
       <ul id="list-two">
        <h3>Eaten burgers</h3>
        <li v-for="item in itemsEaten">
            <div>
                 {{item.burger_name}}
            </div>
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
          itemsAvail: [],
          itemsEaten: [],
          burgerToBeAdded: "", 
          burgerAdded: false
      }
  },
  mounted() {
      this.getItems();
  }, 
  watch: {
      burgerAdded: function() {
          this.getItems();
          this.burgerAdded = false; 
      }
  },
  methods: {
      async getItems() {
          const res = await burgersService.fetchBurgers();
          console.log(res);
          this.itemsAvail = res.data.filter(item => !item.devoured);
          this.itemsEaten = res.data.filter(item => item.devoured);


      },
      async addBurger(event) {
          event.preventDefault();
          await burgersService.addBurger(this.burgerToBeAdded);
          this.burgerAdded = true;
      },
      async eatIt(data) {
          await burgersService.eatBurger(data);
          this.burgerAdded = true;
      }
  }
}
</script>

<style scoped>
    li {
        list-style-type: none;
    }
    #list-one {
        float: left;
        width: 25%;
    }

    #list-two {
        float: right;
        width: 25%;
    }
</style>
