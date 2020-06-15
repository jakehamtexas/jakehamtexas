export const HasHamburgerMixin = {
  computed: {
    hasHamburger() {
      return this.screenIsSmallerThanTabsWidth || this.isMobile;
    }
  }
};
