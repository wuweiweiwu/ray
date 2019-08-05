import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from '../src/components/tabs';

function init() {
  Tabs.createAll();
}

storiesOf('Tabs', module).add(
  'default',
  () =>
    setTimeout(init) && (
      <>
        <ul className="ray-tabs">
          <li data-target="#tab-1" className="ray-tabs__item" tabIndex="1">
            Desktop
          </li>
          <li data-target="#tab-2" className="ray-tabs__item" tabIndex="1">
            Tablet
          </li>
          <li
            data-target="#tab-3"
            className="ray-tabs__item ray-tabs__item--active"
            tabIndex="1"
          >
            Mobile
          </li>
        </ul>

        <div id="tab-1">Panel 1</div>

        <div id="tab-2">Panel 2</div>

        <div id="tab-3">Panel 3</div>
      </>
    )
);
