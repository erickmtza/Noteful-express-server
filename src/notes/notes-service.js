const NotesService = {
    getAllNotes(knex) {
        return knex.select('*').from('noteful_notes')
    },

    insertNote(knex, newNotes) {
        return knex
            .insert(newNotes)
            .into('noteful_notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

    getById(knex, id) {
        return knex
            .from('noteful_notes')
            .select('*')
            .where('id', id)
            .first()
    },

    deleteNote(knex, id) {
        return knex('noteful_notes')
            .where({ id })
            .delete()
    },

    updateNote(knex, id, newNotesFields) {
        return knex('noteful_notes')
            .where({ id })
            .update(newNotesFields)
    },
  }
  
module.exports = NotesService;