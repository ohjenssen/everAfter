function toggleSubMenu(id) {
    var subMenu = document.getElementById('sub-menu-' + id);
    subMenu.style.display = (subMenu.style.display === 'flex') ? 'none' : 'flex';
}
  