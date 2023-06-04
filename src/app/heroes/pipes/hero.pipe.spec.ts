import { HeroImagePipe } from './hero.pipe';

describe('HeroPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroImagePipe();
    expect(pipe).toBeTruthy();
  });
});
