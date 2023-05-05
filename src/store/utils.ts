import { EntityState } from '@reduxjs/toolkit';
import _ from 'lodash';

export const wraperAdapterAction = (name: string, adaptorAction: any) => (state: any, action: any) => {
  const adapterState: EntityState<any> = _.get(state, name);
  return void adaptorAction(adapterState, action.payload);
};
