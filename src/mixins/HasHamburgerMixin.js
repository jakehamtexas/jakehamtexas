export const HasHamburgerMixin = {
  data: () => ({
    hasHamburger: false
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.setHasHamburger);
      this.setHasHamburger();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setHasHamburger);
  },
  methods: {
    setHasHamburger() {
      const qTabsWidth = this.$refs.desktopTabs.reduce(
        (clientWidths, { $el: { clientWidth } }) => clientWidth + clientWidths,
        0
      );
      this.hasHamburger = qTabsWidth >= this.windowWidth;
    }
  }
};
