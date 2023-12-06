<template>
  <div class="container">
    <div class="col-20">
      <div class="custom-select">
        <select v-model="authType">
          <option value="login">LOGIN</option>
          <option value="register">REGISTER</option>
        </select>
      </div>
    </div>

    <div class="col-80">
      <LoginForm :authType="authType" />
      <!-- <button >
        {{ authType === 'login' ? "LOGIN"  : 'REGISTER' }}
      </button> -->
    </div>
  </div>
</template>
  
<script>
import LoginForm from '@/components/LoginForm.vue';
import { ref,  } from 'vue';

export default {
  components: {
    LoginForm,
  },
  setup() {
    // const userStore = useUserStore()

    const authType = ref('login');


    const toggleAuthType = () => {
      authType.value = authType.value === 'login' ? 'register' : 'login';
    };

    return {
      // userType,
      authType,
      // showAuthButton,
      toggleAuthType,
    };
  },
};

</script>
 
<style scoped>
.container {
  border-radius: 5px;
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;


  background-color: cornflowerblue;
  color: white;
  padding: 12px 20px;
  border: none;
  width: 100px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 25px;
}

button:hover {
  background-color: cornflowerblue;
}
</style>