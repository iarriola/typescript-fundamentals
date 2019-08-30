import express from "express";

/**
 * Create Express server
 */
const app = express();

app.get('/', function (request, response) {
  return response.send({message: 'Hello World!'});
});

/**
 * Default handler
 */
app.use(function(request, response, next){
  response.status(404);
  response.send({message: 'Not found' });
  return;
});

export default app;
