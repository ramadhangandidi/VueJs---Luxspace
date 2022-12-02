<template>
  <nav class="navbar navbar-light justify-content-between pt-4 px-5">
      <div class="ml-5"><img src="../assets/img/logo.png" alt="" /></div>
      <div class="d-flex link-list">
        <router-link to="/home" class="nav-link text-dark py-0">Home</router-link>
        <router-link to="/shipping" class="nav-link text-dark py-0">Shipping</router-link>
        <router-link to="/shippingList" class="nav-link text-dark py-0">Shipping List</router-link>
        <a href=""><img src="../assets/img/cart-icon.png" alt="" /></a>
      </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
}
</script>

<style scoped>
    a {
        color: white;
        margin-right: 10px;
    }

    .router-link-active{
      font-weight: bold;
    }
</style>