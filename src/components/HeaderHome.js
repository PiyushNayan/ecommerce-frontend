import { computed,} from 'vue';

import useAuthStore  from '../stores/authStore';
import { ref } from 'vue';
// import {useRouter} from 'vue-router';
export default {
  components:{
  
},
  setup(){
    const authStore = useAuthStore();
    // const router = useRouter()
  
  const authStatus = computed(()=>authStore.authStatus)
  // const handleSearch = ()=>{
  //   router.push("/serachFunc")
  // }
  
   const authChange = ()=>{
    if(authStatus.value){
      authStore.LOGOUT()
    }
    
   
  }
  const categories=ref([
    {
        id:1,
        category_name:'ELectronics',
        category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
    },
    {
        id:2,
        category_name:'Fashion',
        category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
    },
    {
        id:3,
        category_name:'Mobile',
        category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
    },
    {
        id:4,
        category_name:'Apple',
        category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
    },
    {
        id:5,
        category_name:'Apple',
        category_img:'https://static.vecteezy.com/system/resources/thumbnails/000/551/079/small/laptop_008.jpg'
    }   

  ])
      
    
    

    const user = computed(()=>authStore.user)
    const email=computed(()=>authStore.email)
    return {
      authChange,
      email,user,
      // getAuthStatus,
      authStatus,
      categories
    };
    
  },
  
  }

