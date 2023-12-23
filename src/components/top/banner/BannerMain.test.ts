import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BannerMain from './BannerMain.vue';
import { setActivePinia, createPinia } from 'pinia';
setActivePinia(createPinia());

describe('BannerMain', () => {
  it('should render without crashing', () => {
    const wrapper = mount(BannerMain);
    expect(wrapper).toBeTruthy();
  });

  it('should contain a header with class "banner"', () => {
    const wrapper = mount(BannerMain);
    const header = wrapper.get('header.banner');
    expect(header).toBeTruthy();
  });

  it('should contain a div with class "container"', () => {
    const wrapper = mount(BannerMain);
    const container = wrapper.get('div.container');
    expect(container).toBeTruthy();
  });

  it('should contain a div with class "banner__box-one"', () => {
    const wrapper = mount(BannerMain);
    const boxOne = wrapper.get('div.banner__box-one');
    expect(boxOne).toBeTruthy();
  });

  it('should contain a div with class "banner__box banner_animated"', () => {
    const wrapper = mount(BannerMain);
    const boxAnimated = wrapper.get('div.banner__box.banner_animated');
    expect(boxAnimated).toBeTruthy();
  });
});
