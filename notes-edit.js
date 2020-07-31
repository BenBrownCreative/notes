// edit notes functions

// query selectors
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeButton = document.querySelector('#remove-note')

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);
if (note === undefined) location.assign('/index.html');

noteTitle.value = note.title;
noteBody.value = note.body;


noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value;
    saveToLocalStorage('notes', notes);
});
noteBody.addEventListener('input', function(e) {
    note.body = e.target.value;
    saveToLocalStorage('notes', notes);
});

removeButton.addEventListener('click', function() {
    removeNote(note.id);
    saveToLocalStorage('notes', notes);
    location.assign(`/index.html`);
})


window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
    }

    note = notes.find(note => note.id === noteId);
    if (note === undefined) location.assign('/index.html');
    noteTitle.value = note.title;
    noteBody.value = note.body;
});

