import React from 'react';
import Staction from 'staction';

import { AppState } from 'records/AppState';
import { AppActions } from 'actions';

const defaultStaction = new Staction<AppState, AppActions>();

export type AppStore = Staction<AppState, AppActions>;

const AppStoreContext = React.createContext<Staction<AppState, AppActions>>(defaultStaction);

export default AppStoreContext;