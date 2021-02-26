import React, { FC } from 'react';
import Staction from 'staction';

import Button from 'components/Button';
import SVGEditor from './SVGEditor';


const actions = {
  convert: () => {
    console.log('convert!!!');
  }
}

const Subheader: FC = () => {
  return (
    <div className="flex flex-row h-12">
      <h1>SVG to JSON</h1>
      <div>
        <Button>Convert</Button>
      </div>
    </div>
  )
}

const SVGToJSONPage: React.FC = () => {

  return (
    <div className="h-screen">
      <Subheader />
      <div style={{ height: 'calc(100vh - 48px)'}}>
        <SVGEditor />
      </div>
    </div>
  );
};

export default SVGToJSONPage;
