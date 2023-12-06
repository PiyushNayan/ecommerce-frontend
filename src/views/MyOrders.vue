

 <template>
  <div class="container">
    <h2>Your Orders</h2>
    <div v-if="orders?.length === 0">
      <p>You have no orders.</p>
    </div>
    <div v-else>
    
          <!-- <p>Order-id:{{ order.orderId }}</p> -->
          <div class="cart-order-items">
            <div v-for="order in orders?.resultData" :key="order.orderId" class="loop">
              <hr>
              <p>OrderId: {{ order.orderId }}</p>
 
              <!-- <div class="card">
               <div class="card-body">
               <p>Order-id:{{ order.orderId }}</p>
                <div class="cart-order-items"></div>
               -->
               <div class="card-body">
              <div v-for="orderItem in order.orderItemResponseDtos" :key="orderItem.orderItemId" class="order-item">
                <div class="cart-order">
                <!-- <p>Order-id:{{ orderItem.orderId}}</p> -->
                <div class="card">
                 <img :src = orderItem.product.imageUrl class="orderImage">
                  <h3>{{ orderItem.product.productName }}</h3>
                  <p> {{ orderItem.product.productDescription }}</p>
                  <p> Price: Rs{{ orderItem.product.price }}</p>
                  <h4>Seller Name:{{ orderItem.merchant.merchantName }}</h4>
              
                
                </div>
               
                <!-- <div v-for="orderItemProduct in orderItem.orderItemResponseDtos" :key="orderItemProduct.orderItemId" class="order-item">
                  <img :src="orderItemProduct.product.imageUrl" :alt="orderItem.itemName" class="order-item-img">
                  <h3>{{ orderItemProduct.product.productName }}</h3>
                  <p> {{ orderItemProduct.product.productDescription }}</p>
                  <p> Price: Rs{{ orderItemProduct.product.price }}</p>
                  <h4>Seller Name:{{ orderItemProduct.merchant.merchantName }}</h4>
                 
                  
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>
 
 
<script>
import { computed } from 'vue';
import useOrderStore from '../stores/OrderAndCartStore.js';
export default {
  setup() {
    const orderStore = useOrderStore();
    orderStore.FETCH_ORDERS(sessionStorage.getItem("userEmail"));

    const orders = computed(() => {
      console.log("here", orderStore.orders)
      return orderStore.orders;
    })
    // const orders = ref(
    //   [
    //     {
    //       resultData: [
    //         {
    //           orderId: "da73eb02-4658-447d-82ca-55a40c48c70c",
    //           userId: "stsfrgring",
    //           cartId: "piyush@gmail.com",
    //           orderItemResponseDtos:
    //             [
    //               {
    //                 orderItemId: "4eab68a5-7dde-411d-b61e-c351d1d715bb",
    //                 product: {
    //                   productId: "35aacc87-88c1-4577-67c1-c495239c9051",
    //                   productName: "Iphone 12",
    //                   productDescription: "This is a good phone",
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   imageUrl: "https://www.pngmart.com/files/4/Phone-Case-Transparent-PNG.png",
    //                   productCategoryId: "{\"_Id\":\"Zebb6633-675c-4aa6-be74-676842af3f7b\", \"productCategoryName\": \"phone\", \"_class\":\"com.example.product_service.entity.ProductCategory\"}",
    //                   price: 10,
    //                   count: 1
    //                 },
    //                 merchant: {
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   merchantName: "Tau Kumar",
    //                   sellingCount: 0,
    //                   merchantEmail: "tau@gmail.com"

    //                 },

    //               }]
    //         },
    //         {
    //           orderId: "da73eb02-4658-447d-82ca-55a40c48c7022",
    //           userId: "stsfrgring",
    //           cartId: "piyush@gmail.com",
    //           orderItemResponseDtos:
    //             [
    //               {
    //                 orderItemId: "4eab68a5-7dde-411d-b61e-c351d1d715bb",
    //                 product: {
    //                   productId: "35aacc87-88c1-4577-67c1-c495239c9051",
    //                   productName: "Iphone 13 New",
    //                   productDescription: "This is a bad phone",
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   imageUrl: "hhttps://www.pngmart.com/files/4/Phone-Case-Transparent-PNG.png ",
    //                   productCategoryId: "{\"_Id\":\"Zebb6633-675c-4aa6-be74-676842af3f7b\", \"productCategoryName\": \"phone\", \"_class\":\"com.example.product_service.entity.ProductCategory\"}",
    //                   price: 10,
    //                   count: 1
    //                 },
    //                 merchant: {
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   merchantName: "Tau Kumar",
    //                   sellingCount: 0,
    //                   merchantEmail: "tau@gmail.com"

    //                 }
    //               },
    //               {
    //                 orderItemId: "4eab68a5-7dde-411d-b61e-c351d1d715b2222",
    //                 product: {
    //                   productId: "35aacc87-88c1-4577-67c1-c495239c9051",
    //                   productName: "New Order",
    //                   productDescription: "This is a good phone",
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   imageUrl: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww ",
    //                   productCategoryId: "{\"_Id\":\"Zebb6633-675c-4aa6-be74-676842af3f7b\", \"productCategoryName\": \"phone\", \"_class\":\"com.example.product_service.entity.ProductCategory\"}",
    //                   price: 10,
    //                   count: 1
    //                 },
    //                 merchant: {
    //                   merchantId: "Bac22398-1a72-4c19-8417-c1622c5fd78d",
    //                   merchantName: "Tau Kumar",
    //                   sellingCount: 0,
    //                   merchantEmail: "tau@gmail.com"

    //                 }
    //               }]
    //         }
    //       ]




    //     }])

    // ordersToAdd.forEach((order) => {
    //   orders.value.push(order);
    // });


    // addOrders();

    return {
      orders,
    };
  },
};
</script>
 
<style>
 
@media (max-width: 768px) {
 
  .order-item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  
  }
}
 
@media (max-width: 576px) {
 
  .container {
    width: 93%;
    padding: 10px;
  
  }
.cart-order-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
 
 
}
.orderImage{
  width:30%;
  height:20%;
}
 
.card-body{
  display: flex;
  flex-direction: row;
  
  
 
}
.container {
  border-radius: 5px;
  padding: 20px;
  width: 93%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
}
 
.cart-order-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  
}
 
 
.order-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 20px;
  /* border: 2px solid cadetblue; */
  height: 200px;
  width: 200px;
  /* border-radius: 8px; */
  /* border-right: 1px solid black; */
}
.loop{
  overflow: auto;
}
.card{
  overflow-x: auto;
}
</style>
 
