import { mount, VueWrapper } from '@vue/test-utils';
import ModalMenuLinksMobi from './ModalMenuLinksMobi.vue';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia } from 'pinia';
import { useMenuStore } from 'src/stores/menu';
const pinia = createPinia();

describe('ModalMenuLinksMobi', () => {
  let wrapper: VueWrapper<any>;
  const pinia = createPinia();
  const menuStore = useMenuStore(pinia);
  beforeEach(() => {
    menuStore.OPEN_MENU(true);
    wrapper = mount(ModalMenuLinksMobi, {
      global: {
        plugins: [pinia],
      },
    });
  });

  it('is a Vue instace', () => {
    expect(wrapper).toBeTruthy();
  });

  it('has the correct number of links', async () => {
    const links_menu = 3;
    expect(wrapper.findAll('.mlb__link').length).toBe(links_menu);
  });

  it('calls OpenAndScroll when a link is clicked', async () => {
    const openAndScrollMock = vi.fn();

    wrapper.vm.OpenAndScroll = openAndScrollMock;

    const link = wrapper.find('.mlb__link');

    await link.trigger('click');

    expect(openAndScrollMock).toHaveBeenCalled();
  });
});
