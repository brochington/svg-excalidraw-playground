import React, { FC, useEffect, useRef, useContext } from 'react';
import * as monaco from 'monaco-editor';
import { PageStoreContext } from './pageStore';

const defaultSVG = `<svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <path d="m72.918 41.668c-2.082 0-3.957 0.41797-5.625 1.043l-4.793-7.918 1.457-3.543h0.625c1.25 0 2.082-0.83203 2.082-2.082s-0.83203-2.082-2.082-2.082h-6.25c-1.25 0-2.082 0.83203-2.082 2.082s0.83203 2.082 2.082 2.082h1.043l-0.83203 2.082h-18.961v-8.332h-10.418v4.168h6.25v5.832l-3.75 7.5c-1.457-0.625-2.9141-0.83203-4.582-0.83203-8.125 0-14.582 6.457-14.582 14.582s6.457 14.582 14.582 14.582 14.582-6.457 14.582-14.582c0-5-2.5-9.375-6.25-11.875l2.5-4.793 13.125 18.957h7.5c1.043 7.082 7.082 12.5 14.375 12.5 8.125 0 14.582-6.457 14.582-14.582 0.003906-8.332-6.4531-14.789-14.578-14.789zm-35.418 14.582c0 5.832-4.582 10.418-10.418 10.418-5.832 0-10.418-4.582-10.418-10.418 0-5.832 4.582-10.418 10.418-10.418 0.83203 0 1.875 0.20703 2.707 0.41797l-4.582 9.168c-0.20703 0.20703-0.20703 0.41406-0.20703 0.83203 0 1.25 0.83203 2.082 2.082 2.082 0.83203 0 1.457-0.41797 1.875-1.25l4.582-9.168c2.293 2.0859 3.9609 5.0039 3.9609 8.3359zm26.25-11.25c-2.707 2.293-4.582 5.418-5.207 9.168h-3.332l5.418-14.375zm2.082 3.543l3.332 5.625h-6.457c0.41797-2.293 1.668-4.168 3.125-5.625zm-14.375 3.332l-10-14.375h15.625zm21.461 14.793c-5 0-9.168-3.543-10.207-8.332l10.207-0.003907c1.25 0 2.082-0.83203 2.082-2.082 0-0.41797-0.20703-0.83203-0.41797-1.043l-5.207-8.75c1.043-0.41797 2.293-0.625 3.543-0.625 5.832 0 10.418 4.582 10.418 10.418-0.003907 5.832-4.5859 10.418-10.418 10.418z"/>
</svg>
`

const gAndCircles = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>

  <g fill="blue" stroke="orange" stroke-width="3">
    <circle cx="20" cy="30" r="14" />
    <circle cx="40" cy="50" r="12" />
  </g>
</svg>`;

const auFlag = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-au" viewBox="0 0 640 480">
  <path id="path617" fill="#006" stroke-width="1.3" d="M0 0h640v480H0z"/>
  <path id="path625" fill="#fff" fill-rule="evenodd" stroke-width="1.3" d="M299.8 392.5l-43.7 3.8 6 43.4L232 408l-30.1 31.7 6-43.4-43.7-3.8 37.7-22.3-24.3-36.5 41 15.5 13.4-41.7 13.5 41.7 41-15.5-24.3 36.5m224.4 62.3L476 416.7l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.7-19 1.7 2.6 18.9-13-13.9-13.2 13.9 2.6-18.9-19-1.6m16.4-291.9L476 134.6l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.8-19 1.6 2.6 18.9-13-13.8-13.2 13.7 2.6-18.8-19-1.6M380.8 265l-10.5-15.8 17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7L407 265l16.4 9.7-19 1.7 2.7 18.9-13.2-13.9-13 13.9 2.5-18.9-19-1.6m216.3-38L570 221l17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7-10.5 15.8 16.3 9.7-19 1.7 2.6 18.8-13-13.8-13.2 13.8 2.6-18.8-19-1.7M542 320l-10.3 6.5 2.9-11.9-9.3-7.8 12.1-1 4.6-11.2 4.7 11.3 12.1.9-9.3 7.8 2.9 11.9"/>
  <path id="path969" fill="#006" stroke-width=".5" d="M0 0h320v240H0z"/>
  <path id="path971" fill="#fff" stroke-width=".5" d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"/>
  <path id="path973" fill="#c8102e" stroke-width=".5" d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"/>
  <path id="path975" fill="#fff" stroke-width=".5" d="M120.5 0v240h80V0zM0 80v80h320V80z"/>
  <path id="path977" fill="#c8102e" stroke-width=".5" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>
</svg>`;

const tempRect = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
<!-- Simple rectangle -->
<rect width="100" height="100" />

<!-- Rounded corner rectangle -->
<rect x="120" width="100" height="100" rx="15" />
</svg>`;

const polyline = `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<!-- Example of a polyline with the default fill -->
<polyline points="0,100 50,25 50,75 100,0" />

<!-- Example of the same polyline shape with stroke and no fill -->
<polyline points="100,100 150,25 150,75 200,0"
          fill="none" stroke="black" />
</svg>`;

const SVGEditor: FC = () => {
  const pageStore = useContext(PageStoreContext);
  const monacoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!monacoRef.current) return;
    const editor = monaco.editor.create(monacoRef.current, {
      // value: auFlag,
      // value: gAndCircles,
      // value: defaultSVG,
      // value: tempRect,
      value: polyline,
      language: 'html',
    });

    // pageStore.actions.setSVGString(tempRect);
    pageStore.actions.setSVGString(polyline);

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
