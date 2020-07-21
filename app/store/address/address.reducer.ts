import { createReducer, createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';
import { fetchAddressDone } from './address.actions';

export interface AddressState {
  balance: string | null;
}

const initialState: AddressState = {
  // balance: null,
  balance: '100900',
};

export const addressReducer = createReducer(initialState, builder =>
  builder.addCase(fetchAddressDone, (_state, { payload }) => ({
    balance: payload.stx.balance,
  }))
);

export const selectAddressState = (state: RootState) => state.address;

export const selectAddressBalance = createSelector(selectAddressState, state => state.balance);
