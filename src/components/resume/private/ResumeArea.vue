<template>
  <div class="resume-area">
    <hr v-if="shouldShowSeparatorTop" />
    <h5 class="title">{{ title }}</h5>
    <slot class="area-content" />
    <hr v-if="shouldShowSeparatorBottom" />
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    shouldShowSeparatorTop: Boolean,
    shouldShowSeparatorBottom: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss">
.resume-area {
  width: 100%;
  .title {
    margin: 15px 0 15px 0;
  }
  .area-content {
    margin-bottom: 10px;
  }
  hr {
    border-top: solid 1px;
  }
}
</style>
