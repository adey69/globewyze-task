import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { emailValidator, passwordValidator } from '../../../helpers/validators';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getUser } from '../../../redux/slices/authSlice';
import { authSelector } from '../../../redux/selectors';

export default () => {
  const [email, setEmail] = useState({
    value: 'madnan@gmail.com',
    error: '',
  });
  const [password, setPassword] = useState({ value: '12345678', error: '' });
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(authSelector);
  const [isErrorBarVisible, setIsErrorBarVisible] = useState(false);

  const navigation = useNavigation();

  const validate = useCallback(() => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return false;
    }
    return true;
  }, [email, password]);

  const onLoginPressed = useCallback(async () => {
    const isValidInput = validate();
    if (isValidInput) {
      dispatch(getUser({ email: email.value, password: password.value }));
    }
  }, [email.value, password.value, validate, dispatch]);

  useEffect(() => {
    if (error) {
      setIsErrorBarVisible(!!error);
    }
  }, [error]);

  return {
    email,
    password,
    navigation,
    isLoading,
    error,
    isErrorBarVisible,
    setIsErrorBarVisible,
    setEmail,
    setPassword,
    onLoginPressed,
  };
};
