<template>
    <div>
      <nav>
        <div class="left-section">
          <img src="https://www.pngitem.com/pimgs/m/650-6503651_navbar-logo-hd-png-download.png" alt="Logo" class="logo" />
        </div>
  
        <div class="center-section">
          <input v-model="searchQuery" @input="onSearch" type="text" placeholder="Search products..." class="search-bar" />
        </div>
  
        <!-- <div class="right-section">

         <router-link to="/myorder"> <button class="button">My Orders</button></router-link>
         <router-link to="/mycart"> <button class="button">My Cart</button></router-link>
          <button class="button" @click="logout">Logout</button>
        </div> -->
      </nav>
  
      <div class="rows">
        <div class="body-container">
            <div class="component" v-for="(component, componentIndex) in products" :key="componentIndex" :style="{ backgroundColor: component.color }">
              <div class="specification-row" style="height: 60%;">
                <img :src="component.imageURL" alt="Component Image" class="component-image" />
              </div>
              <div class="specification-row" style="height: 20%; display: flex;">
                <div class="col" style="width: 100%;">
                  <p>{{ component.productName }}</p>
                </div>
                <div class="col" style="width: 100%;">
                  <p>{{ component.price + "/-"}}</p>
                </div>
              </div>
              <div class="specification-row" style="height: 20%;">
                <p>{{ "Rating : " + component.merchantRating }}</p>
              </div>
              <div class="selected" style="width: 100%;">
                <p><button>Buy Now</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import useRootStore  from '../stores/VueStore.js';
  import debounce from 'lodash.debounce'
  
  export default {
    setup() {
      const searchQuery = ref('');
      const rootStore = useRootStore();
      onMounted(() => {
        rootStore.FETCH_PRODUCTS()
      })
      const products = computed(() => {
        console.log(JSON.stringify(rootStore.products), ' sdnk')
        return rootStore.products;
      });

      const onSearch = debounce(() => {
        rootStore.FETCH_PRODUCTS(searchQuery.value)
      }, 1000)
  
      const logout = () => {
        console.log('Logout clicked');
      };
  
      return {
        searchQuery,
        logout,
        products,
        onSearch
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  nav {
    background-color: #35424a;
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 97%;
    top: 0;
    height: 10%;
  }
  
  .left-section {
    height: max-content;
    width: max-content;
    padding: 0% 5% 0% 5%;
  }
  
  .logo {
    max-height: 40px;
  }
  
  .center-section {
    flex-grow: 1;
    text-align: center;
  }
  
  .search-bar {
    width: 40%;
    height: 25%;
    padding: 8px;
    font-size: 16px;
    border-radius: 20px;
  }
  
  .right-section {
    display: flex;
  }
  
  .button {
    margin-left: 10px;
    padding: 8px 15px;
    background-color: #f39c12;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: fit-content;
  }
  
  .button:hover {
    background-color: #e67e22;
  }
  
  .body-container {
    margin-top: 80px;
    padding: 20px;
  }
  
  .row {
    /* display: flex;
    justify-content: space-between; */
    margin-bottom: 20px;
    height: 400px;
  }
  
  .component {
    /* height: 125%; */ /* Consider using a fixed height or percentage that makes sense */
    width: 32%;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    color: #a19d9d;
    margin-right: 10px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(105, 212, 56, 0.1);
    display: inline-block;
    transition: box-shadow 0.3s ease;
    border-color: #35424a;
  }
  
  .component:hover {
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.2);
  }
  
  .component-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  
  .specification-row {
    display: flex;
    flex-direction: column;
  }
  
  .col {
    color: #fff;
    text-align: center;
    padding: 8px;
  }
  
  .col:first-child {
    background-color: #6d6a69;
  }
  
  .col:last-child {
    background-color: #464544;
  }
  </style>
  