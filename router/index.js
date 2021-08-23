const express = require('express')
const router = express.Router()
const template = require('../lib/template.js');
const auth = require('../lib/authLib.js');

//route 'main page'
router.get('/', (request, response) => {
  console.log('access : main page');
  if(request.user)
    console.log('/', request.user);
  const title = 'Welcome';
  const description = 'Hello, Node.js';
  const list = template.list(request.list);
  const html = template.HTML(title, list,
    `<h2>${title}</h2>${description}`,
    `<a href="/topic/create">create</a>`,
    auth.makeLoginUI(request, response));
  response.send(html);
})

module.exports = router;
