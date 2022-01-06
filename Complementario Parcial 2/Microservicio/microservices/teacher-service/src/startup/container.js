const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const { TeacherService } = require("../services");

//controladores
const { TeacherService } = require("../controllers");

//rutas
const { TeacherService } = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Teacher } = require("../models");

// repositorios
const { TeacherService } = require("../repositories");

const container = createContainer();

container
  .register({
    //configuracion
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    //servicios
    TeacherService: asClass(TeacherService).singleton(),
  })
  .register({
    //controladores
    TeacherService: asClass( TeacherService.bind(TeacherService)).singleton(),
  })
  .register({
    //rutas
    TeacherService: asFunction(TeacherService).singleton(),
  })
  .register({
    //modelos
    TeacherService: asValue(TeacherService),
  })
  .register({
    // repositorios
    TeacherRepository: asClass(TeacherRepository).singleton(),
  });

module.exports = container;
