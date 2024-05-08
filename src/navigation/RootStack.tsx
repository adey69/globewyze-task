import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../redux/hooks';
import { userSelector } from '../redux/selectors';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const user = useAppSelector(userSelector);
  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <PrimaryNavigator />}
    </NavigationContainer>
  );
};

export default RootStack;
