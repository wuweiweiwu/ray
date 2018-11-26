import { configure, addDecorator } from '@storybook/html';
import { checkA11y } from '@storybook/addon-a11y';
import { withBackgrounds } from '@storybook/addon-backgrounds';

addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// addDecorator(
//   withBackgrounds([
//     { name: 'twitter', value: '#00aced', default: true },
//     { name: 'facebook', value: '#3b5998' },
//   ])
// );
