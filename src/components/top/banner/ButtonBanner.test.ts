import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import ButtonBanner from './ButtonBanner.vue';

describe('buttonBanner', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(ButtonBanner);
  });

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('has the correct href', () => {
    const link = wrapper.find('a');
    expect(link.attributes('href')).toBe(
      'https://wa.me/5516996110114?text=Olá, estou interessado em discutir os serviços oferecidos pela BMDev. Você poderia me fornecer mais informações?'
    );
  });

  it('renders the image correctly', () => {
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

  it('renders the text correctly', () => {
    const text = wrapper.find('.text-primary');
    expect(text.text()).toBe('Vamos iniciar um projeto');
  });

  it('has the correct target attribute', () => {
    const link = wrapper.find('a');
    expect(link.attributes('target')).toBe('_blank');
  });

  it('has the correct rel attribute', () => {
    const link = wrapper.find('a');
    expect(link.attributes('rel')).toBe('noopener');
  });
});
