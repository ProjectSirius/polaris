import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'Russian', text: 'ru', value: 'ru' },
  { key: 'English', text: 'eng', value: 'eng' },
];

const SelectLanguages = () => (
  <Dropdown
    button
    className="icon"
    floating
    icon="world"
    options={languageOptions}
  />
);

export default SelectLanguages;
