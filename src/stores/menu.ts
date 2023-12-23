import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
  state: () => ({
    open: false,
  }),

  actions: {
    OPEN_MENU(p: boolean) {
      this.open = p !== undefined ? p : !this.open;
    },
  },
});
