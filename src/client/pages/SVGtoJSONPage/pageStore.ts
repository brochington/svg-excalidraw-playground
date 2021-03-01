import Staction, { ActionParams } from 'staction';
import React, { useState } from 'react';
import svgToEx from 'svg-to-excalidraw';

export type PageState = {
  svgString: string;
  excaliJSON: any; // type this better
  svgToExErrorContent: Element | null,
};

type AP = ActionParams<PageState, PageActions>;

export const pageActions = {
  convert: (params: AP): PageState => {
    const nextState = params.state();

    const { hasErrors, errors, content } = svgToEx.convert(nextState.svgString);

    if (hasErrors) {
      nextState.svgToExErrorContent = errors;
      return nextState;
    }

    nextState.svgToExErrorContent = null;

    console.log('content', content);

    nextState.excaliJSON = content;

    return nextState;
  },

  setSVGString: (params: AP, nextSvgString: string): PageState => {
    const nextState = params.state();
    nextState.svgString = nextSvgString;

    return nextState;
  },
};

export type PageActions = typeof pageActions;

export type PageStore = Staction<PageState, PageActions>;

export const PageStoreContext = React.createContext<PageStore>(
  new Staction<PageState, PageActions>()
);

export function useStaction<S, A>(initialState: S, actions: A): Staction<S, A> {
  const [store] = useState<Staction<S, A>>(new Staction<S, A>());
  const [, updateState] = React.useState<object>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  if (store.initState === 'uninitialized') {
    store.disableLogging();

    store.init(
      actions,
      () => initialState,
      forceUpdate
    );
  }

  return store;
}
