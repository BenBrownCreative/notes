// edit notes functions

// query selectors
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeNote = document.querySelector('#remove-note')

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const note = notes.find(note => note.id === noteId);
if (note === undefined) location.assign('/index.html');
document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;



noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value;
    saveToLocalStorage('notes', notes);
});
noteBody.addEventListener('input', function(e) {
    note.body = e.target.value;
    saveToLocalStorage('notes', notes);
});

removeNote.addEventListener('click', function() {
    removeNote(note.id);
    saveToLocalStorage('notes', notes);
    location.assign(`/index.html`);
})