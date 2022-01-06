class HomeService {
  index() {
    return {
      message: "Bienvenido al APIREST de Tareas de la FACCI",
      curso: "Sexto Nivel A",
      autores: [
        { nombre: "Johan Intriago" },
      ],
      docenteTutor: "Ing. John Cevallos Macías, Mg.",
    };
  }
}

module.exports = HomeService;
