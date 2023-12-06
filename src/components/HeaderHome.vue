
<template>
  <!-- {{ user }} -->
    <div class="site-name">
      <router-link to="/">
        <img src="https://cdn.dribbble.com/users/559871/screenshots/4751426/media/a718d259d901389d0072523655d96624.jpg?resize=800x600&vertical=center" class="headImg">
       
      </router-link>
      <h2>BAZAARBLEND</h2>
      
      <div class="search">
      <router-link to="/searchFunc">
       <input type="text" class="search-input" placeholder="Search..." @keyup.enter="handleSearch">
      <button class="search-button" @click="handleSearch">&#128269;</button>
      </router-link>
     
      </div>
      
      <nav class="nav-links">
      <router-link to="/myorder" class="order-cart1"><img src="https://cdn-icons-png.flaticon.com/128/9422/9422789.png"></router-link>
      <router-link to="/mycart" class="order-cart2"> <img src="https://cdn-icons-png.flaticon.com/128/1040/1040254.png"></router-link>
      <router-link to="/about" class="order-cart2"> About</router-link>
      <router-link to="/offers" class="order-cart2"> Offers</router-link>
      <div class="dropdown">
      <button class="dropbtn">Category</button>
      <div class="dropdown-content">
        <div v-for="category in categories" :key="category.id" class="category_details">
          <img :src="category.category_img" class="category-img" />
          <p>{{ category.category_name }}</p>
        </div>
      </div>
    </div>
 
      
 
    </nav>
    
      <router-link to = "/login"  class="login-button">
        <!-- {{ authStatus }} -->
        <button  @click="authChange">{{  authStatus?"LOGOUT":"LOGIN" }}</button>
      <!-- <button v-else @click="login">login</button> -->
      </router-link>     
    
    </div>
 
   
 
 
    
      <!-- <button v-if="isLoggedIn" @click="logout">Logout</button>
      <button v-else @click="login">login</button> -->
    
 
 
 
</template>
<script src="../components/HeaderHome.js">
 
 
</script>
 
<style scoped>
@media screen and (max-width: 768px) {
  .site-name {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
 
  .search-bar {
    margin-top: 20px;
    margin-bottom: 20px;
  }
 
  .search-input {
    width: 50%; /* Adjust width for smaller screens */
    margin-right: 0;
  }
 
  .search-button {
    margin-left: 0; /* Adjust margin for smaller screens */
  }
 
  .nav-links {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
 
  .nav-links a {
    margin: 10px 0;
  }
}
 
.category_details {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
 
.category-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}
.dropdown {
  position: relative;
  display: inline-block;
  margin-top: -10px; /* Adjust vertical alignment */
}
 
.dropbtn {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 5px 10px; /* Reduce padding */
  margin: 10% 0 0 10%;
  border-radius: 5px; /* Adjust border radius */
  cursor: pointer;
}
 
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 150px; /* Adjust width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 5px; /* Adjust border radius */
  margin-top: 5px; /* Adjust spacing */
}
 
.dropdown-content .category_details {
  display: flex;
  align-items: center;
  padding: 5px 10px; /* Reduce padding */
}
 
.dropdown-content .category-img {
  width: 20px; /* Reduce image size */
  height: 20px;
  border-radius: 50%;
  margin-right: 5px; /* Adjust spacing */
}
 
.dropdown-content p {
  margin: 0;
}
 
.dropdown:hover .dropdown-content {
  display: block;
}
 
.site-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 20px;
}
 
.headImg {
  width: 100px;
  height: auto;
}
 
.search {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
 
.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
}
 
.search-button {
  cursor: pointer;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
 
.nav-links {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
 
.order-cart1, .order-cart2 {
  margin-left: 20px;
  cursor: pointer;
}
 
.order-cart1 img, .order-cart2 img {
  width: 30px;
  height: 30px;
}
 
.login-button button {
  padding: 8px 16px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;  
}
 
.login-button button:hover {
  background-color: #555;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
 
.site-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
 
.site-name img {
  width: 70px;
  height: auto;
  transition: transform 0.3s ease;
}
 
.site-name img:hover {
  transform: scale(1.1);
}
 
.search-bar {
  display: flex;
  align-items: center;
}
 
.search-input {
  padding: 12px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  margin-right: 15px;
  width: 500px;
  transition: box-shadow 0.3s ease;
}
 
.search-input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
 
.search-button {
  padding: 12px 20px;
  border-radius: 25px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: -50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}
 
.search-button:hover {
  background-color: #555;
  transform: scale(1.05);
}
 
.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 
.nav-links a {
  text-decoration: none;
  margin-right: 15px;
  color: #333333;
}
 
.nav-links a:hover {
  color: #555;
}
 
.order-cart1 img,
.order-cart2 img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}
 
.order-cart1 img:hover,
.order-cart2 img:hover {
  transform: scale(1.1);
}
/* Rest of your existing styles for nav-links, order-cart images, and buttons */
/* Reset default margin and padding */
 
 
 
</style>