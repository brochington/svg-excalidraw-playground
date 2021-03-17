(self.webpackChunksvg_to_excalidraw=self.webpackChunksvg_to_excalidraw||[]).push([[2571],{2571:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9587);\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar EMPTY_ELEMENTS = [\r\n    'area',\r\n    'base',\r\n    'br',\r\n    'col',\r\n    'embed',\r\n    'hr',\r\n    'img',\r\n    'input',\r\n    'keygen',\r\n    'link',\r\n    'menuitem',\r\n    'meta',\r\n    'param',\r\n    'source',\r\n    'track',\r\n    'wbr'\r\n];\r\nvar conf = {\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\r\n    comments: {\r\n        blockComment: ['\x3c!--', '--\x3e']\r\n    },\r\n    brackets: [\r\n        ['\x3c!--', '--\x3e'],\r\n        ['<', '>'],\r\n        ['{', '}'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' }\r\n    ],\r\n    onEnterRules: [\r\n        {\r\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))([_:\\\\w][_:\\\\w-.\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\r\n            afterText: /^<\\/([_:\\w][_:\\w-.\\d]*)\\s*>$/i,\r\n            action: {\r\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.IndentOutdent */ .Mj.IndentAction.IndentOutdent\r\n            }\r\n        },\r\n        {\r\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\r\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.Indent */ .Mj.IndentAction.Indent }\r\n        }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*\x3c!--\\\\s*#region\\\\b.*--\x3e'),\r\n            end: new RegExp('^\\\\s*\x3c!--\\\\s*#endregion\\\\b.*--\x3e')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.html',\r\n    ignoreCase: true,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            [/<!DOCTYPE/, 'metatag', '@doctype'],\r\n            [/\x3c!--/, 'comment', '@comment'],\r\n            [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)(\\s*)(\\/>)/, ['delimiter', 'tag', '', 'delimiter']],\r\n            [/(<)(script)/, ['delimiter', { token: 'tag', next: '@script' }]],\r\n            [/(<)(style)/, ['delimiter', { token: 'tag', next: '@style' }]],\r\n            [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],\r\n            [/(<\\/)((?:[\\w\\-]+:)?[\\w\\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],\r\n            [/</, 'delimiter'],\r\n            [/[^<]+/] // text\r\n        ],\r\n        doctype: [\r\n            [/[^>]+/, 'metatag.content'],\r\n            [/>/, 'metatag', '@pop']\r\n        ],\r\n        comment: [\r\n            [/--\x3e/, 'comment', '@pop'],\r\n            [/[^-]+/, 'comment.content'],\r\n            [/./, 'comment.content']\r\n        ],\r\n        otherTag: [\r\n            [/\\/?>/, 'delimiter', '@pop'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/] // whitespace\r\n        ],\r\n        // -- BEGIN <script> tags handling\r\n        // After <script\r\n        script: [\r\n            [/type/, 'attribute.name', '@scriptAfterType'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@scriptEmbedded',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/(<\\/)(script\\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]\r\n        ],\r\n        // After <script ... type\r\n        scriptAfterType: [\r\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@scriptEmbedded',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <script ... type =\r\n        scriptAfterTypeEquals: [\r\n            [\r\n                /\"([^\"]*)\"/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@scriptWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                /'([^']*)'/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@scriptWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@scriptEmbedded',\r\n                    nextEmbedded: 'text/javascript'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <script ... type = $S2\r\n        scriptWithCustomType: [\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@scriptEmbedded.$S2',\r\n                    nextEmbedded: '$S2'\r\n                }\r\n            ],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        scriptEmbedded: [\r\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\r\n            [/[^<]+/, '']\r\n        ],\r\n        // -- END <script> tags handling\r\n        // -- BEGIN <style> tags handling\r\n        // After <style\r\n        style: [\r\n            [/type/, 'attribute.name', '@styleAfterType'],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@styleEmbedded',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/(<\\/)(style\\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]\r\n        ],\r\n        // After <style ... type\r\n        styleAfterType: [\r\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@styleEmbedded',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <style ... type =\r\n        styleAfterTypeEquals: [\r\n            [\r\n                /\"([^\"]*)\"/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@styleWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                /'([^']*)'/,\r\n                {\r\n                    token: 'attribute.value',\r\n                    switchTo: '@styleWithCustomType.$1'\r\n                }\r\n            ],\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@styleEmbedded',\r\n                    nextEmbedded: 'text/css'\r\n                }\r\n            ],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        // After <style ... type = $S2\r\n        styleWithCustomType: [\r\n            [\r\n                />/,\r\n                {\r\n                    token: 'delimiter',\r\n                    next: '@styleEmbedded.$S2',\r\n                    nextEmbedded: '$S2'\r\n                }\r\n            ],\r\n            [/\"([^\"]*)\"/, 'attribute.value'],\r\n            [/'([^']*)'/, 'attribute.value'],\r\n            [/[\\w\\-]+/, 'attribute.name'],\r\n            [/=/, 'delimiter'],\r\n            [/[ \\t\\r\\n]+/],\r\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\r\n        ],\r\n        styleEmbedded: [\r\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\r\n            [/[^<]+/, '']\r\n        ]\r\n        // -- END <style> tags handling\r\n    }\r\n};\r\n// TESTED WITH:\r\n// <!DOCTYPE html>\r\n// <html>\r\n// <head>\r\n//   <title>Monarch Workbench</title>\r\n//   <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n//   \x3c!----\r\n//   -- -- -- a comment -- -- --\r\n//   ----\x3e\r\n//   <style bah=\"bah\">\r\n//     body { font-family: Consolas; } /* nice */\r\n//   </style>\r\n// </head\r\n// >\r\n// a = \"asd\"\r\n// <body>\r\n//   <br/>\r\n//   <div\r\n//   class\r\n//   =\r\n//   \"test\"\r\n//   >\r\n//     <script>\r\n//       function() {\r\n//         alert(\"hi </ script>\"); // javascript\r\n//       };\r\n//     <\/script>\r\n//     <script\r\n// \tbah=\"asdfg\"\r\n// \ttype=\"text/css\"\r\n// \t>\r\n//   .bar { text-decoration: underline; }\r\n//     <\/script>\r\n//   </div>\r\n// </body>\r\n// </html>\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdmctdG8tZXhjYWxpZHJhdy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvaHRtbC9odG1sLmpzP2I2OTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnRUFBZ0UsSUFBSSxNQUFNO0FBQzFFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUlBQW9DO0FBQ2xFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSx1SEFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0NBQWdDO0FBQzNFLDBDQUEwQywrQkFBK0I7QUFDekUseURBQXlELGtDQUFrQztBQUMzRiwyREFBMkQsa0NBQWtDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1DQUFtQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsbUNBQW1DO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBLDBCQUEwQix3REFBd0Q7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUIsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyNTcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcclxudmFyIEVNUFRZX0VMRU1FTlRTID0gW1xyXG4gICAgJ2FyZWEnLFxyXG4gICAgJ2Jhc2UnLFxyXG4gICAgJ2JyJyxcclxuICAgICdjb2wnLFxyXG4gICAgJ2VtYmVkJyxcclxuICAgICdocicsXHJcbiAgICAnaW1nJyxcclxuICAgICdpbnB1dCcsXHJcbiAgICAna2V5Z2VuJyxcclxuICAgICdsaW5rJyxcclxuICAgICdtZW51aXRlbScsXHJcbiAgICAnbWV0YScsXHJcbiAgICAncGFyYW0nLFxyXG4gICAgJ3NvdXJjZScsXHJcbiAgICAndHJhY2snLFxyXG4gICAgJ3dicidcclxuXTtcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwkXFxeXFwmXFwqXFwoXFwpXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXHNdKykvZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsnPCEtLScsICctLT4nXSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH1cclxuICAgIF0sXHJcbiAgICBvbkVudGVyUnVsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFtfOlxcXFx3XVtfOlxcXFx3LS5cXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXHJcbiAgICAgICAgICAgIGFmdGVyVGV4dDogL148XFwvKFtfOlxcd11bXzpcXHctLlxcZF0qKVxccyo+JC9pLFxyXG4gICAgICAgICAgICBhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnRPdXRkZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmVmb3JlVGV4dDogbmV3IFJlZ0V4cChcIjwoPyEoPzpcIiArIEVNUFRZX0VMRU1FTlRTLmpvaW4oJ3wnKSArIFwiKSkoXFxcXHdbXFxcXHdcXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXHJcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyo8IS0tXFxcXHMqI3JlZ2lvblxcXFxiLiotLT4nKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiNlbmRyZWdpb25cXFxcYi4qLS0+JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmh0bWwnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbLzwhRE9DVFlQRS8sICdtZXRhdGFnJywgJ0Bkb2N0eXBlJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykoXFxzKikoXFwvPikvLCBbJ2RlbGltaXRlcicsICd0YWcnLCAnJywgJ2RlbGltaXRlciddXSxcclxuICAgICAgICAgICAgWy8oPCkoc2NyaXB0KS8sIFsnZGVsaW1pdGVyJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKHN0eWxlKS8sIFsnZGVsaW1pdGVyJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAc3R5bGUnIH1dXSxcclxuICAgICAgICAgICAgWy8oPCkoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKS8sIFsnZGVsaW1pdGVyJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKS8sIFsnZGVsaW1pdGVyJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcclxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1tePF0rL10gLy8gdGV4dFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZG9jdHlwZTogW1xyXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudCddLFxyXG4gICAgICAgICAgICBbLz4vLCAnbWV0YXRhZycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW14tXSsvLCAnY29tbWVudC5jb250ZW50J10sXHJcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3RoZXJUYWc6IFtcclxuICAgICAgICAgICAgWy9cXC8/Pi8sICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10gLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcclxuICAgICAgICBzY3JpcHQ6IFtcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzY3JpcHRBZnRlclR5cGUnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoc2NyaXB0XFxzKikoPikvLCBbJ2RlbGltaXRlcicsICd0YWcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxyXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZTogW1xyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzY3JpcHRBZnRlclR5cGVFcXVhbHMnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLz4vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XHJcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9cIihbXlwiXSopXCIvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLycoW14nXSopJy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvPi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc2NyaXB0V2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLz4vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLiRTMicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzY3JpcHRFbWJlZGRlZDogW1xyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHQvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1tePF0rLywgJyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyAtLSBFTkQgPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xyXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzdHlsZT4gdGFncyBoYW5kbGluZ1xyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZVxyXG4gICAgICAgIHN0eWxlOiBbXHJcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc3R5bGVBZnRlclR5cGUnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHN0eWxlXFxzKikoPikvLCBbJ2RlbGltaXRlcicsICd0YWcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlXHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLz4vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID1cclxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLycoW14nXSopJy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9ICRTMlxyXG4gICAgICAgIHN0eWxlV2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLz4vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQuJFMyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3R5bGVFbWJlZGRlZDogW1xyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gLS0gRU5EIDxzdHlsZT4gdGFncyBoYW5kbGluZ1xyXG4gICAgfVxyXG59O1xyXG4vLyBURVNURUQgV0lUSDpcclxuLy8gPCFET0NUWVBFIGh0bWw+XHJcbi8vIDxodG1sPlxyXG4vLyA8aGVhZD5cclxuLy8gICA8dGl0bGU+TW9uYXJjaCBXb3JrYmVuY2g8L3RpdGxlPlxyXG4vLyAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbi8vICAgPCEtLS0tXHJcbi8vICAgLS0gLS0gLS0gYSBjb21tZW50IC0tIC0tIC0tXHJcbi8vICAgLS0tLT5cclxuLy8gICA8c3R5bGUgYmFoPVwiYmFoXCI+XHJcbi8vICAgICBib2R5IHsgZm9udC1mYW1pbHk6IENvbnNvbGFzOyB9IC8qIG5pY2UgKi9cclxuLy8gICA8L3N0eWxlPlxyXG4vLyA8L2hlYWRcclxuLy8gPlxyXG4vLyBhID0gXCJhc2RcIlxyXG4vLyA8Ym9keT5cclxuLy8gICA8YnIvPlxyXG4vLyAgIDxkaXZcclxuLy8gICBjbGFzc1xyXG4vLyAgID1cclxuLy8gICBcInRlc3RcIlxyXG4vLyAgID5cclxuLy8gICAgIDxzY3JpcHQ+XHJcbi8vICAgICAgIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIGFsZXJ0KFwiaGkgPC8gc2NyaXB0PlwiKTsgLy8gamF2YXNjcmlwdFxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgPC9zY3JpcHQ+XHJcbi8vICAgICA8c2NyaXB0XHJcbi8vIFx0YmFoPVwiYXNkZmdcIlxyXG4vLyBcdHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbi8vIFx0PlxyXG4vLyAgIC5iYXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG4vLyAgICAgPC9zY3JpcHQ+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDwvYm9keT5cclxuLy8gPC9odG1sPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2571\n")}}]);