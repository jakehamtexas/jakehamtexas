<template>
  <ul class="simple-list">
    <li v-for="listItem of listItems" :key="listItem.key">
      {{ listItem.label }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listItems: Array
  }
};
</script>

<style lang="scss" scoped>
.simple-list {
  columns: 2;
  list-style: none;
  padding: 10px 10px 0;
  li {
    padding: 5px;
  }
}
</style>
