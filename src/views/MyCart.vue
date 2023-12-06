<template>
  <!-- {{ cart }} -->
  <!-- <div>{{ }}</div> -->
  <div class="container-cart">
    <h2>Your Cart</h2>
    <div v-if="loadingCart">Loading...</div>
    <div v-else>
      <div v-for="item in cart?.resultData" :key="item.cartId">
        <!-- <div class="card"> -->
          <div class="card-body-button">
            <img :src="item.product.imageUrl" class="card-img-top" :alt="item.name" />
            <div class="card-body">
              <h3 class="card-title">{{ item.product.productName }}</h3>
              <h4>{{ item.product.productDescription }}</h4>
              <p>{{ item.product.price }}</p>
              <div class="quantity-container">Qty:   <button class="quantity-btn" @click="decrease">-</button>
            <input class="quantity-input" type="text" v-model="quantity" id="quantity" readonly>
            <button class="quantity-btn" @click="increase">+</button>
          </div>
            </div>
            <div class="merchant_details">
              <h2>Merchant Details:</h2>
              <h3> {{ item.merchant.merchantName }}</h3>
              <h4>{{ item.merchant.sellingCount }} products sold</h4>
              <h4>{{ item.merchant.merchantEmail }}</h4>
            </div>
             <button  @click="deleteCartItem()" class="remove-btn">Remove</button>
          </div>
          <hr>
        <!-- </div> -->
 
 
      </div>
    </div>
    <div class="button">
    <button @click="placeOrder()" class="order-btn" v-if="cart && cart.resultData.length > 0">
      Place Order
    </button>
    <button @click.stop="deleteCart" class="deleteButton" v-if="cart && cart.resultData.length > 0 ">Delete</button>
    </div>
  </div>
</template>
 
<script>
import { computed, } from 'vue';
import useCartStore from '../stores/OrderAndCartStore.js';
import { ref } from 'vue';
export default {
  setup() {
    // const cartItems = ref([])
    const cartStore = useCartStore();
    // const loadingCart = ref(true)
    cartStore.FETCH_CART(sessionStorage.getItem("userEmail"));
 
    const cart = computed(() => {
      return cartStore.cart;
    })
//     const cart = ref({
//    "errorCode":null,
//    "resultData":[
//       {
//          "cartId":"piyush@gmail.com",
//          "product":{
//             "productId":"d49baa36-05be-4d39-a55e-857eec3444f7",
//             "productName":"IPhone",
//             "productDescription":"A smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
//             "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
//             "imageUrl":"https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png",
//             "productCategoryId":"{\"_id\": \"a2fcd286-0116-463a-a24e-3b52964740f4\", \"productCategoryName\": \"Phone\", \"_class\": \"com.example.product_service.entity.ProductCategory\"}",
//             "price":20000,
//             "count":10
//          },
//          "merchant":{
//             "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
//             "merchantName":"Tau Kumar",
//             "sellingCount":0,
//             "merchantEmail":"tau@gmail.com"
//          },
//          "userId":"dsadc"
//       },
//       {
//          "cartId":"piyush@gmail.com",
//          "product":{
//             "productId":"da1ca059-8a8d-49b0-8db6-f9c1513ca55b",
//             "productName":"Samsung",
//             "productDescription":"A smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
//             "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
//             "imageUrl":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA4kC19i4C9ZwXVvStpy4UQMHiE4VyVCjmNm7JBDOdCYFvereNU9wZWkS2Z2PAQ6Dpr2RK0QzgnLtAbIQWKIgjl9BHXVqKoA",
//             "productCategoryId":"{\"_id\": \"a2fcd286-0116-463a-a24e-3b52964740f4\", \"productCategoryName\": \"Phone\", \"_class\": \"com.example.product_service.entity.ProductCategory\"}",
//             "price":30000,
//             "count":10
//          },
//          "merchant":{
//             "merchantId":"0ac22398-1a72-4c19-8417-c1622c5fd78d",
//             "merchantName":"Tau Kumar",
//             "sellingCount":0,
//             "merchantEmail":"tau@gmail.com"
//          },
//          "userId":"dsadc"
//       }
//    ],
//    "errorDesc":null,
//    "result":true
// })
    const loadingCart = computed(() => {
      return cartStore.loadingCart;
    })
    const deleteCart = ()=>{
      try{
        cartStore.DELETE_CART(sessionStorage.getItem("userEmail"));
        alert("cart deleted")
        window.location.reload();
      }catch(e){
        alert(e)
      }
      

    }
    const deleteCartItem = ()=>{
      try {
        // cartStore.DELETE_CARTITEM(sessionStorage.getItem("userEmail"),cartItemId);
        // console.log("The cart item has been deleted")
      } catch (error) {
        console.log(error)
      }
      
    }
    const addToCart = (product) => {
 
      console.log(product)
      // cartItems.value.push(product);
    };
 
    const removeFromCart = (product) => {
      console.log(product)
 
    };
    const placeOrder =()=> {
      try{
      const itemList = [];
      cart.value.resultData.forEach((item) => {
        
          // You can access each item in the resultData here
          itemList.push({
            productId:item.product.productId,
            merchantId:item.merchant.merchantId
          })
    
          // Add more properties as needed
        });
        console.log(itemList)

      cartStore.PLACE_ORDER(itemList)
      alert("the order has been placed")
      window.location.reload();
      // cartStore.cart.value = null
      
     
      }catch(e){
        alert(e)
      }
    };
    const calculateTotal = () => {
      let total = 0;
      // for (let i = 0; i < cartItems.value.length; i++) {
      //   total += parseFloat(cartItems.value[i].price.replace('Rs', ''));
      // }
      return total.toFixed();
    };
 
    const buyNow = () => {
      // Buying cart items
      console.log('Buy Now clicked!');
    };
 
    const addProductsToCart = () => {
      // Simulating adding products to cart
      const productsToAdd = [
        {
          id: 1,
          name: 'Product 1',
          price: 'Rs 1000',
          image: 'https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_1280.png',
          merchant_name: 'Flipkart',
          merchant_id: '1234',
          merchant_location: 'Bangalore'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 'Rs 1000',
          image: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png',
          merchant_name: 'Flipkart',
          merchant_id: '1234',
          merchant_location: 'Bangalore'
        },
 
      ];
 
      productsToAdd.forEach((product) => {
        addToCart(product);
      });
    };
    const quantity = ref( 1 );
    const increase = () => {
    if (quantity.value < 50){
      quantity.value += 1;
    }
  };
  const decrease = () => {
    if (quantity.value > 1) {
      quantity.value -= 1;
    }
  }
 
    addProductsToCart();
 
    return {
      calculateTotal,
      buyNow,
      removeFromCart,
      loadingCart,
      placeOrder,
      deleteCart,
      // cartItems,
      cart,
      deleteCartItem,
      quantity,
      increase,
      decrease
    };
  },
};
</script>
<style scoped>
.container-cart {
  margin: 20px;
}
 
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  flex-direction: row;
}
 
.card-img-top {
  width: 250px;
  height: 250px;
  object-fit: cover;
  /* Ensure the image covers the entire container */
  border-radius: 5px;
}
 
.card-body-button {
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* flex: 0; */
}
 
.deleteButton{
  margin:20px;
}
.card-body {
   /* flex:1; */
   display: flex;
   flex-direction: column;
   /* margin: 5%; */
  padding: 20px;
  justify-content: space-evenly;
  
 
}
 
.card-title {
  font-size: 1.2em;
  margin-bottom: 5px;
  padding-right: 20%;
  /* margin: 2%; */
  /* float: left; */
  /* display: flex;
  flex-direction: column; */
  /* overflow-y: auto; */
}
 
.card-text {
  font-size: 1em;
  /* float: left; */
}
 
.merchant-details {
  flex: 1;
  margin-left: 20px;
}
 
.remove-btn {
  padding: 10px;
  background-color: #ff5555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height:30px;
  margin-top:8%;
}
 
.remove-btn:hover {
  background-color: #cc0000;
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #100f0f;
  color: #232222;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height:30px;
  
 
}
 
@media only screen and (max-width: 568px) {
  .card-body-button {
    flex-direction: column;
    align-items: center;
  }
 
  .merchant-details {
    margin-left: 0;
    margin-top: 10px;
  }
 
  .remove-btn {
    margin-top: 10px;
  }
 
  .order-btn {
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    justify-content: center;
    
  }
 
  .order-btn:hover {
    background-color: #45a049;
  }
}
.quantity-container {
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 20px; 
}
 
.quantity-btn {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}
 
.quantity-btn:hover {
  background-color: #555;
}
 
.quantity-input {
  width: 50px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 5px;
  text-align: center;
  margin: 0 5px;
}
</style>