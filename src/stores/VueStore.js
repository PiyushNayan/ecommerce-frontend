import { defineStore } from "pinia";
import { ref } from "vue";

const useRootStore = defineStore('searchproducts', () => {
  // Use ref instead of reactive for a simpler setup
  const products = ref({});

  const FETCH_PRODUCTS = async (searchTerm) => {

    const uri = searchTerm ? `${searchTerm}` : "";

    const res = await fetch("/product/search?productName=" + uri);
      const parsedResponse = await res.json();
      products.value = parsedResponse
      console.log(parsedResponse)   
    // try {
    //   const res = await fetch("http://localhost:9000/product");
    //   const parsedResponse = await res.json();

    //   // Update the ref directly
    //   products.value = { ...parsedResponse };
    //   console.log(products.value);
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    // }
  };

  return {
    FETCH_PRODUCTS,
    products
  };
});

export default useRootStore;
