import { ref, computed,reactive } from "vue";
import Mycart from '../views/MyCart.vue'
import useProductStore from "@/stores/ProductStore";
import useCartStore from "@/stores/OrderAndCartStore";
export default {
  components: {
    Mycart
  },

  setup() {

    const productStore = useProductStore();
    const cartStore = useCartStore();
    const quantity = ref( 1 );
    const currentProduct = computed(()=>productStore.currentProduct)
    // productStore.FETCH_PRODUCT_BY_ID();
    // const currentProduct = computed(() => {
    //   console.log("received", productStore.currentProduct.value)
    //   return productStore.currentProduct
    // })


    const merchants = ref([
      {
        name: 'karan',
        id: 1,
        location: 'kota',
        price: '200'
      },
      {
        name: 'kunal',
        id: 2,
        location: 'bundi',
        price: '400'
      },
      {
        name: 'raj',
        id: 3,
        location: 'pune',
        price: '200'
      },
      {
        name: 'rajiu',
        id: 4,
        location: 'pune',
        price: '200'
      }
    ])
    const addToCart = () => {
      if(sessionStorage.getItem("userEmail")){
        cartStore.ADD_TO_CART(currentProduct.value,quantity.value)
        alert("product has been added to cart")
        console.log(currentProduct.value)
      }else{
        alert("please log in to add to your cart")
      }
      
      
    };
 
  const increase = () => {
    if (quantity.value < 50){
      quantity.value += 1;
    }
  };
  const selectedMerchant = reactive({value:{name: 'karan', id: 1, location: 'kota', price: '200'}})
    const selectMerchant = (merchant) => {
      console.log("Hello")
      selectedMerchant.value = merchant;
      console.log(selectedMerchant.value)
  
  };
  const buyNow = ()=>{
    const itemList = [];
    itemList.push({
      productId:currentProduct.value.productId,
      merchantId:currentProduct.value.merchantId
    })
    cartStore.PLACE_ORDER(itemList)
    alert("the order has been placed")
  }
  const decrease = () => {
    if (quantity.value > 1) {
      quantity.value -= 1;
    }
  }
    return {

      addToCart,
      // buyNow,
      merchants,
      currentProduct,
      increase,
      decrease,selectMerchant,quantity,
      selectedMerchant,
      buyNow
    };
  },
};