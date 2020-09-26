<script>
import Vue from 'vue';
import HeaderBar from '@/header-bar.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    HeaderBar
  }
});
</script>

<template>
  <div id="app">
    <header-bar />
  </div>
</template>
