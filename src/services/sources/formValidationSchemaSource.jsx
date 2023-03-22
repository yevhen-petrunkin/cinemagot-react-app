import { object, string, number } from 'yup';
import { toast } from 'react-toastify';
import { messageData } from './messageDataSource';

const {
  invalidEmailMessage,
  emailContentMessage,
  requireEmailMessage,
  minPasswordMessage,
  maxPasswordMessage,
  passwordContentMessage,
  requirePasswordMessage,
  minUsernameMessage,
  maxUsernameMessage,
  usernameContentMessage,
  requireUsernameMessage,
  invalidAgeNumberMessage,
  positiveAgeNumberMessage,
  minAgeMessage,
  maxAgeMessage,
  requireAgeMessage,
  minCountryMessage,
  maxCountryMessage,
  countryContentMessage,
  requireCountryMessage,
} = messageData;

const notifyOfMinUsername = () => toast.error(minUsernameMessage);
const notifyOfMaxUsername = () => toast.error(maxUsernameMessage);
const notifyOfUsernameContent = () => toast.error(usernameContentMessage);
const notifyOfRequiredUsername = () => toast.error(requireUsernameMessage);

const notifyOfInvalidEmail = () => toast.error(invalidEmailMessage);
const notifyOfEmailContent = () => toast.error(emailContentMessage);
const notifyOfRequiredEmail = () => toast.error(requireEmailMessage);

const notifyOfInvalidAge = () => toast.error(invalidAgeNumberMessage);
const notifyOfPositiveAge = () => toast.error(positiveAgeNumberMessage);
const notifyOfMinAge = () => toast.error(minAgeMessage);
const notifyOfMaxAge = () => toast.error(maxAgeMessage);
const notifyOfRequiredAge = () => toast.error(requireAgeMessage);

const notifyOfMinCountry = () => toast.error(minCountryMessage);
const notifyOfMaxCountry = () => toast.error(maxCountryMessage);
const notifyOfCountryContent = () => toast.error(countryContentMessage);
const notifyOfRequiredCountry = () => toast.error(requireCountryMessage);

const notifyOfMinPassword = () => toast.error(minPasswordMessage);
const notifyOfMaxPassword = () => toast.error(maxPasswordMessage);
const notifyOfPasswordContent = () => toast.error(passwordContentMessage);
const notifyOfRequiredPassword = () => toast.error(requirePasswordMessage);

export const signUpSchema = object().shape({
  username: string()
    .trim()
    .min(4, notifyOfMinUsername)
    .max(12, notifyOfMaxUsername)
    .matches(/^[a-zA-Z0-9]+$/, notifyOfUsernameContent)
    .required(notifyOfRequiredUsername),
  email: string()
    .trim()
    .email(notifyOfInvalidEmail)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, notifyOfEmailContent)
    .required(notifyOfRequiredEmail),
  age: number()
    .integer(notifyOfInvalidAge)
    .positive(notifyOfPositiveAge)
    .min(10, notifyOfMinAge)
    .max(120, notifyOfMaxAge)
    .truncate()
    .required(notifyOfRequiredAge),
  country: string()
    .trim()
    .min(4, notifyOfMinCountry)
    .max(56, notifyOfMaxCountry)
    .matches(/^[A-Za-z]*$/, notifyOfCountryContent)
    .required(notifyOfRequiredCountry),
  password: string()
    .trim()
    .min(6, notifyOfMinPassword)
    .max(12, notifyOfMaxPassword)
    .matches(/^[a-zA-Z0-9]+$/, {
      message: notifyOfPasswordContent,
      excludeEmptyString: true,
    })
    .required(notifyOfRequiredPassword),
});

export const loginSchema = object().shape({
  email: string()
    .trim()
    .email(notifyOfInvalidEmail)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, notifyOfEmailContent)
    .required(notifyOfRequiredEmail),
  password: string()
    .trim()
    .min(6, notifyOfMinPassword)
    .max(12, notifyOfMaxPassword)
    .matches(/^[a-zA-Z0-9]+$/, {
      message: notifyOfPasswordContent,
      excludeEmptyString: true,
    })
    .required(notifyOfRequiredPassword),
});
