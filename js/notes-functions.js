
// read existing notes from local storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')

    return notesJSON !== null ? JSON.parse(notesJSON) : [];
    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON);
    // }
    // else {
    //     return []
    // }
}

// save data to local storage as JSON
const saveToLocalStorage = function(item, value) {
    localStorage.setItem(item, JSON.stringify(value))
};
    
// generate a note for the dom
const generateNoteDOM = function(note) {
    // create wrapper
    const noteEl = document.createElement('div');
    noteEl.dataset.id = note.id;
    // add template
    const markup = `
        <button class="remove">x</button>
        <a href='/edit.html#${note.id}'>${note.title.length > 0 ? note.title : 'UnNamed note'}<a>
    `;
    
    // add and return html
    noteEl.innerHTML = markup;
    return noteEl;
}

// render application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note);      
        document.querySelector('#notes').appendChild(noteEl);  
    });
}

// remove a note by id
const removeNote = function(id) {
    notes = notes.filter(x => x.id !== id);
}

// update the note timestamp
const updateNotesInStorage = function(note, notes) {
    note.updatedAt = moment().valueOf();
    saveToLocalStorage('notes', notes);
}