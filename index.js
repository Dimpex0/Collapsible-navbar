function toggle() {
    const toggleBtn = document.getElementsByClassName('toggle')[0];
    const list = document.getElementsByClassName('nav-list')[0];
    const icon = document.getElementsByClassName('nav-icon')[0];

    toggleBtn.classList.toggle('closeBtn');
    list.classList.toggle('open');
    if (icon.style.display === 'none') {
        icon.style.display = 'block';
    } else {
        icon.style.display = 'none';
    }
}