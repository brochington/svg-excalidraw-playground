const path = require('path');

const pathInClient = endPath => path.join(process.cwd(), 'src', endPath);

module.exports = {
  types: pathInClient('types'),
  components: pathInClient('components'),
  pages: pathInClient('pages'),
  utils: pathInClient('utils'),
  actions: pathInClient('actions'),
  contexts: pathInClient('contexts'),
  records: pathInClient('records'),
  constants: pathInClient('constants'),
  services: pathInClient('services'),
  styles: pathInClient('styles'),
  hooks: pathInClient('hooks'),
};
