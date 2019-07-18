import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Tabs', module).add('default', () => (
  <ul className="ray-tabs">
    <li className="ray-tabs__item">Desktop</li>
    <li className="ray-tabs__item">Tablet</li>
    <li className="ray-tabs__item ray-tabs__item--active">Mobile</li>
    <li className="ray-tabs__item">Tablet</li>
    <li className="ray-tabs__item">Tablet</li>
    <li className="ray-tabs__item">Tablet</li>
    <li className="ray-tabs__item">Tablet</li>
    <li className="ray-tabs__item">Tablet</li>
  </ul>
));
