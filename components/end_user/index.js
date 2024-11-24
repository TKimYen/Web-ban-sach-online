const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const forgotPasswordLink = document.querySelector('.forgot-password');
const forgotPasswordContainer = document.querySelector('.forgot-password-container');
const formWrapper = document.querySelector('.form-wrapper');
const backLink = document.querySelector('.back-link');

//xử lý quên mật khẩu
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); //chặn load lại trang
    formWrapper.classList.add('hidden'); //ẩn đăng kí. đăng nhập
    forgotPasswordContainer.classList.remove('hidden'); //hiển thị qmk
});

//xử lý quay lại
backLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    forgotPasswordContainer.classList.add('hidden'); //ẩn qmk
    formWrapper.classList.remove('hidden'); //hiện đkđn
});

//xl chuyển đkđn
registerTab.addEventListener('click', () => {
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
    loginForm.innerHTML = `
        <label for="name">Họ và tên</label>
        <input type="text" id="name" placeholder="Nhập họ và tên">
        
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Nhập email">
        
        <label for="password">Mật khẩu</label>
        <input type="password" id="password" placeholder="Nhập mật khẩu">
        
        <button type="submit" class="form-button">Đăng ký</button>
    `;
});

loginTab.addEventListener('click', () => {
    registerTab.classList.remove('active');
    loginTab.classList.add('active');
    loginForm.innerHTML = `
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Nhập email">
        
        <label for="password">Mật khẩu</label>
        <input type="password" id="password" placeholder="Nhập mật khẩu">
        
        <div class="form-options">
            <div>
                <label for="remember-me">Ghi nhớ mật khẩu</label><input type="checkbox" id="remember-me">
            </div>
            <a href="#" class="forgot-password">Quên mật khẩu?</a>
        </div>
        
        <button type="submit" class="form-button">Đăng nhập</button>
    `;
});



/* Start: Yen*/

/* Start: modal show address*/

let addresses = [ 
    {
        idAddress: 1,
        userName: "Vân Anh",
        userAddress: "04 Đ. Tôn Đức Thắng, Phường Bến Nghé , Quận 1, Thành phố Hồ Chí Minh",
        phoneNumber: "0102030405"
    },
    {
        idAddress: 2,
        userName: "Vân Anh",
        userAddress: "105 Đ. Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh",
        phoneNumber: "0102030405"
    },
    {
        idAddress: 3,
        userName: "Vân Anh",
        userAddress: "273 Đ. An Dương Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh",
        phoneNumber: "0102030405"
    }
  ];
const changeAddress = document.getElementById('change-address');
const confirmAddress = document.getElementById('confirm-address');
const overlayShippingAddress = document.getElementById('shipping-address-overlay');
changeAddress.addEventListener('click', function(){
  overlayShippingAddress.style.display = 'flex';
});

confirmAddress.addEventListener('click', function(){
  overlayShippingAddress.style.display = 'none';
});

/// Hàm tạo một phần tử địa chỉ
function createAddressItem(address) {
  const li = document.createElement('li');
  li.classList.add('address-item');
  li.innerHTML = `
      <input type="radio" name="address-option" value="${address.userAddress}">
      <div class="address-item-choice">
        <div class="address-item-info">
        <p><span class="username">${address.userName}</span> (${address.phoneNumber})</p>
        <p>${address.userAddress}</p>
        </div>
        <div class="address-item-btns">
          <button class="edit-address-btn" id ="edit-address-btn">Sửa</button>
          <button class="delete-address-btn" id ="delete-address-btn">Xóa</button>
        </div>
      </div>
  `;
  return li;
}

// Hàm hiển thị danh sách địa chỉ
function displayAddresses() {
  const addressList = document.getElementById('address-list');
  const ul = addressList.querySelector('ul');
  ul.innerHTML = ''; // Xóa danh sách cũ trước khi hiển thị mới
  addresses.forEach(address => {
    const li = createAddressItem(address);
    ul.appendChild(li);
  });
}

// Gọi hàm hiển thị khi trang load xong
displayAddresses();
/* End: modal show address*/

/* Start: modal add address*/
const addAddress = document.getElementById('add-address');
const confirmAddAddress = document.getElementById('confirm-add-address');
const cancelAddAddress = document.getElementById('cancel-add-address');
const overlayAddAddress = document.getElementById('add-address-overlay');
addAddress.addEventListener('click', function(){
  overlayAddAddress.style.display = 'flex';
  overlayShippingAddress.style.display = 'none';
});

confirmAddAddress.addEventListener('click', function(){
  overlayAddAddress.style.display = 'none';
  overlayShippingAddress.style.display = 'flex';
});

  cancelAddAddress.addEventListener('click', function(){
  overlayAddAddress.style.display = 'none';
  overlayShippingAddress.style.display = 'flex';
});
/* End: modal add address*/
/* Start: modal edit address*/
const editAddress = document.querySelector('.edit-address-btn');
const saveEditAddress = document.getElementById('save-edit-address');
const cancelEditAddress = document.getElementById('cancel-edit-address');
const overlayEditAddress = document.getElementById('edit-address-overlay');

editAddress.addEventListener('click', function(){
  overlayEditAddress.style.display = 'flex';
  overlayShippingAddress.style.display = 'none';
});

saveEditAddress.addEventListener('click', function(){
  overlayEditAddress.style.display = 'none';
  overlayShippingAddress.style.display = 'flex';
});

cancelEditAddress.addEventListener('click', function(){
  overlayEditAddress.style.display = 'none';
  overlayShippingAddress.style.display = 'flex';
});
/* End: modal edit address*/
/* End: Yen*/


// Dynamic Data Rendering - Xuân Mai

const products = [
  {
    img : '/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp',
    name : 'Frieren - Pháp sư tiễn táng',
    price : '119.000đ'
  },
  {
    img : '/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp',
    name : 'Frieren - Pháp sư tiễn táng',
    price : '119.000đ'
  },
  {
    img : '/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp',
    name : 'Frieren - Pháp sư tiễn táng',
    price : '119.000đ'
  },
  {
    img : '/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp',
    name : 'Frieren - Pháp sư tiễn táng',
    price : '119.000đ'
  }

];

document.addEventListener('DOMContentLoaded', () => {
  const productList = document.querySelector('.product_list');
  const html = products.map(product => {
    return `
      <div class="product-items">
        <img src="${product.img}">
        <p>${product.name}</p>
        <span class="price">${product.price}</span>
      </div>
    `;
  }).join('');
  productList.innerHTML = html;
  
});



// Xuân Mai