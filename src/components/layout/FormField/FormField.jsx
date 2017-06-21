import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';
import Label from '../../Label/Label.jsx';

const labelTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const FormField = (
  {
    children,
    isDisabled,
    isRequired,
    labelType,
    label,
    data,
  }
) => {
  let labelText = label;

  if (isRequired) {
    labelText += ' *';
  }

  return (
    <div
      className={style.wrapper}
      {...getDataAttrs(data)}
    >
      <Label
        text={labelText}
        type={labelType}
        className={style.disabled}
        type={isDisabled ? 'disabled' : 'primary'}
      />
      <div className={style.input}>
        {children}
      </div>

    </div>
  );
};

FormField.defaultProps = {
  children: '',
  disabled: false,
  label: 'Label',
  labelType: labelTypes.PRIMARY,
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  labelType: PropTypes.string,
  data: PropTypes.object,
};

FormField.displayName = 'FormField';

export default FormField;
