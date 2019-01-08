'use strict'

const routes = require('./routes');
const port = 3000;

routes.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
})

