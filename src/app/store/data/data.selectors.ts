import { state } from "@angular/animations";
import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { dataFeatureKey } from "./data.reducer";
import { DataState } from "./data.state";
/* 
initials: string,
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    job: string */

const getInitials = (state: DataState): string => state.initials;
const getName = (state: DataState): string => state.name;
const getEmail = (state: DataState): string => state.email;
const getPhoneNumber = (state: DataState): string => state.phoneNumber;
const getAddress = (state: DataState): string => state.address;
const getJob = (state: DataState): string => state.job;

// Select feature state
export const selectDataState: MemoizedSelector<object, DataState> = createFeatureSelector<DataState>(dataFeatureKey);

// Select values from feature state
export const selectInitials: MemoizedSelector<object, string> = createSelector(selectDataState, getInitials);
export const selectName: MemoizedSelector<object, string> = createSelector(selectDataState, getName);
export const selectEmail: MemoizedSelector<object, string> = createSelector(selectDataState, getEmail);
export const selectPhoneNumber: MemoizedSelector<object, string> = createSelector(selectDataState, getPhoneNumber);
export const selectAddress: MemoizedSelector<object, string> = createSelector(selectDataState, getAddress);
export const selectJob: MemoizedSelector<object, string> = createSelector(selectDataState, getJob);