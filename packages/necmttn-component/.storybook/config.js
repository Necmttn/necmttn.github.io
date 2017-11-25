import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Necmttn Component Lib',
  url: 'https://github.com/necmttn/necmttn.github.io',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: true,
  downPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
});


// put welcome screen at the top of the list so it's the first one displayed
require('../src/stories/welcome');

// automatically import all story js files that end with *.stories.js
const req = require.context('../src/stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module);

