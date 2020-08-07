// edit notes functions

// query selectors
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const noteDate = document.querySelector('#note-fromTime');
const removeButton = document.querySelector('#remove-note')

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);
if (note === undefined) location.assign('/index.html');

const renderNoteData = function() {
    noteTitle.value = note.title;
    noteBody.value = note.body;
    noteDate.textContent = moment(note.updatedAt).fromNow();
}
renderNoteData();

noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value;
    updateNotesInStorage(note, notes);
    renderNoteData();
});
noteBody.addEventListener('input', function(e) {
    note.body = e.target.value;
    updateNotesInStorage(note, notes);
    renderNoteData();
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
    renderNoteData();
});

