import { Recipe } from './recipe.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe('recipe', 'a recipe', '/', [])).toBeTruthy();
  });
});
