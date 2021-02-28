# svg-excalidraw-playground

SVG Excalidraw Playground


#### Basic usage

```bash
$ npm install
$ npm run dev
# navigate to localhost:3010/svg-to-json in your browser 
```


## Pages

### `/svg-to-json`

easily see the converted Excalidraw JSON from SVG HTML.

You'll probably want to `npm link` the `svg-to-excalidraw` package into this repo:

```bash
# In svg-to-excalidraw directory
$ npm link

# In the directory of this project
$ npm link @excalidraw/svg-to-excalidraw # Or something like this. 
```