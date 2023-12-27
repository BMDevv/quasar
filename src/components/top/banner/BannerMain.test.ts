import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import BannerMain from './BannerMain.vue';
import { setActivePinia, createPinia } from 'pinia';
setActivePinia(createPinia());

describe('BannerMain', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(BannerMain);
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should contain a header with class "banner"', () => {
    const header = wrapper.get('header.banner');
    expect(header).toBeTruthy();
  });

  it('should contain a div with class "container"', () => {
    const container = wrapper.get('div.container');
    expect(container).toBeTruthy();
  });

  it('should contain a div with class "banner__box-one"', () => {
    const boxOne = wrapper.get('div.banner__box-one');
    expect(boxOne).toBeTruthy();
  });

  it('should contain a div with class "banner__box banner_animated"', () => {
    const boxAnimated = wrapper.get('div.banner__box.banner_animated');
    expect(boxAnimated).toBeTruthy();
  });
});
