const modelProveedor = require("../models/proveedor.model");

const getProveedor = async (req, res) => {
  try {
    const response = await modelProveedor.findAll();
    res.status(200).json({
      ok: true,
      data: response,
    });
  } catch (error) {
    console.log("error", error);
    res.status(501).json({
      ok: false,
      message: "Error al obtener proveedor",
    });
  }
};

const addProveedor = async (req, res) => {
  if (Object.keys(req.body).length == 0) {
    return res.status(404).json({
      ok: false,
      message: "No se recibieron datos",
    });
  }
  try {
    const response = await modelProveedor.create(req.body);

    res.status(200).json({
      ok: true,
      message: "Proveedor creado con exito",
    });
  } catch (error) {
    res.status(501).json({
      ok: false,
      message: "Error al agregar proveedor",
    });
  }
};

const updateProveedor = async (req, res) => {
  if (Object.keys(req.body).length == 0) {
    return res.status(404).json({
      ok: false,
      message: "No se recibieron datos",
    });
  }
  try {
    const response = await modelProveedor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (response[0] == 0) {
      return res.status(404).json({
        ok: false,
        message: "Proveedor no encontrado",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Proveedor actualizado con exito",
    });
  } catch (error) {
    res.status(501).json({
      ok: false,
      message: "Error al actualizar proveedor",
    });
  }
};

const deleteProveedor = async (req, res) => {
  try {
    const response = await modelProveedor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (response == 0) {
      return res.status(404).json({
        ok: false,
        message: "Proveedor no encontrado",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Proveedor eliminado con exito",
    });
  } catch (error) {
    res.json({
      ok: false,
      message: "Error al eliminar proveedor",
    });
  }
};

module.exports = {
  getProveedor,
  addProveedor,
  updateProveedor,
  deleteProveedor
};
