let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    const timestamp = moment().valueOf();
    const newNote = {
        id: uuidv4(),
        createdAt: timestamp,
        updatedAt: timestamp, 
        title: '',
        body: ''
    }
    notes.push(newNote);

    saveToLocalStorage('notes', notes);
    location.assign(`/edit.html#${newNote.id}`);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});
document.getElementById('notes').addEventListener('click', function(e) {
    if (e.target.className != 'remove') return;
    const parentId = e.target.parentElement.dataset.id;
    removeNote(parentId);
    renderNotes(notes, filters);
    saveToLocalStorage('notes', notes);
});

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})
