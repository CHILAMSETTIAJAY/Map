const items2 = document.getElementById('items2');
const menuicon = document.getElementById('menuicon');

menuicon.addEventListener('click', () => {
    if (items2.style.display === 'flex') {
        items2.style.display = 'none';
    } else {
        items2.style.display = 'flex';
    }
});
