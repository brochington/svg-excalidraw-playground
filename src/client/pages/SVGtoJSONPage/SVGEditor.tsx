import React, { FC, useEffect, useRef, useContext } from 'react';
import * as monaco from 'monaco-editor';
import { PageStoreContext } from './pageStore';

const SVGEditor: FC = () => {
  const pageStore = useContext(PageStoreContext);
  const monacoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!monacoRef.current) return;
    const editor = monaco.editor.create(monacoRef.current, {
      value: `<svg><path d=""></p></svg>`,
      language: 'html',
    });

    editor.onKeyUp(() => {
      const svgString = editor.getValue();

      pageStore.actions.setSVGString(svgString);
    })
  }, [monacoRef]);

  return (
    <div style={{ width: '50vw', height: 'calc(100vh - 64px)' }} ref={monacoRef} />
  );
};

export default SVGEditor;
