"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/db/server");
// instancia una clase y llamando a su funcion run__start
const objServer = new server_1.Server;
objServer.run__start();
