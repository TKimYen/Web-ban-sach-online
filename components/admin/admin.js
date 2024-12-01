//Xuan Mai

document.addEventListener('DOMContentLoaded', function () {
    
    const links = document.querySelectorAll('.taskbar a');
    const sections = document.querySelectorAll('.content');

    // ẩn, hiện section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden'); 
        });
        document.getElementById(sectionId).classList.remove('hidden'); 
    }

    // click
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page'); 
            showSection(page); 

            links.forEach(link => link.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    showSection('products');
});

function showDetailForm() {
    document.getElementById("formDetailNhanVien").style.display = "flex";
}

function closeDetailForm() {
    document.getElementById("formDetailNhanVien").style.display = "none";
}

function showThemForm() {
    document.getElementById("formThemNhanVien").style.display = "flex";
}

function closeThemForm() {
    document.getElementById("formThemNhanVien").style.display = "none";
}

function showSuaForm() {
    document.getElementById("formSuaNhanVien").style.display = "flex";
}

function closeSuaForm() {
    document.getElementById("formSuaNhanVien").style.display = "none";
}

function showOrderModal(){
    document.getElementById("formOrderModal").style.display = "flex";
}

function closeOrderModal(){
    document.getElementById("formOrderModal").style.display = "none";
}

function showEditOrderModal(){
    document.getElementById("formEditOrderModal").style.display = "flex";
}

function closeEditOrderModal(){
    document.getElementById("formEditOrderModal").style.display = "none";
}

function showAddOrderModal(){
    document.getElementById("formAddOrderModal").style.display = "flex";
}

function closeAddOrderModal(){
    document.getElementById("formAddOrderModal").style.display = "none";
}

function updateNhanVien(){
    closeSuaForm();
}

document.getElementById("suaTrangThai").addEventListener("change", function() {
    const statusText = document.getElementById("suaTrangThaiLabel");
    if (this.checked) {
        statusText.textContent = "Đang hoạt động";
    } else {
        statusText.textContent = "Bị ẩn";
    }
});

