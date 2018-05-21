import { resetPasswordRequest, recoverPassword } from 'api/index';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const resetPassword = (email, recaptcha) => async dispatch => {
    try {
        await resetPasswordRequest({ email, recaptcha });
        dispatch({ type: RESET_PASSWORD_REQUEST });
    } catch (e) {
        if (e.response.status === 404) {
            return Promise.reject({ email: 'Such email doesn\'t exist' });
        }
    }
};

export const RECOVER_PASSWORD = 'RECOVER_PASSWORD';
export const saveNewPassword = (newPassword, code) => async dispatch => {
    await recoverPassword({ newPassword, code });
    dispatch({ type: RECOVER_PASSWORD });
};
