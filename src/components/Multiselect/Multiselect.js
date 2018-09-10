import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class MultiSelect extends React.Component {
  render() {
    const { genres, addTags, removeTags, tags } = this.props;
    return (
      <Select
        defaultValue={tags}
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        initialized={false}
        options={genres}
        onChange={(data, toggleAction) => {
          return toggleAction.action === 'select-option'
            ? addTags(toggleAction.option)
            : removeTags(toggleAction.removedValue.id);
        }}
        value={tags}
      />
    );
  }
}

export default MultiSelect;
