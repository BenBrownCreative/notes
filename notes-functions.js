
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
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title.length > 0 ? note.title : 'UnNamed note';
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