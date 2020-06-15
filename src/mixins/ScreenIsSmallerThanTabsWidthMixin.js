export const ScreenIsSmallerThanTabsWidthMixin = {
  data: () => ({
    screenIsSmallerThanTabsWidth: false
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.setScreenIsSmallerThanTabsWidth);
      this.setScreenIsSmallerThanTabsWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setScreenIsSmallerThanTabsWidth);
  },
  methods: {
    setScreenIsSmallerThanTabsWidth() {
      const qTabsWidth = this.$refs.desktopTabs.reduce(
        (clientWidths, { $el: { clientWidth } }) => clientWidth + clientWidths,
        0
      );
      this.screenIsSmallerThanTabsWidth = qTabsWidth >= this.windowWidth;
    }
  }
};
