//INYECTO EL MODULO DE LOS SERVICIOS
const tutorialServices = require("../services/tutorialesserservice");

exports.getTutoriales = async (req, res, next) => {
  try {
    const tutorial = await tutorialServices.getTutorialesDB();
    res.status(200).json(tutorial);
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};

exports.addTutorial = async (req, res, next) => {
  try {
    const tutorialAdd = await tutorialServices.addTutorialDB(req.body);
    res.status(201).json({ status: "success", message: `${tutorialAdd} tutorial agregado.`, tutorial: req.body });
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};

exports.deleteTutorial = async (req, res, next) => {
  const id = req.params.id;
  try {
    const tutorial = await tutorialServices.getTutorialDB(id);
    const removetutorial = await tutorialServices.deleteTutorialDB(id);
    if (removetutorial === 1)
      res.status(200).json({
        mensaje: "1 tutorial eliminado.",
        tutorial,
      });
    else res.status(404).json("No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};
exports.deleteAll = async (req, res, next) => {
  try {
    const total = await tutorialServices.deleteAllDB();
     if(total>=1) res.status(200).json({
        mensaje: "todos los tutoriales fueron eliminados.",
        total});
     else  res.status(404).json("No se encontraron tutoriales para eliminar");    
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};

exports.modTutorial = async (req, res, next) => {
  const id = req.params.id;
  const tutorial=req.body;
  try {
    const updatetutorial = await tutorialServices.updateTutorialDB(req.body,id);
    if (updatetutorial === 1)
      res.status(200).json({
        mensaje: "1 tutorial modificado.",
        tutorial
       });
    else res.status(404).json("No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};

exports.findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const tutorial = await tutorialServices.getTutorialDB(id);
    if (tutorial !== undefined) res.status(200).json(tutorial);
    else res.status(404).json("No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
};


