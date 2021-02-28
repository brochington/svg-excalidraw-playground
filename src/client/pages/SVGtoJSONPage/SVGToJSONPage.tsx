import React, { FC, useContext } from 'react';
import ReactJson from 'react-json-view'
import { useStaction, PageState, PageActions, pageActions, PageStoreContext } from './pageStore';

import Button from 'components/Button';
import SVGEditor from './SVGEditor';

const initialState: PageState = {
  svgString: '',
  excaliJSON: { excaliJSON: 'goes here' },
};

const Subheader: FC = () => {
  const store = useContext(PageStoreContext);

  return (
    <div className="flex flex-row h-12">
      <h1>SVG to JSON</h1>
      <div>
        <Button onClick={() => store.actions.convert()}>Convert</Button>
      </div>
    </div>
  );
};

const SVGToJSONPage: React.FC = () => {
  const pageStore = useStaction<PageState, PageActions>(initialState, pageActions);

  // @ts-ignore
  window.pageStore = pageStore;

  return (
    <PageStoreContext.Provider value={pageStore}>
      <div className="h-screen">
        <Subheader />
        <div className="flex flex-row" style={{ height: 'calc(100vh - 48px)' }}>
          <SVGEditor />
          <div>
            <ReactJson src={pageStore.state.excaliJSON} />
          </div>
        </div>
      </div>
    </PageStoreContext.Provider>
  );
};

export default SVGToJSONPage;
