import {createSelector} from 'reselect';
import { create } from 'domain';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user)=>user.currentUser
);

