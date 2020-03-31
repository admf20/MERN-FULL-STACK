const { Schema, model } = require('mongoose');

const NotaSchema = new Schema({
    titulo: String,
        descripcion: { type: String, required: true},
        autor: { type: String },
        date: Date
}, {
    timestamps: true
});

module.exports = model('Note', NotaSchema); 
