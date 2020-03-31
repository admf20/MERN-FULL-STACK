const { Router } = require('express');
const router = Router();

const { getNotes, getNote ,CreateNote, UpdateNote, DeleteNote } = require('../crontrollers/notes.controller');

router.route('/')
            .get(getNotes)
            .post(CreateNote)

router.route('/:id')
            .get(getNote)
            .put(UpdateNote)
            .delete(DeleteNote)            

module.exports = router;