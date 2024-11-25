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

//tien
 // Mảng chứa thông tin các sách
 let books = [
    { id: "01", name: "Nếu Biết Trăm Năm Là Hữu Hạn", stock: 200, price: "159.000 đ", status: "locked", image: "../../assets/img/book/vanhoctrongnuoc/laohac.webp" },
    { id: "02", name: "Nhà Giả Kim", stock: 150, price: "180.000 đ", status: "selling", image: "../../giaoduccongdan9.webp" },
    { id: "03", name: "Dế Mèn Phiêu Lưu Ký", stock: 100, price: "120.000 đ", status: "selling", image: "../../giaoduccongdan9.webp" },
    { id: "04", name: "Lão Hạc", stock: 250, price: "100.000 đ", status: "selling", image: "../../assets/img/book/vanhoctrongnuoc/laohac.webp" },
    { id: "05", name: "Chiến Tranh và Hòa Bình", stock: 80, price: "220.000 đ", status: "locked", image: "../../giaoduccongdan9.webp" }
  ];

  // Hàm lưu mảng books vào localStorage
  function saveBooksToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
  }
  
  // Hàm lấy mảng books từ localStorage
  function loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
  }
  
  // Hàm hiển thị dữ liệu từ mảng books vào bảng
  function displayBooks() {
    const tableBody = document.getElementById("book-table-body");
    tableBody.innerHTML = ""; // Xóa nội dung cũ nếu có
  
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>
                <img src="${book.image}" alt="Book Cover" style="width: 50px; height: auto;">
                <div class="book-info">${book.name}</div>
            </td>
            <td>${book.stock}</td>
            <td>${book.price}</td>
            <td><span class="status ${book.status === 'selling' ? 'selling' : 'locked'}">${book.status === 'selling' ? 'Đang bán' : 'Bị khóa'}</span></td>
            <td class="btn-action-group">
                <button class="btn-status btn-info">
                    <i class="fa-solid fa-info"></i>
                </button>
                <button class="btn-status btn-primary">
                    <i class="fas fa-edit"></i>
                </button>                              
                <button class="btn-status btn-danger">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
  }
  
  // Gọi hàm loadBooksFromLocalStorage khi trang được tải
  document.addEventListener("DOMContentLoaded", () => {
    loadBooksFromLocalStorage(); // Lấy dữ liệu từ localStorage
    displayBooks(); // Hiển thị sách trong bảng
  });
  
  // Gọi hàm saveBooksToLocalStorage để lưu mảng books vào localStorage
  //saveBooksToLocalStorage();

// test chi tiết hóa đơn

// Lấy các nút và form
const editBtns = document.querySelectorAll('.edit-btn');
const editForm = document.getElementById('editForm');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');

// Hiển thị form khi nhấn "edit-btn"
editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        editForm.classList.remove('hidden');
    });
});

// Ẩn form khi nhấn "Hủy"
cancelBtn.addEventListener('click', () => {
    editForm.classList.add('hidden');
});

// Xử lý nút "Lưu" (tùy chỉnh theo yêu cầu)
saveBtn.addEventListener('click', () => {
    // Thu thập dữ liệu từ form
    const clientID = document.getElementById('clientID').value;
    const clientName = document.getElementById('clientName').value;
    const clientPhone = document.getElementById('clientPhone').value;
    const createDate = document.getElementById('createDate').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const status = document.getElementById('status').value;

    console.log('Dữ liệu chỉnh sửa:', {
        clientID,
        clientName,
        clientPhone,
        createDate,
        totalAmount,
        status,
    });

    // Tắt popup
    editForm.classList.add('hidden');
});


// Lấy các nút và popup
const infoBtns = document.querySelectorAll('.info-btn');
const detailPopup = document.getElementById('detailPopup');
const overlay = document.getElementById('overlay');
const closeDetailBtn = document.getElementById('closeDetailBtn');

// Hiển thị popup và overlay khi nhấn "info-btn"
infoBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Lấy dữ liệu từ dòng hiện tại
        const row = e.target.closest('tr');
        const id = row.children[0].textContent;
        const name = row.children[1].textContent;
        const phone = row.children[2].textContent;
        const date = row.children[3].textContent;
        const total = row.children[4].textContent;
        const status = row.children[5].textContent;

        // Điền dữ liệu vào popup
        document.getElementById('detailID').textContent = id;
        document.getElementById('detailName').textContent = name;
        document.getElementById('detailPhone').textContent = phone;
        document.getElementById('detailDate').textContent = date;
        document.getElementById('detailTotal').textContent = total;
        document.getElementById('detailStatus').textContent = status;

        // Hiển thị overlay và popup
        overlay.classList.remove('hidden');
        detailPopup.classList.remove('hidden');
    });
});

// Ẩn popup và overlay khi nhấn "Đóng"
closeDetailBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    detailPopup.classList.add('hidden');
    
});

// Ẩn popup khi nhấn vào overlay (tùy chọn)
overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    detailPopup.classList.add('hidden');
});

