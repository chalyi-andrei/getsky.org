import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import moment from 'moment';
import { Box } from 'grid-styled';

import { FormInput, FormDropdown, FormMessage, } from 'components/layout/Form';
import { Submit } from 'components/layout/Button';

const UTC_OFFSET_FROM = -11;
const UTC_OFFSET_TO = 14;

export default reduxForm({ form: 'userLocationSettingsForm' })(
    class extends React.Component {
        timeOffsets = [];
        componentWillMount() {
            const date = moment();

            for (let i = UTC_OFFSET_FROM; i <= UTC_OFFSET_TO; i++) {
                const timeOffset = date.utcOffset(i).format('LLL');
                const offset = i >= 0 ? `+${i}` : i;
                this.timeOffsets.push({ text: `GMT ${offset} - ${timeOffset}`, value: i.toString() })
            }
        }
        render() {
            const {
                handleSubmit,
                pristine,
                submitting,
                showSuccessMessage,

                countries,
                showStates,
                states,
            } = this.props;

            return (
                <Form onSubmit={handleSubmit}>
                    <Box width={[1, 1, 1 / 2]}>
                        {showSuccessMessage && <FormMessage>Settings updated</FormMessage>}
                        <Field
                            name="timeOffset"
                            component={FormDropdown}
                            options={this.timeOffsets}
                            label="Your local time"
                            description="All times will be formatted to your local time" />

                        <Field
                            name="countryCode"
                            component={FormDropdown}
                            options={countries}
                            label="Country" />
                        {showStates
                            && <Field
                                name="stateCode"
                                component={FormDropdown}
                                options={states}
                                label="State" />}

                        <Field
                            name="city"
                            component={FormInput}
                            type="text"
                            label="City"
                            placeholder="City"
                        />

                        <Field
                            name="postalCode"
                            component={FormInput}
                            type="text"
                            label="Postal code"
                            placeholder="Postal code"
                        />

                        <Submit disabled={pristine || submitting} showSpinner={submitting} text="Save" primary />
                    </Box>
                </Form>
            )
        }
    });
