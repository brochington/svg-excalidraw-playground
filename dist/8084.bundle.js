(self.webpackChunksvg_to_excalidraw=self.webpackChunksvg_to_excalidraw||[]).push([[8084],{8084:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['(*', '*)']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')'],\r\n        ['<', '>']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.pascaligo',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '<', close: '>', token: 'delimiter.angle' }\r\n    ],\r\n    keywords: [\r\n        'begin',\r\n        'block',\r\n        'case',\r\n        'const',\r\n        'else',\r\n        'end',\r\n        'fail',\r\n        'for',\r\n        'from',\r\n        'function',\r\n        'if',\r\n        'is',\r\n        'nil',\r\n        'of',\r\n        'remove',\r\n        'return',\r\n        'skip',\r\n        'then',\r\n        'type',\r\n        'var',\r\n        'while',\r\n        'with',\r\n        'option',\r\n        'None',\r\n        'transaction'\r\n    ],\r\n    typeKeywords: [\r\n        'bool',\r\n        'int',\r\n        'list',\r\n        'map',\r\n        'nat',\r\n        'record',\r\n        'string',\r\n        'unit',\r\n        'address',\r\n        'map',\r\n        'mtz',\r\n        'xtz'\r\n    ],\r\n    operators: [\r\n        '=',\r\n        '>',\r\n        '<',\r\n        '<=',\r\n        '>=',\r\n        '<>',\r\n        ':',\r\n        ':=',\r\n        'and',\r\n        'mod',\r\n        'or',\r\n        '+',\r\n        '-',\r\n        '*',\r\n        '/',\r\n        '@',\r\n        '&',\r\n        '^',\r\n        '%'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><:@\\^&|+\\-*\\/\\^%]+/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-zA-Z_][\\w]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [\r\n                /@symbols/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\$[0-9a-fA-F]{1,16}/, 'number.hex'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/'/, 'string', '@string'],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/'/, 'string.invalid'],\r\n            [/\\#\\d+/, 'string']\r\n        ],\r\n        /* */\r\n        comment: [\r\n            [/[^\\(\\*]+/, 'comment'],\r\n            //[/\\(\\*/,    'comment', '@push' ],    // nested comment  not allowed :-(\r\n            [/\\*\\)/, 'comment', '@pop'],\r\n            [/\\(\\*/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\']+/, 'string'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, 'white'],\r\n            [/\\(\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ]\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdmctdG8tZXhjYWxpZHJhdy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGFzY2FsaWdvL3Bhc2NhbGlnby5qcz9jYjA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsbURBQW1EO0FBQzVELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjgwODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnKConLCAnKiknXVxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ10sXHJcbiAgICAgICAgWyc8JywgJz4nXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcucGFzY2FsaWdvJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdiZWdpbicsXHJcbiAgICAgICAgJ2Jsb2NrJyxcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ2NvbnN0JyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgJ2ZhaWwnLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdmcm9tJyxcclxuICAgICAgICAnZnVuY3Rpb24nLFxyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ2lzJyxcclxuICAgICAgICAnbmlsJyxcclxuICAgICAgICAnb2YnLFxyXG4gICAgICAgICdyZW1vdmUnLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICdza2lwJyxcclxuICAgICAgICAndGhlbicsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd2YXInLFxyXG4gICAgICAgICd3aGlsZScsXHJcbiAgICAgICAgJ3dpdGgnLFxyXG4gICAgICAgICdvcHRpb24nLFxyXG4gICAgICAgICdOb25lJyxcclxuICAgICAgICAndHJhbnNhY3Rpb24nXHJcbiAgICBdLFxyXG4gICAgdHlwZUtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Jvb2wnLFxyXG4gICAgICAgICdpbnQnLFxyXG4gICAgICAgICdsaXN0JyxcclxuICAgICAgICAnbWFwJyxcclxuICAgICAgICAnbmF0JyxcclxuICAgICAgICAncmVjb3JkJyxcclxuICAgICAgICAnc3RyaW5nJyxcclxuICAgICAgICAndW5pdCcsXHJcbiAgICAgICAgJ2FkZHJlc3MnLFxyXG4gICAgICAgICdtYXAnLFxyXG4gICAgICAgICdtdHonLFxyXG4gICAgICAgICd4dHonXHJcbiAgICBdLFxyXG4gICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgJz0nLFxyXG4gICAgICAgICc+JyxcclxuICAgICAgICAnPCcsXHJcbiAgICAgICAgJzw9JyxcclxuICAgICAgICAnPj0nLFxyXG4gICAgICAgICc8PicsXHJcbiAgICAgICAgJzonLFxyXG4gICAgICAgICc6PScsXHJcbiAgICAgICAgJ2FuZCcsXHJcbiAgICAgICAgJ21vZCcsXHJcbiAgICAgICAgJ29yJyxcclxuICAgICAgICAnKycsXHJcbiAgICAgICAgJy0nLFxyXG4gICAgICAgICcqJyxcclxuICAgICAgICAnLycsXHJcbiAgICAgICAgJ0AnLFxyXG4gICAgICAgICcmJyxcclxuICAgICAgICAnXicsXHJcbiAgICAgICAgJyUnXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjw6QFxcXiZ8K1xcLSpcXC9cXF4lXSsvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dW1xcd10qLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXCRbMC05YS1mQS1GXXsxLDE2fS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcnXSxcclxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcI1xcZCsvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8qICovXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwoXFwqXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvL1svXFwoXFwqLywgICAgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5lc3RlZCBjb21tZW50ICBub3QgYWxsb3dlZCA6LShcclxuICAgICAgICAgICAgWy9cXCpcXCkvLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8084\n")}}]);