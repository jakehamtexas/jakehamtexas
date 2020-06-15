<template>
  <q-page class="flex flex-center me">
    <div class="its-me-wrapper">
      <h4>Hi!</h4>
      <h4>I'm Jake Hamilton.</h4>
      <h4>Here's my website.</h4>
      <h4>{{ navigationInstructionText }}</h4>
      <h4>The links below will also work.</h4>
    </div>
    <div class="routes-wrapper">
      <router-link
        v-for="route of routesWithoutIndex"
        :key="route.key"
        :to="route.to"
      >
        <h5>{{ route.label() }}</h5></router-link
      >
    </div>
  </q-page>
</template>

<script>
import {
  IsMobileMixin,
  HasHamburgerMixin,
  WindowDimensionsMixin,
  ScreenIsSmallerThanTabsWidthMixin
} from "../mixins";

import { routes } from "../constants";

const routesWithoutIndex = routes.filter((_, i) => i !== 0);
export default {
  name: "PageIndex",
  mixins: [
    IsMobileMixin,
    HasHamburgerMixin,
    WindowDimensionsMixin,
    ScreenIsSmallerThanTabsWidthMixin
  ],
  data: () => ({
    routesWithoutIndex
  }),
  computed: {
    navigationInstructionText() {
      const mobileAwareContextualDirection = this.hasHamburger
        ? "hamburger menu in the top-right"
        : "buttons above";
      return `You can use the ${mobileAwareContextualDirection} to check out some content.`;
    }
  }
};
</script>

<style lang="scss" scoped>
.me {
  display: flex;
  .its-me-wrapper {
    width: 100%;
    height: 100%;
    h4 {
      margin: 0;
      padding-bottom: 30px;
    }
  }

  .routes-wrapper {
    width: 100%;
    a {
      text-decoration: none;
      &,
      &:visited,
      &:hover,
      &:active {
        color: $accent;
      }
    }
  }
}
</style>
