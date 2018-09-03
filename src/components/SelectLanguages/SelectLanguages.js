import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'Russian', text: 'ru', value: 'ru' },
  { key: 'English', text: 'eng', value: 'eng' },
];

const SelectLanguages = ({ changeLang }) => (
  <Dropdown
    button
    className="icon"
    floating
    icon="world"
    options={languageOptions}
    onChange={(e, data) => changeLang(data.value)}
  />
);

export default SelectLanguages;
