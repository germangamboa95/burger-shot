<template>
  <div class="burgers container">
      <div class="row">
            <form class="col s12">
                <h3>Add New Burger</h3>
                <div class="input-field">
                    <i class="material-icons prefix">mode_edit</i>
                     <input v-model="burgerToBeAdded" name="burger_name" type="text">
                </div>
                <button v-on:click="addBurger" class="btn waves-effect waves-light">
                    Add It!
                    <i class="material-icons right">send</i>
                </button>
            </form>
      </div>
    <h3>Current Menu:</h3>
    <div class="row">

        <div class="wrapper  col s12 m12 l6">
            <ul id="list-one" class="collection with-header">
                <li class="collection-header"><h5>Uneaten burgers</h5></li>
    
                <li v-for="item in itemsAvail" class="collection-item">
                    <p class="individual" v-bind:data="item.id">{{item.burger_name}}</p>
                    <button v-on:click="eatIt(item.id)" class="btn waves-effect waves-light">Eat It!</button>
                </li>
        
            </ul>
        </div>

        <div class="wrapper col s12 m12 l6">
            <ul id="list-two" class="collection with-header">
                <li class="collection-header"><h5>Eaten burgers</h5></li>
                <li v-for="item in itemsEaten" class="collection-item"> 
                    <p class="individual" v-bind:data="item.id">{{item.burger_name}}</p>

                </li>
        
             
            </ul>
        </div>

    </div>
  </div>
</template>

<script>
import burgersService from "@/services/burgersService.js";


export default {
  name: "burgers",
  data() {
    return {
      itemsAvail: [],
      itemsEaten: [],
      burgerToBeAdded: "",
      burgerAdded: false
    };
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
};
</script>

<style scoped>
.burgers {
    height: 100vh;
}
li {
  list-style-type: none;
  display: inline-block;
  width: 100%;
  padding: 0;

}
ul{
    margin: 0;
    padding: 0;
    opacity: .9;
    border: none;
}
.individual {
  float: left;
}
.collection-item button {
  float: right;
  margin-top: 2.5%;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
