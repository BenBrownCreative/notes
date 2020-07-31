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

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})

// Unix Epoch - Jan 1 1970 00:00:00
// 0 getTime gives us a positive number to compare future vs past


const now = new Date()
const timeStamp = now.getTime();

const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());



// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of the month: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

let date1 = new Date('January 1 2020 12:12:45');
let date2 = new Date('March 13 2012 4:32:26');


console.log(date1.toString())

const dates = [];
dates.push({
    var: date1,
    date: date1.getTime()
},{
    var: date2,
    date: date2.getTime()
})

 dates.sort((a,b) => a.date - b.date)

 console.log(dates[0])