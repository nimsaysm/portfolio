function menu() {
    let btnNavLinks = document.querySelector('#nav-links-btn');
    let linksArea = document.querySelector('#links');
    let links = document.querySelectorAll('.link');

    btnNavLinks.addEventListener('click', function() {
        this.classList.toggle('menu-open');

        if (this.classList.contains('menu-open')) {
            linksArea.style.display = 'block';
        } else {
            linksArea.style.display = 'none';
        }
    })

    links.forEach(link => {
        link.addEventListener('click', function() {
            linksArea.style.display = 'none';
        })
    })
}

window.addEventListener('DOMContentLoaded', function() {
    menu();
})