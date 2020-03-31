const notesCtrl = {};

const NotesModel = require('../models/notes');

notesCtrl.getNotes = async (req, res) => {
    const Notas = await NotesModel.find();
    res.json(Notas);
};

notesCtrl.CreateNote = async (req, res) => {
    const { titulo, descripcion, date, autor } = req.body;
    const NewNotas = new NotesModel({
        titulo: titulo,
        descripcion: descripcion,
        date: date,
        autor: autor
    });
    await NewNotas.save();
    res.json({message: 'Note Saved'})
};

notesCtrl.UpdateNote = async (req, res) => {
    const {titulo, descripcion, autor} = req.body;
    await NotesModel.findOneAndUpdate({_id: req.params.id}, {
        titulo: titulo,
        descripcion: descripcion,
        autor: autor
    });
    res.json({message: 'Note Update'})
};

notesCtrl.DeleteNote = async (req, res) => {
    await NotesModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Delete'})
};

notesCtrl.getNote = async (req, res) => {
    const newNota = await NotesModel.findById(req.params.id);
    res.json(newNota);
};

module.exports = notesCtrl;