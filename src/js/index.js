function first() {
    document.getElementById('demo').innerHTML = 'You clicked First Button';
}

First.addEventListener('click', first);

function second() {
    document.getElementById('demo').innerHTML = 'You clicked Second Button';
}

Second.addEventListener('click', second);

function third() {
    document.getElementById('demo').innerHTML = 'You clicked Third Button';
}
Third.addEventListener('click', third);