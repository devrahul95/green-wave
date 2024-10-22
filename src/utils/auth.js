// src/auth.js
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebaseConfig';

const setupRecaptcha = (mobileNumber, recaptchaContainer) => {
  const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainer, {
    size: 'invisible',
  }, auth);

  return signInWithPhoneNumber(auth, mobileNumber, recaptchaVerifier);
};

export const loginWithPhoneNumber = async (mobileNumber, onSuccess, onError) => {
  const recaptchaContainer = document.createElement('div');
  document.body.appendChild(recaptchaContainer);

  setupRecaptcha(mobileNumber, recaptchaContainer)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      onSuccess();
    })
    .catch(error => {
      onError(error);
    });
};

export const verifyOtp = async (otp, onSuccess, onError) => {
  const confirmationResult = window.confirmationResult;
  
  if (!confirmationResult) {
    onError(new Error('No confirmation result found'));
    return;
  }

  confirmationResult.confirm(otp)
    .then(result => {
      // User signed in successfully
      onSuccess(result.user);
    })
    .catch(error => {
      onError(error);
    });
};
