import React from 'react';
import PropTypes from 'prop-types';

import ControlDropdown from './ControlDropdown';
import FormItem from './FormItem';

const FormDropdown = props => {
    const { label, isRequired, options, description, input: { name, onChange }, meta: { error, warning, touched }, disabled } = props;
    const showError = !!(touched && (error || warning));

    return (
        <FormItem name={name} label={label} isRequired={isRequired} description={description} showError={showError} error={error}>
            <ControlDropdown {...props} name={name} onChange={onChange} options={options} disabled={disabled} />
        </FormItem>
    );
};


FormDropdown.propTypes = {
    input: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
        warning: PropTypes.string,
    }).isRequired,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    options: PropTypes.array,
}

export default FormDropdown;
