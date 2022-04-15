<template>
   <div class="about">
    <p>飲料試算表</p> <img alt="bubble pic" class="rounded  small" src="../assets/bubbletea.jpg">
  </div>
  <DrinksCal msg="DrinksTable"></DrinksCal>
</template>

<script>

import DrinksCal from '@/components/DrinksCal.vue'
export default {
    name: 'DrinksView',
    components: {
    DrinksCal,
  }
}
</script>

<style>
.small {
    width: 100px;
}
</style>