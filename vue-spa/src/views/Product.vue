<template>
  <div class="product">
    <h1>{{ detail.name }}</h1>
    <nav class="nav">
      <router-link :to="{ name: 'product-home' }">Product information</router-link>
      <router-link :to="{ name: 'product-review' }">Review</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import store from '../store/product'
  export default {
    props: {
      id: Number
    },
    computed: mapGetters({'detail': 'detail'}),
    methods: {
      ...mapActions('product', ['load', 'destroy'])
    },
    watch: {
      id: {
        handler() {
          store.dispatch('load', (this.id))
        },
        immediate: true
      }
    },
    beforeDestroy() {
      store.dispatch('destroy')
    }
  }
</script>
