import { createSelector } from '@reduxjs/toolkit';
import { filterSelectors } from './index';

export const searchSelector = createSelector(filterSelectors, state => state.filter.search);
export const yearSelector = createSelector(filterSelectors, state => state.filter.year);
export const typeSelector = createSelector(filterSelectors, state => state.filter.type);

export const dataSelector = createSelector(filterSelectors, state => state.data);

export const yearOptionsSelector = createSelector(filterSelectors, state => state.yearOptions);
export const typeOptionsSelector = createSelector(filterSelectors, state => state.typeOptions);
