const clienteModel = require("../models/cliente.model");

const GetCliente = async (req, res) => {
  try {
    const response = await clienteModel.findAll({
      attributes: ["id", "name"], //obtiene solo los campos que se desean
      where: {
        status: 1,
      },
    });
    res.status(200).json({
      ok: true,
      message: "Clientes obtenidos correctamente",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

const GetClienteById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await clienteModel.findByPk(id);
    if (!response)
      return res
        .status(404)
        .json({ ok: false, message: "Cliente no encontrado" });
    res
      .status(200)
      .json({ ok: true, message: "Cliente  encontrado", data: response });
  } catch (error) {
    res.status(501).json({
      ok: false,
      message: error.message,
    });
  }
};

const createCliente = async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ ok: false, message: "Falta de datos" });
  }
  try {
    const response = await clienteModel.create(data);
    res.status(200).json({
      ok: true,
      message: "Cliente creado correctamente",
      data: response,
    });
  } catch (error) {
    res.status(501).json({
      ok: false,
      message: error.message,
    });
  }
};

const updateCliente = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (!data) {
    return res.status(400).json({ ok: false, message: "Falta de datos" });
  }
  try {
    const response = await clienteModel.update(data, {
      where: { id: id },
    });
    if (!response)
      return res
        .status(404)
        .json({ ok: false, message: "Cliente no encontrado" });
    res.status(200).json({
      ok: true,
      message: "Cliente actualizado correctamente",
      data: response,
    });
  } catch (error) {
    res.status(501).json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = {
  GetCliente,
  GetClienteById,
  createCliente,
  updateCliente,
};
