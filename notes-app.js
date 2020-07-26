const notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })

    saveToLocalStorage('notes', notes);
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});

// document.querySelector('#filter-by').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// })