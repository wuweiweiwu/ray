import React from 'react';
import PropTypes from 'prop-types';

export default function Radio({ id, label, value, ...rest }) {
  return (
    <div className="ray-radio">
      <input id={id} type="radio" value={value} {...rest} />

      <label className="ray-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};
