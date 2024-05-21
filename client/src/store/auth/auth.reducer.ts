import { createReducer, on } from '@ngrx/store';
import {
  completedExit,
  completedLogin,
  completedRegistrationAction,
  registrationFailure,
  startLoading,
  startRegistrationAction,
  stopLoading,
} from './auth.actions';
import { ResponseDataRegistrationType } from './types';

export interface AuthType {
  isAuth: boolean;
  isLoading: boolean;
}

const auth: AuthType = {
  isAuth: false,
  isLoading: false,
};

export const AuthReducer = createReducer(
  auth,
  on(startLoading, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(stopLoading, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(completedRegistrationAction, (state) => ({
    ...state,
    isAuth: true,
  })),
  on(completedExit, (state, data: any) => ({
    ...state,
    isAuth: data.isAuth,
  })),
  on(completedLogin, (state, data: any) => ({
    ...state,
    isAuth: data.isAuth,
  })),
  on(registrationFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
