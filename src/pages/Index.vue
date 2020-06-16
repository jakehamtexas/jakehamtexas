<template>
  <q-page class="flex flex-center me">
    <div class="its-me-wrapper">
      <h4>Hi! 👋</h4>
      <h4>I'm Jake Hamilton.</h4>
      <h4>
        I'm a super-motivated software developer based in West TX. I love
        writing frontend for the web in Vue.js, creating cool projects with my
        friends, and finding the next thing to learn or think about. I dabble in
        a little bit of everything - Rust, Flutter/Dart, .NET Core,
        Typescript/Node, the list goes on.
      </h4>
      <h4>
        I have some cats and some kids, I get to write code all the time for
        fun, and my wife is literally a chef, so life's pretty good.
      </h4>
      <h4>I have my social links in the top-nav, next to my name.</h4>
      <h4>☝</h4>
      <h4>{{ navigationInstructionText }}</h4>
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
      return `You can also use the ${mobileAwareContextualDirection} or the links below to check out some content.`;
    }
  }
};
</script>

<style lang="scss" scoped>
.me {
  display: inline;
  .its-me-wrapper {
    width: 100%;
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
