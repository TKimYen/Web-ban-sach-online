const products = [
  {
    id: 1,
    status: 1,
    name: "Bài tập toán 1",
    img: "/assets/img/book/giaokhoagiaotrinh/baitaptoan1.webp", 
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    isBestSeller: true,
    desc: "",
  },
  {
    id: 2,
    status: 1,
    name: "Bộ đề kiểm tra đánh gia năng lực học sinh lớp 1",
    img: "/assets/img/book/giaokhoagiaotrinh/bodekiemtradanhgianangluchsl1.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    isBestSeller: true,
    desc: "",
  },
  {
    id: 3,
    status: 1,
    name: "Củng cố ôn luyện hóa học",
    img: "/assets/img/book/giaokhoagiaotrinh/cungcoonluyenhoahoc.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    isBestSeller: true,
    desc: "",
  },
  {
    id: 4,
    status: 1,
    name: "Giáo dục công dân 9",
    img: "/assets/img/book/giaokhoagiaotrinh/giaoduccongdan9.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 5,
    status: 1,
    name: "Giáo dục thể chất 1",
    img: "/assets/img/book/giaokhoagiaotrinh/giaoducthechat1.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 6,
    status: 1,
    name: "Giáo trình đàm phán quốc tế",
    img: "/assets/img/book/giaokhoagiaotrinh/giaotrinhdamphanquocte.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 7,
    status: 1,
    name: "Khoa học 4",
    img: "/assets/img/book/giaokhoagiaotrinh/khoahoc4.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 8,
    status: 1,
    name: "Tập làm văn 2",
    img: "/assets/img/book/giaokhoagiaotrinh/taplamvan2.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 9,
    status: 1,
    name: "Tự học toán 11 tập 1",
    img: "/assets/img/book/giaokhoagiaotrinh/taplamvan2.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 10,
    status: 1,
    name: "Vở chính tả lớp 2",
    img: "/assets/img/book/giaokhoagiaotrinh/vochinhtalop2.webp",
    category: "Sách Giáo Khoa - Giáo Trình",
    price: 200000,
    desc: "",
  },
  {
    id: 11,
    status: 1,
    name: "Bezonomics - Kinh tế học Bezos",
    img: "/assets/img/book/kinhte/bezonomics-kinhtehocbezos.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 12,
    status: 1,
    name: "Doanh nghiệp cống hiến",
    img: "/assets/img/book/kinhte/doanhnghiepconghien.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 13,
    status: 1,
    name: "Kệ hàng trống",
    img: "/assets/img/book/kinhte/kehangtrong.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 14,
    status: 1,
    name: "Kinh tế hậu covid",
    img: "/assets/img/book/kinhte/kinhtehaucovid.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 15,
    status: 1,
    name: "Kinh thánh bán hàng",
    img: "/assets/img/book/kinhte/kinhthanhbanhang.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 16,
    status: 1,
    name: "Lược sử kinh tế học",
    img: "/assets/img/book/kinhte/luocsukinhtehoc.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 17,
    status: 1,
    name: "Nền kinh tế tự do",
    img: "/assets/img/book/kinhte/nenkinhtetudo.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 18,
    status: 1,
    name: "Nghệ thuật quản lý nhân sự",
    img: "/assets/img/book/kinhte/nghethuatquanlynhansu.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 19,
    status: 1,
    name: "Thực thi",
    img: "/assets/img/book/kinhte/thucthi-hoanthanhkehoach-.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 20,
    status: 1,
    name: "Trải nghiệm khách hàng xuất sắc",
    img: "/assets/img/book/kinhte/trainghiemkhachhangxuatsac.webp",
    category: "Sách Kinh Tế",
    price: 200000,
    desc: "",
  },
  {
    id: 21,
    status: 1,
    name: "Dấu ấn hoàng gia - tập 8",
    img: "/assets/img/book/mangacomic/dau-an-hoang-gia_bia_tap-8.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 22,
    status: 1,
    name: "Frieren - Pháp sư tiễn táng - Tập 12",
    img: "/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 23,
    status: 1,
    name: "Haikyuu - Tập 41",
    img: "/assets/img/book/mangacomic/haikyutap41.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 24,
    status: 1,
    name: "Haikyuu - Tập 42",
    img: "/assets/img/book/mangacomic/haikyutap42.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 25,
    status: 1,
    name: "Haikyuu - Tập 45",
    img: "/assets/img/book/mangacomic/haikyutap45.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 26,
    status: 1,
    name: "Historie - Tập 11",
    img: "/assets/img/book/mangacomic/historietap11.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 27,
    status: 1,
    name: "Sakamoto Day - Tập 7",
    img: "/assets/img/book/mangacomic/sakamotodaytap7.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 28,
    status: 1,
    name: "Sakamoto Day - Tập 9",
    img: "/assets/img/book/mangacomic/sakamotodaytap9.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 29,
    status: 1,
    name: "Spy x Family - Tập 10",
    img: "/assets/img/book/mangacomic/spyxfamily_bia_tap_10.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 30,
    status: 1,
    name: "Wind Breaker - Tập 1",
    img: "/assets/img/book/mangacomic/windbreakertap1.webp",
    category: "Manga, Comic",
    price: 200000,
    desc: "",
  },
  {
    id: 31,
    status: 1,
    name: "120 Bài Luận Tiếng Anh",
    img: "/assets/img/book/ngoaingu/120bailuantienganh.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 32,
    status: 1,
    name: "420 Động Từ Bất Quy Tắc",
    img: "/assets/img/book/ngoaingu/420dongtubatquytac.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 33,
    status: 1,
    name: "Giáo Trình Hán Ngữ - Tập 2 - Quyển 2",
    img: "/assets/img/book/ngoaingu/giaotrinhhanngutap2quyen2.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 34,
    status: 1,
    name: "Giáo Trình Hán Ngữ - Tập 3 - Quyển 1",
    img: "/assets/img/book/ngoaingu/giaotrinhhanngutap3quyen1.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 35,
    status: 1,
    name: "Kỳ Thi Năng Lực Nhật Ngữ - JLPT 3",
    img: "/assets/img/book/ngoaingu/kythinanglucnhatngu-jlpt3.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 36,
    status: 1,
    name: "Ngữ Nghĩa Học Tiếng Anh",
    img: "/assets/img/book/ngoaingu/ngunghiahoctienganh.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 37,
    status: 1,
    name: "Sổ Tay Ngữ Pháp Tiếng Anh",
    img: "/assets/img/book/ngoaingu/sotaynguphaptienganh.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 38,
    status: 1,
    name: "Sổ Tay Tiếng Nhật Thương Mại",
    img: "/assets/img/book/ngoaingu/giaotrinhhanngutap2quyen2.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 39,
    status: 1,
    name: "Trạng Từ Trong Tiếng Anh",
    img: "/assets/img/book/ngoaingu/trangtutrongtienganh.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 40,
    status: 1,
    name: "Từ Vựng Tiếng Nhật Cần Thiết",
    img: "/assets/img/book/ngoaingu/tuvungtiengnhatcanthiet.webp",
    category: "Sách Ngoại Ngữ",
    price: 200000,
    desc: "",
  },
  {
    id: 41,
    status: 1,
    name: "Cẩm Nang Canva",
    img: "/assets/img/book/phattrienbanthan/camnangcanva.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 42,
    status: 1,
    name: "Đánh Bại Nỗi Lo",
    img: "/assets/img/book/phattrienbanthan/danhbainoilo.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 43,
    status: 1,
    name: "Đánh Thức Sức Mạnh Nội Tâm",
    img: "/assets/img/book/phattrienbanthan/danhthucsucmanhnoitam.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 44,
    status: 1,
    name: "Human Design",
    img: "/assets/img/book/phattrienbanthan/humandesign.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 45,
    status: 1,
    name: "Không Gì Là Không Thể",
    img: "/assets/img/book/phattrienbanthan/khonggilakhongthe.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 46,
    status: 1,
    name: "Không Sợ Thất Bại - Chỉ Sợ Bạn Nuông Chiều Bản Thân Chưa Nỗ Lực Hết Mình",
    img: "/assets/img/book/phattrienbanthan/khongsothatbai-chisobannuongchieubanthanchuanoluchetminh.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 47,
    status: 1,
    name: "Nghịch Lý Của Thành Công",
    img: "/assets/img/book/phattrienbanthan/nghichlycuathanhcong.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 48,
    status: 1,
    name: "Thao Túng Tâm Lý Đám Đông",
    img: "/assets/img/book/phattrienbanthan/thaotungtamlydamdong.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 49,
    status: 1,
    name: "Tư Duy Nhanh Và Chậm",
    img: "/assets/img/book/phattrienbanthan/tuduynhanhvacham-biacung.webp",
    category: "Sách Phát Triển Bản Thân",
    price: 200000,
    desc: "",
  },
  {
    id: 50,
    status: 1,
    name: "Bách Khoa Thiếu Nhi Vũ Trụ",
    img: "/assets/img/book/sachthieunhi/bachkhoathieunhivutru.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 51,
    status: 1,
    name: "Chiếc Đũa Thần",
    img: "/assets/img/book/sachthieunhi/chiecduathan.jpg",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 52,
    status: 1,
    name: "",
    img: "/assets/img/book/sachthieunhi/chieckhanquangcuahuounho.jpg",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 53,
    status: 1,
    name: "Chú Thỏ Tinh Khôn",
    img: "/assets/img/book/sachthieunhi/chuthotinhkhon.jpg",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 54,
    status: 1,
    name: "Cổ tích của ba",
    img: "/assets/img/book/sachthieunhi/cotichcuaba.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 55,
    status: 1,
    name: "Nàng Tiên Bóng Đêm",
    img: "/assets/img/book/sachthieunhi/nangtienbongdem.jpg",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 56,
    status: 1,
    name: "Ngôi Nhà Gần Tấm Gương",
    img: "/assets/img/book/sachthieunhi/ngoinhangantamguong.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 57,
    status: 1,
    name: "Sói Xám Chó Trắng",
    img: "/assets/img/book/sachthieunhi/soixamchotrang.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 58,
    status: 1,
    name: "Truyện Cổ Tích Thế Giới",
    img: "/assets/img/book/sachthieunhi/truyencotichthegioi.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 59,
    status: 1,
    name: "Ước Mơ Của Sếu",
    img: "/assets/img/book/sachthieunhi/uocmocuaseu.webp",
    category: "Sách Thiếu Nhi",
    price: 200000,
    desc: "",
  },
  {
    id: 60,
    status: 1,
    name: "Bóng Tối Giữa Chúng Ta",
    img: "/assets/img/book/vanhocnuocngoai/bongtoigiuachungta.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 61,
    status: 1,
    name: "Các Khía Cạnh Của Phật Giáo",
    img: "/assets/img/book/vanhocnuocngoai/cackhiacanhcuaphatgiao.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 62,
    status: 1,
    name: "Đạo Đức Học Của ARISTOTE",
    img: "/assets/img/book/vanhocnuocngoai/daoduchoccuaaristote.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 63,
    status: 1,
    name: "Hiến Tặng",
    img: "/assets/img/book/vanhocnuocngoai/hientang.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 64,
    status: 1,
    name: "Những Con Cá Voi 52 Hertz",
    img: "/assets/img/book/vanhocnuocngoai/nhungconcavoi52hertz.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 65,
    status: 1,
    name: "Những Tuyệt Tác Của Sharkspeare",
    img: "/assets/img/book/vanhocnuocngoai/nhungtuyettaccuashakspeare.jpg",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 66,
    status: 1,
    name: "Romeo And Juliet",
    img: "/assets/img/book/vanhocnuocngoai/romeoandjuliet.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 67,
    status: 1,
    name: "Thánh Giá Rỗng",
    img: "/assets/img/book/vanhocnuocngoai/thanhgiarong.jpg",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 68,
    status: 1,
    name: "The Little Prince",
    img: "/assets/img/book/vanhocnuocngoai/thelittleprince.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 69,
    status: 1,
    name: "Triết Học Đức",
    img: "/assets/img/book/vanhocnuocngoai/triethocduc.webp",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 70,
    status: 1,
    name: "Trường Ca Achilles",
    img: "/assets/img/book/vanhocnuocngoai/truongca.png",
    category: "Sách Văn Học Nước Ngoài",
    price: 200000,
    desc: "",
  },
  {
    id: 71,
    status: 1,
    name: "Có Hai Con Mèo Ngồi Bên Cửa Sổ",
    img: "/assets/img/book/vanhoctrongnuoc/cohaiconmeongoibencuaso.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 72,
    status: 1,
    name: "Đời Thừa",
    img: "/assets/img/book/vanhoctrongnuoc/doithua.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 73,
    status: 1,
    name: "Lão Hạc",
    img: "/assets/img/book/vanhoctrongnuoc/laohac.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 74,
    status: 1,
    name: "Ngôi Trường Mọi Khi",
    img: "/assets/img/book/vanhoctrongnuoc/ngoitruongmoikhi.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 75,
    status: 1,
    name: "Nỗi Buồn Chiến Tranh",
    img: "/assets/img/book/vanhoctrongnuoc/noibuonchientranh.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 76,
    status: 1,
    name: "Thơ Tố Hữu",
    img: "/assets/img/book/vanhoctrongnuoc/thotohuu.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 77,
    status: 1,
    name: "Thơ Văn Nguyễn Đình Chiểu",
    img: "/assets/img/book/vanhoctrongnuoc/thovannguyendinhchieu.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 78,
    status: 1,
    name: "Thơ Xuân Diệu",
    img: "/assets/img/book/vanhoctrongnuoc/thoxuandieu.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 79,
    status: 1,
    name: "Thơ Xuân Quỳnh",
    img: "/assets/img/book/vanhoctrongnuoc/thoxuanquynh.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
  {
    id: 80,
    status: 1,
    name: "Tuyển Tập Năm Cao",
    img: "/assets/img/book/vanhoctrongnuoc/tuyentapnamcao.webp",
    category: "Sách Văn Học Trong Nước",
    price: 200000,
    desc: "",
  },
];

const formRegister = document.getElementById('register-form');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const forgotPasswordLink = document.querySelector('.forgot-password');
const forgotPasswordContainer = document.querySelector('.forgot-password-container');
const formWrapper = document.querySelector('.form-wrapper');
const backLink = document.querySelector('.back-link');

const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


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
            <div style="color: red" id="nameError">Họ và tên không được để trống</div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Nhập email">
            <div style="color: red" id="emailError">Email không được để trống</div>
            <label for="password">Mật khẩu</label>
            <input type="password" id="password" placeholder="Nhập mật khẩu">
            <div style="color: red" id="passwordError">Mật khẩu không được để trống</div>
            <button type="submit" class="form-button">Đăng ký</button>
    `;
});

loginTab.addEventListener('click', () => {
    registerTab.classList.remove('active');
    loginTab.classList.add('active');
    loginForm.innerHTML = `
        <label for="email">Địa chỉ email</label>
            <div class="email-otp">
                <input type="email" id="email" placeholder="Nhập email bạn đã đăng kí" required>        
                <button type="button" class="send-otp">Gửi OTP</button>
            </div>
            <label for="otp">Mã xác nhận OTP</label>
            <input type="text" id="otp" placeholder="6 kí tự" required>
            <label for="new-password">Nhập mật khẩu mới</label>
            <input type="password" id="new-password" placeholder="******" required>
            <button type="submit" class="submit-btn">Xác nhận</button>
    `;
});

formRegister.addEventListener("submit", function(e){
  e.preventDefault();

  if(!nameElement.value){
    alert("teen k de trong")
  }
})

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

document.addEventListener('DOMContentLoaded', () => {
  const productList = document.querySelectorAll('.product_list, .product_grid');
  const html = products.map(product => {
    return `
      <div class="product-items">
        <img src="${product.img}">
        <p>${product.name}</p>
        <span class="price">${product.price}</span>
      </div>
    `;
  }).join('');
  productList.forEach(container => {
    container.innerHTML = html;
  });
  
});



// Xuân Mai