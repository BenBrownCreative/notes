let notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    const newNote = {
        id: uuidv4(),
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
    console.log(e.target.value);
});
document.getElementById('notes').addEventListener('click', function(e) {
    if (e.target.className != 'remove') return;
    const parentId = e.target.parentElement.dataset.id;
    removeNote(parentId);
    renderNotes(notes, filters);
    saveToLocalStorage('notes', notes);
});

// document.querySelector('#filter-by').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// })