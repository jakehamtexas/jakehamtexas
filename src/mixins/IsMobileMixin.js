export const IsMobileMixin = {
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.isMobile = !!this.$q.platform.is.mobile;
  }
};
