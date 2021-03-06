import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Form, Field } from 'redux-form';

import { required } from 'validation/rules';
import { AdvertSummary } from 'components/routes/AdvertDetails';
import { FormCaptcha } from 'components/layout/Form';
import { Submit } from 'components/layout/Button';

const r = required();

class FormPreview extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        // Reset captcha after receiving response
        if (prevProps.submitting && prevProps.submitting !== this.props.submitting) {
            const cptCmp = this.recaptchaField.getRenderedComponent();
            cptCmp.resetRecaptcha();
        }
    }

    render() {
        const { handleSubmit, pristine, submitting, countries, states, details, skyPrices } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                {details &&
                    <AdvertSummary countries={countries} states={states} details={details} skyPrices={skyPrices} />
                }
                <Field name="recaptcha" component={FormCaptcha} validate={[r]} withRef ref={r => { this.recaptchaField = r }} isRequired />
                <Submit disabled={pristine || submitting} showSpinner={submitting} text="Post advert" primary />
            </Form>
        )
    }
};

FormPreview.propTypes = {
    states: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
    })),
    countries: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
    })),
};

const ReduxForm = reduxForm({
    form: 'formPreviewPosting'
})(FormPreview);

export default ReduxForm;
