(self.webpackChunksvg_ex_playground=self.webpackChunksvg_ex_playground||[]).push([[1147],{1147:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\$\\-\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        blockComment: ['###', '###'],\r\n        lineComment: '#'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*#region\\\\b'),\r\n            end: new RegExp('^\\\\s*#endregion\\\\b')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    ignoreCase: true,\r\n    tokenPostfix: '.coffee',\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    regEx: /\\/(?!\\/\\/)(?:[^\\/\\\\]|\\\\.)*\\/[igm]*/,\r\n    keywords: [\r\n        'and',\r\n        'or',\r\n        'is',\r\n        'isnt',\r\n        'not',\r\n        'on',\r\n        'yes',\r\n        '@',\r\n        'no',\r\n        'off',\r\n        'true',\r\n        'false',\r\n        'null',\r\n        'this',\r\n        'new',\r\n        'delete',\r\n        'typeof',\r\n        'in',\r\n        'instanceof',\r\n        'return',\r\n        'throw',\r\n        'break',\r\n        'continue',\r\n        'debugger',\r\n        'if',\r\n        'else',\r\n        'switch',\r\n        'for',\r\n        'while',\r\n        'do',\r\n        'try',\r\n        'catch',\r\n        'finally',\r\n        'class',\r\n        'extends',\r\n        'super',\r\n        'undefined',\r\n        'then',\r\n        'unless',\r\n        'until',\r\n        'loop',\r\n        'of',\r\n        'by',\r\n        'when'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?&%|+\\-*\\/\\^\\.,\\:]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [/\\@[a-zA-Z_]\\w*/, 'variable.predefined'],\r\n            [\r\n                /[a-zA-Z_]\\w*/,\r\n                {\r\n                    cases: {\r\n                        this: 'variable.predefined',\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            // Comments\r\n            [/###/, 'comment', '@comment'],\r\n            [/#.*$/, 'comment'],\r\n            // regular expressions\r\n            ['///', { token: 'regexp', next: '@hereregexp' }],\r\n            [/^(\\s*)(@regEx)/, ['', 'regexp']],\r\n            [/(\\()(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\,)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\=)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\:)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\[)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\!)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\&)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\|)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\?)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\{)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\;)(\\s*)(@regEx)/, ['', '', 'regexp']],\r\n            // delimiters\r\n            [\r\n                /}/,\r\n                {\r\n                    cases: {\r\n                        '$S2==interpolatedstring': {\r\n                            token: 'string',\r\n                            next: '@pop'\r\n                        },\r\n                        '@default': '@brackets'\r\n                    }\r\n                }\r\n            ],\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, 'delimiter'],\r\n            // numbers\r\n            [/\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\r\n            [/0[0-7]+(?!\\d)/, 'number.octal'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[,.]/, 'delimiter'],\r\n            // strings:\r\n            [/\"\"\"/, 'string', '@herestring.\"\"\"'],\r\n            [/'''/, 'string', \"@herestring.'''\"],\r\n            [\r\n                /\"/,\r\n                {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: '@string.\"' }\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /'/,\r\n                {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: \"@string.'\" }\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        string: [\r\n            [/[^\"'\\#\\\\]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [\r\n                /#{/,\r\n                {\r\n                    cases: {\r\n                        '$S2==\"': {\r\n                            token: 'string',\r\n                            next: 'root.interpolatedstring'\r\n                        },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /[\"']/,\r\n                {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [/#/, 'string']\r\n        ],\r\n        herestring: [\r\n            [\r\n                /(\"\"\"|''')/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [/[^#\\\\'\"]+/, 'string'],\r\n            [/['\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\r\n            [/#/, 'string']\r\n        ],\r\n        comment: [\r\n            [/[^#]+/, 'comment'],\r\n            [/###/, 'comment', '@pop'],\r\n            [/#/, 'comment']\r\n        ],\r\n        hereregexp: [\r\n            [/[^\\\\\\/#]+/, 'regexp'],\r\n            [/\\\\./, 'regexp'],\r\n            [/#.*$/, 'comment'],\r\n            ['///[igm]*', { token: 'regexp', next: '@pop' }],\r\n            [/\\//, 'regexp']\r\n        ]\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdmctZXgtcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvY29mZmVlL2NvZmZlZS5qcz9kOTk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFFQUFxRSxJQUFJLE1BQU07QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsbURBQW1EO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQXVDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLHlEQUF5RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMTQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcIyVcXF5cXCZcXCpcXChcXClcXD1cXCRcXC1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnIyMjJywgJyMjIyddLFxyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojZW5kcmVnaW9uXFxcXGInKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNvZmZlZScsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxyXG4gICAgXSxcclxuICAgIHJlZ0V4OiAvXFwvKD8hXFwvXFwvKSg/OlteXFwvXFxcXF18XFxcXC4pKlxcL1tpZ21dKi8sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdhbmQnLFxyXG4gICAgICAgICdvcicsXHJcbiAgICAgICAgJ2lzJyxcclxuICAgICAgICAnaXNudCcsXHJcbiAgICAgICAgJ25vdCcsXHJcbiAgICAgICAgJ29uJyxcclxuICAgICAgICAneWVzJyxcclxuICAgICAgICAnQCcsXHJcbiAgICAgICAgJ25vJyxcclxuICAgICAgICAnb2ZmJyxcclxuICAgICAgICAndHJ1ZScsXHJcbiAgICAgICAgJ2ZhbHNlJyxcclxuICAgICAgICAnbnVsbCcsXHJcbiAgICAgICAgJ3RoaXMnLFxyXG4gICAgICAgICduZXcnLFxyXG4gICAgICAgICdkZWxldGUnLFxyXG4gICAgICAgICd0eXBlb2YnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICd0aHJvdycsXHJcbiAgICAgICAgJ2JyZWFrJyxcclxuICAgICAgICAnY29udGludWUnLFxyXG4gICAgICAgICdkZWJ1Z2dlcicsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ3N3aXRjaCcsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ3doaWxlJyxcclxuICAgICAgICAnZG8nLFxyXG4gICAgICAgICd0cnknLFxyXG4gICAgICAgICdjYXRjaCcsXHJcbiAgICAgICAgJ2ZpbmFsbHknLFxyXG4gICAgICAgICdjbGFzcycsXHJcbiAgICAgICAgJ2V4dGVuZHMnLFxyXG4gICAgICAgICdzdXBlcicsXHJcbiAgICAgICAgJ3VuZGVmaW5lZCcsXHJcbiAgICAgICAgJ3RoZW4nLFxyXG4gICAgICAgICd1bmxlc3MnLFxyXG4gICAgICAgICd1bnRpbCcsXHJcbiAgICAgICAgJ2xvb3AnLFxyXG4gICAgICAgICdvZicsXHJcbiAgICAgICAgJ2J5JyxcclxuICAgICAgICAnd2hlbidcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyYlfCtcXC0qXFwvXFxeXFwuLFxcOl0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1xcQFthLXpBLVpfXVxcdyovLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpczogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgLy8gQ29tbWVudHNcclxuICAgICAgICAgICAgWy8jIyMvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIFsnLy8vJywgeyB0b2tlbjogJ3JlZ2V4cCcsIG5leHQ6ICdAaGVyZXJlZ2V4cCcgfV0sXHJcbiAgICAgICAgICAgIFsvXihcXHMqKShAcmVnRXgpLywgWycnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXCgpKFxccyopKEByZWdFeCkvLCBbJ0BicmFja2V0cycsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXCwpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXD0pKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXDopKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXFspKFxccyopKEByZWdFeCkvLCBbJ0BicmFja2V0cycsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXCEpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXCYpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXHwpKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXD8pKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXHspKFxccyopKEByZWdFeCkvLCBbJ0BicmFja2V0cycsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICBbLyhcXDspKFxccyopKEByZWdFeCkvLCBbJycsICcnLCAncmVnZXhwJ11dLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC99LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1pbnRlcnBvbGF0ZWRzdHJpbmcnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ0BicmFja2V0cydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkK1tlRV0oW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXGQrXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMFswLTddKyg/IVxcZCkvLCAnbnVtYmVyLm9jdGFsJ10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xyXG4gICAgICAgICAgICBbL1ssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3M6XHJcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAaGVyZXN0cmluZy5cIlwiXCInXSxcclxuICAgICAgICAgICAgWy8nJycvLCAnc3RyaW5nJywgXCJAaGVyZXN0cmluZy4nJydcIl0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9cIi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvJy8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6IFwiQHN0cmluZy4nXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cIidcXCNcXFxcXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1xcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8jey8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09XCInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvW1wiJ10vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBoZXJlc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8oXCJcIlwifCcnJykvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bXiNcXFxcJ1wiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvWydcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvI3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14jXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyMjIy8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8jLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXJlZ2V4cDogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFxcLyNdKy8sICdyZWdleHAnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdyZWdleHAnXSxcclxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWycvLy9baWdtXSonLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1xcLy8sICdyZWdleHAnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1147\n")}}]);