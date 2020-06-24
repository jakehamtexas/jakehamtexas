<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary text-white" height-hint="98">
    <q-header elevated class="text-secondary">
      <q-toolbar>
        <q-toolbar-title>
          Jake Hamilton
          <q-avatar v-for="social of socials" :key="social.key">
            <a
              :href="social.href"
              :title="social.title"
              class="text-accent"
              v-html="social.iconMarkup"
              target="blank"
            ></a>
          </q-avatar>
          <q-avatar
            dense
            flat
            round
            icon="menu"
            @click="hasHamburgerClicked = !hasHamburgerClicked"
            class="float-right text-accent"
            v-if="hasHamburger"
            font-size="30px"
          />
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left" v-if="!hasHamburger">
        <q-route-tab
          v-for="route of routes"
          ref="desktopTabs"
          :key="route.key"
          :to="route.to"
          :label="route.label(false)"
          class="text-accent"
        />
      </q-tabs>
    </q-header>
    <q-drawer
      show-if-above
      v-model="hasHamburgerClicked"
      side="right"
      bordered
      content-class="bg-primary"
      v-if="hasHamburger"
    >
      <q-list style="width: 100%;" dark bordered separator>
        <q-item
          v-for="route of routes"
          :key="route.key"
          :to="route.to"
          class="text-accent float-left text-secondary hamburger-item"
          clickable
          v-ripple
          @click="hasHamburgerClicked = false"
          ><a
            :style="drawerButtonClass"
            :href="route.to"
            class="text-accent"
            style="width: 100%; text-decoration:none"
            ><q-item-section>{{ route.label(true) }}</q-item-section></a
          ></q-item
        >
        <q-item
          :key="'empty'"
          class="text-accent float-left text-secondary hamburger-item"
        ></q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view data-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { socials, routes } from "../constants";
import {
  WindowDimensionsMixin,
  HasHamburgerMixin,
  ScreenIsSmallerThanTabsWidthMixin,
  IsMobileMixin,
  DrawerButtonClassMixin
} from "../mixins";
export default {
  name: "MainLayout",
  mixins: [
    WindowDimensionsMixin,
    HasHamburgerMixin,
    DrawerButtonClassMixin,
    ScreenIsSmallerThanTabsWidthMixin,
    IsMobileMixin
  ],
  data: () => ({
    socials,
    routes,
    hasHamburgerClicked: false
  })
};
</script>

<style lang="scss">
.hamburger-item {
  width: 100%;
}
</style>
