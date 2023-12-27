import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import HeaderMain from './HeaderMain.vue';
import { setActivePinia, createPinia } from 'pinia';
setActivePinia(createPinia());

describe('HeaderMain', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(HeaderMain);
  });

  it('is a Vue instace', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(
      '<div class="relative-position z-top bg-transparent text-white q-py-lg q-py-lg-xl">'
    );
  });

  it('has a LogoMain component', () => {
    expect(wrapper.findComponent({ name: 'LogoMain' })).toBeTruthy();
  });

  it('has a HamburguerMain component', () => {
    expect(wrapper.findComponent({ name: 'HamburguerMain' })).toBeTruthy();
  });

  it('has a MenuLinksDesk  component', () => {
    expect(wrapper.findComponent({ name: 'MenuLinksDesk ' })).toBeTruthy();
  });

  it('LogoMain is in the correct position', () => {
    const logoMain = wrapper.findComponent({ name: 'LogoMain' });
    expect(logoMain.classes()).toContain('col-8');
    expect(logoMain.classes()).toContain('col-sm-2');
  });

  it('HamburguerMain is in the correct position', () => {
    const HamburguerMain = wrapper.findComponent({ name: 'HamburguerMain' });
    expect(HamburguerMain.classes()).toContain('col');
  });

  it('MenuLinksDesk is in the correct position', () => {
    const MenuLinksDesk = wrapper.findComponent({ name: 'MenuLinksDesk' });
    expect(MenuLinksDesk.classes()).toContain('col');
  });
});
