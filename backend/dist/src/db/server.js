"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
//defnicion de clase 
class Server {
    // contructor para llamar  a todas las funciones
    constructor() {
        this.port = 3001;
        this.app = express_1.default();
        this.settings__cors();
        this.settings__json();
        this.settings__routers();
        this.connect__mongodb();
    }
    //configuring the function  json
    //configurando el json (permitir datos)
    settings__json() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    // config routers , express usa esta ruta
    settings__routers() {
        this.app.get("/", (req, res) => {
            res.json({
                ok: true,
                message: "the server is active"
            });
        });
    }
    // agregar datos (autorizacion al frontend)
    settings__cors() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    ;
    //conection mongodb (resive su host como parametro, retorna una promesa)
    connect__mongodb() {
        mongoose_1.default.connect("mongodb://localhost:27017", {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "viviendas"
        }).then(() => {
            console.log("conection mongodb");
        })
            .catch((error) => {
            console.log("error", error);
        });
    }
    // corriendo el servidor (resive dos parametros el puerto y la funcion anonima)
    run__start() {
        this.app.listen(this.port, () => {
            console.log("server running successfully in port", this.port);
        });
    }
}
exports.Server = Server;
