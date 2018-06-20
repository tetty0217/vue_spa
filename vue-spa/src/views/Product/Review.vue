<template>
  <div class="review-list">
    <h1>Review list</h1>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import store from '../../store/product'

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
          store.dispatch('load', this.id)
        },
        immediate: true
      }
    },
    beforeDestroy() {
      store.dispatch('destroy')
    }
  }
</script>
