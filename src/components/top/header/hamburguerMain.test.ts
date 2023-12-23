import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { describe, expect, it } from 'vitest';
import HamburguerMain from './HamburguerMain.vue';
import { useMenuStore } from 'src/stores/menu';

describe('HamburguerMain', () => {
  const pinia = createPinia();
  const menuStore = useMenuStore(pinia);

  const wrapper = mount(HamburguerMain, {
    global: {
      plugins: [pinia],
    },
  });

  it('opens and closes the menu on click', async () => {
    expect(menuStore.open).toBe(false);

    await wrapper.find('.hamburguer').trigger('click');

    expect(menuStore.open).toBe(true);

    await wrapper.find('.hamburguer').trigger('click');

    expect(menuStore.open).toBe(false);
  });

  it('closes the menu on second click', async () => {
    await wrapper.find('.hamburguer').trigger('click');
    await wrapper.find('.hamburguer').trigger('click');
    expect(menuStore.open).toBe(false);
  });

  it('has three span elements', () => {
    const spans = wrapper.findAll('span');
    expect(spans.length).toBe(3);
  });

  it('has the correct initial classes', () => {
    const hamburguer = wrapper.find('.hamburguer');
    expect(hamburguer.classes()).toContain('column');
    expect(hamburguer.classes()).toContain('items-end');
    expect(hamburguer.classes()).toContain('relative-position');
  });
});
