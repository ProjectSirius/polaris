import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'English', text: 'en', value: 'en' },
  { key: 'Russian', text: 'ru', value: 'ru' },
];

const SelectLanguages = ({ changeLang, classes }) => (
  <Dropdown
    button
    className={classes.bg}
    floating
    icon="world"
    options={languageOptions}
    onChange={(e, data) => changeLang(data.value)}
  />
);

export default SelectLanguages;
