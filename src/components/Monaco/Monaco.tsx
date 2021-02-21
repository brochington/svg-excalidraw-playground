import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

const Monaco: React.FC = () => {
  const monacoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!monacoRef.current) return;
    monaco.editor.create(monacoRef.current, {
      value: `<svg><path d=""></p></svg>`,
      language: 'html',
    });
  }, [monacoRef]);

  return (
    <div>
      <div style={{ width: '50vw', height: '100vh' }} ref={monacoRef} />
    </div>
  )
}

export default Monaco;
