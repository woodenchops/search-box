const form = document.querySelector('form');

const searchBox = form.querySelector('input');

const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

searchBox.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const liItems = ul.getElementsByTagName('li');
    Array.from(liItems).forEach((item) => {
        const title = item.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

