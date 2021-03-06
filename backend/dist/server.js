"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// Middleware for login
server.post('/login', auth_1.handleAuthentication);
server.use('/pedidos', authz_1.handleAuthorization);
// Use default router
server.use(router);


const port = process.env.PORT || 4000;


server.listen(port);
