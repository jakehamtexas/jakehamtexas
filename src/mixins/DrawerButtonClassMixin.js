const withPx = val => `${val}px`;

export const DrawerButtonClassMixin = {
  computed: {
    drawerButtonHeight() {
      const buttonAreas = this.routes.length;
      return (this.windowHeight * 0.9) / buttonAreas / 2;
    },
    drawerButtonFontSize() {
      return this.drawerButtonHeight / 2;
    },
    drawerButtonLineHeight() {
      return this.drawerButtonHeight;
    },
    drawerButtonClass() {
      return {
        height: withPx(this.drawerButtonHeight),
        "font-size": withPx(this.drawerButtonFontSize),
        "line-height": withPx(this.drawerButtonLineHeight)
      };
    }
  }
};
