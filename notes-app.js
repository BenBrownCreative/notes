const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'habits to work on',
    body: 'exercise, eating healthy'
}, {
    title: 'modify office',
    body: 'buy new monitor'
}];

localStorage.setItem('name', 'ben');

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'clicked';
});

document.querySelector('#name-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
})