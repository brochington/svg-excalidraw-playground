import React, { FC, useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

const SVGEditor: FC = () => {

  const monacoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!monacoRef.current) return;
    monaco.editor.create(monacoRef.current, {
      value: `<svg><path d=""></p></svg>`,
      language: 'html',
    });
  }, [monacoRef]);

  return (
    <div style={{ width: '50vw', height: 'calc(100vh - 64px)' }} ref={monacoRef} />
  );
};

export default SVGEditor;
