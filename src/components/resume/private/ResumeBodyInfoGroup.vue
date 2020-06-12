<template>
  <div class="body-info-group">
    <span v-if="item.title" class="group-title">{{ item.title }}</span>
    <span class="headline">{{ item.headline }}</span>
    <div class="subtitle-fields">
      <span class="dates">{{ item.dates }}</span>
      <span class="subtitle">{{ item.subtitle }}</span>
      <ul v-if="notes && notes.length">
        <li v-for="note of notes" :key="note.key">
          {{ note.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  computed: {
    notes() {
      return this.item.notes;
    }
  }
};
</script>

<style lang="scss">
.body-info-group {
  span {
    position: relative;
    display: block;
  }

  span:not(.group-title) {
    padding-left: 10px;
  }
  .group-title {
    font-size: 20px;
    padding-bottom: 10px;
  }
}
</style>
