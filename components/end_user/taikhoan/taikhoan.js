
// Lấy các phần tử
const btnTTCN = document.querySelectorAll('.menu button')[0];
const bthSDC = document.querySelectorAll('.menu button')[1];
const bthDH = document.querySelectorAll('.menu button')[2];

const btnTDC = document.getElementById('addAD'); //nút thêm địa chỉ

const formTTCN = document.querySelector('.form-container');
const formSDC = document.querySelector('.sodiachi');

const formACC = document.querySelector('.account-container');
const formTDC = document.querySelector('.themdiachi'); // form thêm địa chỉ

const formOVL = document.querySelector(".overlay");

// const formDH = document.querySelector('.form-container');
const formDH = document.querySelector('.donhang');

// Ẩn sổ địa chỉ ban đầu
// formThongTinCaNhan.style.display='none';
formSDC.style.display = 'none';
formTDC.style.display = "none";
//Ẩn đơn hàng 
formDH.style.display= "none";
// Sự kiện nhấn nút 'Thông tin cá nhân'
btnTTCN.addEventListener('click', function() {
    formTTCN.style.display = 'block'; // Hiện thông tin cá nhân
    formSDC.style.display = 'none';   // Ẩn sổ địa chỉ
    formTDC.style.display = "none";
    formDH.style.display = "none";
});

// Sự kiện nhấn nút 'Sổ địa chỉ'
bthSDC.addEventListener('click', function() {
    formTTCN.style.display = 'none';  // Ẩn thông tin cá nhân
    formSDC.style.display = 'block';  // Hiện sổ địa chỉ
    formTDC.style.display = "none";
    formDH.style.display = "none";
});

 // Hàm để hiển thị form thêm địa chỉ
btnTDC.addEventListener("click", function() {
    formTDC.style.display = "block";
    formOVL.style.display = "block";
});

document.getElementById("huyboAD").addEventListener("click", function() {
    formTDC.style.display = "none";
    formOVL.style.display = "none";
});

// Đơn hàng
bthSDC.addEventListener('click', function() {
    formTTCN.style.display = 'none';  // Ẩn thông tin cá nhân
    formSDC.style.display = 'none';  // Hiện sổ địa chỉ
    formTDC.style.display = "none";
    formDH.style.display = "block";
});

// Đóng popup khi nhấn ra ngoài form
// formOVL.addEventListener("click", function(e) {
//     if (e.target === formOVL) {  // Kiểm tra nếu click là overlay chứ không phải bên trong form
//         formTDC.style.display = "none";
//         formOVL.style.display = "none";
//     }
// });
