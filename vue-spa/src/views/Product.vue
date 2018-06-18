<template>
  <div class="product">
    <h1>Product Information</h1>
    <p>Your ID is {{ id }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      id: Number
    }
  }
</script>
