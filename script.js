const PRODUCTS = [
  { id:1,  name:'Trà sữa truyền thống', desc:'Vị trà đen đậm đà, trân châu đen dai ngon, ngọt vừa phải',       price:35000, cat:'Trà sữa', emoji:'🧋', bg:'#f5f0ff', badge:'Bán chạy', badgeCls:'badge-selling' },
  { id:2,  name:'Trà sữa matcha',        desc:'Matcha Uji Nhật Bản xay mịn, vị đắng thanh dịu nhẹ',             price:45000, cat:'Trà sữa', emoji:'🍵', bg:'#f0fdf4', badge:'Hot 🔥',   badgeCls:'badge-hot' },
  { id:3,  name:'Trà sữa socola',        desc:'Socola Bỉ tan chảy hoà quyện cùng trà thơm',                     price:42000, cat:'Trà sữa', emoji:'🍫', bg:'#fff7ed', badge:'',         badgeCls:'' },
  { id:4,  name:'Trà sữa khoai môn',    desc:'Khoai môn Đà Lạt tươi, màu tím bắt mắt, vị bùi bùi dễ nghiền',  price:40000, cat:'Trà sữa', emoji:'🫐', bg:'#ede9fe', badge:'Mới ✨',   badgeCls:'badge-new' },
  { id:5,  name:'Trà sữa dâu tươi',     desc:'Dâu Đà Lạt xay tươi pha trà kem béo, màu hồng siêu đẹp',        price:45000, cat:'Trà sữa', emoji:'🍓', bg:'#fce7f3', badge:'',         badgeCls:'' },

  { id:6,  name:'Cà phê đen đá',         desc:'Cà phê rang xay đậm vị, thơm nức, thức tỉnh ngay lập tức',       price:29000, cat:'Cà phê',  emoji:'☕', bg:'#fef9c3', badge:'Bán chạy', badgeCls:'badge-selling' },
  { id:7,  name:'Bạc xỉu',               desc:'Cà phê sữa béo ngậy theo kiểu Sài Gòn, cổ điển không bao giờ lỗi thời', price:35000, cat:'Cà phê', emoji:'🥛', bg:'#fff7ed', badge:'', badgeCls:'' },
  { id:8,  name:'Cà phê muối',           desc:'Xu hướng từ Huế — vị mặn ngọt hòa quyện khó quên',               price:39000, cat:'Cà phê',  emoji:'🧂', bg:'#f0f9ff', badge:'Hot 🔥',   badgeCls:'badge-hot' },
  { id:9,  name:'Cappuccino',            desc:'Espresso Ý, lớp milk foam mịn mượt như mây, topping quế nhẹ',    price:49000, cat:'Cà phê',  emoji:'🫖', bg:'#fce7f3', badge:'Mới ✨',   badgeCls:'badge-new' },

  { id:10, name:'Nước cam tươi',          desc:'Cam Úc nguyên chất 100%, ép tươi theo từng đơn, không đường thêm', price:39000, cat:'Nước ép', emoji:'🍊', bg:'#fff7ed', badge:'',         badgeCls:'' },
  { id:11, name:'Nước ép dưa hấu',       desc:'Dưa hấu mùa hè mát lạnh, vị ngọt tự nhiên giải nhiệt tức thì',  price:32000, cat:'Nước ép', emoji:'🍉', bg:'#fce7f3', badge:'Mùa hè 🌞', badgeCls:'badge-season' },
  { id:12, name:'Nước ép táo gừng',       desc:'Táo New Zealand + gừng tươi, combo tăng đề kháng siêu tốt',     price:42000, cat:'Nước ép', emoji:'🍎', bg:'#f0fdf4', badge:'',         badgeCls:'' },

  { id:13, name:'Sinh tố bơ',            desc:'Bơ chín Đắk Lắk + sữa tươi, béo thơm tự nhiên, no lâu',        price:49000, cat:'Sinh tố',  emoji:'🥑', bg:'#f0fdf4', badge:'Bán chạy', badgeCls:'badge-selling' },
  { id:14, name:'Sinh tố xoài',          desc:'Xoài cát Hòa Lộc chín vàng, ngọt thanh, thơm lừng',             price:45000, cat:'Sinh tố',  emoji:'🥭', bg:'#fff7ed', badge:'',         badgeCls:'' },
  { id:15, name:'Sinh tố dâu kem',        desc:'Dâu Đà Lạt tươi + kem tươi béo ngậy, màu hồng cực đẹp',       price:52000, cat:'Sinh tố',  emoji:'🍓', bg:'#fce7f3', badge:'Hot 🔥',   badgeCls:'badge-hot' },

  { id:16, name:'Trà đào cam sả',        desc:'Bộ ba thanh mát — đào mềm, cam thơm, sả cay nhẹ',               price:35000, cat:'Trà',      emoji:'🍑', bg:'#fff7ed', badge:'Bán chạy', badgeCls:'badge-selling' },
  { id:17, name:'Trà vải bạc hà',        desc:'Vải ngọt thanh + bạc hà the lạnh, combo thanh mát nhất hè',     price:35000, cat:'Trà',      emoji:'🌿', bg:'#f0fdf4', badge:'Mới ✨',   badgeCls:'badge-new' },
  { id:18, name:'Trà hoa cúc mật ong',   desc:'Hoa cúc khô ủ với mật ong nguyên chất, dịu nhẹ thư giãn',      price:38000, cat:'Trà',      emoji:'🌼', bg:'#fefce8', badge:'',         badgeCls:'' },

  { id:19, name:'Đá xay matcha đậu đỏ',  desc:'Matcha đá xay mịn + đậu đỏ bùi thơm + kem sữa tươi phủ trên',price:55000, cat:'Đá xay',   emoji:'🍦', bg:'#f0fdf4', badge:'Hot 🔥',   badgeCls:'badge-hot' },
  { id:20, name:'Đá xay socola',          desc:'Socola đậm đà đá xay + topping sốt socola + whipping kem tươi', price:55000, cat:'Đá xay',   emoji:'🍧', bg:'#fff7ed', badge:'',         badgeCls:'' },
  { id:21, name:'Đá xay caramel',         desc:'Espresso + đá xay + sốt caramel ngọt bùi, tỉnh ngủ tức thì',  price:59000, cat:'Đá xay',   emoji:'🍮', bg:'#fef9c3', badge:'Mới ✨',   badgeCls:'badge-new' },
];

const CATEGORIES = ['Tất cả', ...new Set(PRODUCTS.map(p => p.cat))];
const DELIVERY_FEE = 20000;
const FREE_SHIP_MIN = 150000;

let cart          = [];
let activeCat     = 'Tất cả';
let cartOpen      = false;
let orderCounter  = Math.floor(Math.random() * 500) + 1200;

function dinhDangTien(n) {
  return new Intl.NumberFormat('vi-VN').format(n) + ' ₫';
}

function hienThongBao(msg, type) {
  type = type || 'default';
  var el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  document.getElementById('toastContainer').appendChild(el);
  requestAnimationFrame(function(){ el.classList.add('show'); });
  setTimeout(function(){
    el.classList.remove('show');
    setTimeout(function(){ el.remove(); }, 400);
  }, 2800);
}

function veThanhDanhMuc() {
  var nav = document.getElementById('catNavInner');
  nav.innerHTML = CATEGORIES.map(function(cat) {
    var icons = {
      'Tất cả':'✨', 'Trà sữa':'🧋', 'Cà phê':'☕',
      'Nước ép':'🍊','Sinh tố':'🥤','Trà':'🍵','Đá xay':'🍧'
    };
    return '<button class="cat-btn' + (cat === activeCat ? ' active' : '') + '" onclick="locTheoNhom(\'' + cat + '\')">' +
      (icons[cat]||'') + ' ' + cat + '</button>';
  }).join('');
}

function locTheoNhom(cat) {
  activeCat = cat;
  veThanhDanhMuc();
  veSanPham();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function taoNutDieuKhien(p) {
  var inCart = cart.find(function(c){ return c.id === p.id; });
  if (inCart) {
    return '<div class="qty-ctrl">'
      + '<button class="qty-btn" onclick="doiSoLuong(' + p.id + ',-1,event)">−</button>'
      + '<span class="qty-num">' + inCart.qty + '</span>'
      + '<button class="qty-btn" onclick="doiSoLuong(' + p.id + ',1,event)">+</button>'
      + '</div>';
  }
  return '<button class="btn-add" onclick="themVaoGio(' + p.id + ',event)" title="Thêm vào giỏ">+</button>';
}

function capNhatNutCard(id) {
  var footer = document.getElementById('pcf-' + id);
  if (!footer) return;
  var p = PRODUCTS.find(function(x){ return x.id === id; });
  if (!p) return;
  footer.innerHTML = '<div class="card-price">' + dinhDangTien(p.price) + '</div>' + taoNutDieuKhien(p);
}

function veSanPham() {
  var list = activeCat === 'Tất cả'
    ? PRODUCTS
    : PRODUCTS.filter(function(p){ return p.cat === activeCat; });

  document.getElementById('sectionTitle').textContent =
    activeCat === 'Tất cả' ? 'Tất cả đồ uống' : activeCat;
  document.getElementById('sectionCount').textContent =
    list.length + ' món';

  var grid = document.getElementById('productsGrid');

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div>' +
      '<div class="empty-title">Không tìm thấy</div>' +
      '<p>Thử chọn danh mục khác nhé!</p></div>';
    return;
  }

  grid.innerHTML = list.map(function(p, i) {
    return '<div class="product-card" id="pc-' + p.id + '" style="animation-delay:' + (i * 0.04) + 's">'
      + '<div class="card-top" style="background:' + p.bg + '">'
        + (p.badge ? '<div class="card-badge ' + p.badgeCls + '">' + p.badge + '</div>' : '')
        + p.emoji
      + '</div>'
      + '<div class="card-body">'
        + '<div class="card-name">' + p.name + '</div>'
        + '<div class="card-desc">' + p.desc + '</div>'
        + '<div class="card-footer" id="pcf-' + p.id + '">'
          + '<div class="card-price">' + dinhDangTien(p.price) + '</div>'
          + taoNutDieuKhien(p)
        + '</div>'
      + '</div>'
    + '</div>';
  }).join('');
}

function themVaoGio(id, evt) {
  if (evt) { evt.stopPropagation(); }
  var p = PRODUCTS.find(function(x){ return x.id === id; });
  if (!p) return;

  var existing = cart.find(function(c){ return c.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, bg: p.bg, qty: 1 });
  }

  capNhatGioHang();
  capNhatNutCard(id);
  hienThongBao('✓ Đã thêm: ' + p.name, 'success');
}

function doiSoLuong(id, delta, evt) {
  if (evt) evt.stopPropagation();
  var item = cart.find(function(c){ return c.id === id; });
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(function(c){ return c.id !== id; });
  }

  capNhatGioHang();
  capNhatNutCard(id);
  if (cartOpen) veNoidungGio();
}

function xoaKhoiGio(id) {
  cart = cart.filter(function(c){ return c.id !== id; });
  capNhatGioHang();
  capNhatNutCard(id);
  veNoidungGio();
}

function capNhatGioHang() {
  var total = cart.reduce(function(s, c){ return s + c.qty; }, 0);
  var countEl = document.getElementById('cartCount');
  countEl.textContent = total;
  countEl.classList.toggle('show', total > 0);
}

function tinhTamTinh() {
  return cart.reduce(function(s, c){ return s + c.price * c.qty; }, 0);
}

function moTatGioHang() {
  cartOpen = !cartOpen;
  document.getElementById('cartDrawer').classList.toggle('open', cartOpen);
  document.getElementById('cartOverlay').classList.toggle('open', cartOpen);
  if (cartOpen) { veNoidungGio(); tuDienForm(); }
}

function veNoidungGio() {
  var empty     = document.getElementById('cartEmptyState');
  var items     = document.getElementById('drawerItems');
  var footer    = document.getElementById('drawerFooter');
  var countSpan = document.getElementById('drawerCount');

  var totalQty  = cart.reduce(function(s,c){ return s+c.qty; }, 0);
  countSpan.textContent = totalQty > 0 ? '(' + totalQty + ' món)' : '';

  if (cart.length === 0) {
    empty.style.display  = 'flex';
    items.style.display  = 'none';
    footer.style.display = 'none';
    return;
  }

  empty.style.display  = 'none';
  items.style.display  = 'block';
  footer.style.display = 'block';

  items.innerHTML = cart.map(function(c) {
    return '<div class="cart-item">' +
      '<div class="ci-emoji" style="background:' + c.bg + '">' + c.emoji + '</div>' +
      '<div class="ci-info">' +
        '<div class="ci-name">' + c.name + '</div>' +
        '<div style="display:flex;align-items:center;gap:8px;margin-top:6px">' +
          '<div class="qty-ctrl">' +
            '<button class="qty-btn" onclick="doiSoLuong(' + c.id + ',-1)">−</button>' +
            '<span class="qty-num">' + c.qty + '</span>' +
            '<button class="qty-btn" onclick="doiSoLuong(' + c.id + ',1)">+</button>' +
          '</div>' +
          '<div class="ci-price">' + dinhDangTien(c.price * c.qty) + '</div>' +
        '</div>' +
      '</div>' +
      '<button class="ci-rm" onclick="xoaKhoiGio(' + c.id + ')" title="Xóa">✕</button>' +
    '</div>';
  }).join('');

  var sub      = tinhTamTinh();
  var isFree   = sub >= FREE_SHIP_MIN;
  var total    = sub + (isFree ? 0 : DELIVERY_FEE);

  document.getElementById('subtotalLabel').textContent = dinhDangTien(sub);
  document.getElementById('feeRow').style.display  = isFree ? 'none' : 'flex';
  document.getElementById('freeRow').style.display = isFree ? 'flex' : 'none';
  document.getElementById('grandLabel').textContent = dinhDangTien(total);
}

function datHang() {
  if(!curUser){
    if(cartOpen) moTatGioHang();
    moDangNhap('login');
    hienThongBao('⚠ Vui lòng đăng nhập để đặt hàng!','warning');
    return;
  }

  var name  = document.getElementById('fName').value.trim();
  var phone = document.getElementById('fPhone').value.trim();
  var addr  = document.getElementById('fAddr').value.trim();

  if (!name)  { hienThongBao('⚠ Vui lòng nhập họ tên!', 'warning'); document.getElementById('fName').focus(); return; }
  if (!phone) { hienThongBao('⚠ Vui lòng nhập số điện thoại!', 'warning'); document.getElementById('fPhone').focus(); return; }
  if (!addr)  { hienThongBao('⚠ Vui lòng nhập địa chỉ giao hàng!', 'warning'); document.getElementById('fAddr').focus(); return; }
  if (!/^[0-9]{9,11}$/.test(phone.replace(/\s/g,''))) {
    hienThongBao('⚠ Số điện thoại không hợp lệ!', 'warning');
    document.getElementById('fPhone').focus();
    return;
  }
  if (cart.length === 0) { hienThongBao('Giỏ hàng trống!', 'warning'); return; }

  var btn = document.getElementById('btnOrder');
  btn.disabled = true;
  btn.textContent = 'Đang xử lý...';

  var cartSnap = cart.map(function(c){ return {name:c.name,emoji:c.emoji,qty:c.qty,price:c.price}; });
  var sub2 = tinhTamTinh();
  var isFree2 = sub2 >= FREE_SHIP_MIN;
  var grandTotal = sub2 + (isFree2 ? 0 : DELIVERY_FEE);

  setTimeout(function() {
    orderCounter++;
    var orderNum = '#SG' + orderCounter;
    document.getElementById('orderNum').textContent = orderNum;

    var nowTs = Date.now();
    var itemCount = cartSnap.reduce(function(s,c){return s+c.qty;},0);
    var confirmMs  = 1 * 60 * 1000;
    var pickupMs   = itemCount * 3 * 60 * 1000;
    var deliverMs  = 15 * 60 * 1000;

    if(curUser){
      if(!curUser.orders) curUser.orders=[];
      var newOrder = {
        num: orderNum,
        date: new Date().toLocaleString('vi-VN'),
        items: cartSnap,
        total: grandTotal,
        addr: addr,
        createdAt: nowTs,
        confirmMs:  confirmMs,
        pickupMs:   pickupMs,
        deliverMs:  deliverMs,
        trackStep: 0,
        stepTimes: [nowTs, 0, 0, 0, 0],
        reviewed: false,
        rating: 0,
        reviewText: ''
      };
      curUser.orders.push(newOrder);
      var all=JSON.parse(localStorage.getItem(USERS_KEY))||[];
      for(var i=0;i<all.length;i++){ if(all[i].id===curUser.id){ all[i]=curUser; break; } }
      localStorage.setItem(USERS_KEY,JSON.stringify(all));
      localStorage.setItem(SESSION_KEY,JSON.stringify(curUser));

      lenLichTienTrangThai(newOrder);
    }

    cartOpen = false;
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');

    document.getElementById('successOverlay').classList.add('open');
    (function setSuccessEta(){
      var data = layDonHang(orderNum);
      if(!data){ return; }
      var o = data.order;
      var created   = o.createdAt;
      var etaMs     = created + o.confirmMs + o.pickupMs + o.deliverMs;
      var etaDate   = new Date(etaMs);
      var hh = etaDate.getHours().toString().padStart(2,'0');
      var mm = etaDate.getMinutes().toString().padStart(2,'0');
      var remaining = Math.max(0, Math.round((etaMs - Date.now()) / 60000));
      document.getElementById('successEtaTime').textContent =
        hh + ':' + mm + ' (~' + remaining + ' phút nữa)';
    })();

    cart = [];
    capNhatGioHang();
    veSanPham();

    document.getElementById('fName').value  = '';
    document.getElementById('fPhone').value = '';
    document.getElementById('fAddr').value  = '';
    document.getElementById('fNote').value  = '';

    btn.disabled = false;
    btn.textContent = '✓ Đặt hàng ngay';
  }, 1200);
}

function dongThanhCong() {
  document.getElementById('successOverlay').classList.remove('open');
}
function theoDoiTuThanhCong(){
  var num = document.getElementById('orderNum').textContent;
  dongThanhCong();
  moTheoDoi(num);
}

var activeTrackingTimers = {};
var currentTrackingNum  = null;
var countdownInterval   = null;
var currentTrackOrder   = null;

var STEP_LABELS = [
  'Chờ xác nhận',
  'Chờ Lấy Hàng',
  'Chờ giao Hàng',
  'Đã giao thành công',
  'Đánh giá'
];
var STEP_DESCS = [
  'Đơn hàng vừa được ghi nhận, chờ cửa hàng xác nhận',
  'Đơn đã xác nhận, đang chuẩn bị và đóng gói',
  'Shipper đã nhận hàng và đang trên đường giao',
  'Đơn hàng đã được giao tới tay bạn thành công',
  'Chia sẻ trải nghiệm của bạn'
];
var STEP_ICONS = ['📋','✅','🛵','🎉','⭐'];

function layDonHang(num){
  var raw = localStorage.getItem(USERS_KEY);
  if(!raw) return null;
  var allUsers = JSON.parse(raw);
  for(var u=0;u<allUsers.length;u++){
    var orders = allUsers[u].orders||[];
    for(var o=0;o<orders.length;o++){
      if(orders[o].num === num) return {order: orders[o], user: allUsers[u], ui: u, oi: o, allUsers: allUsers};
    }
  }
  return null;
}

function tiepBuocDon(num, toStep){
  var data = layDonHang(num);
  if(!data) return;
  var order = data.order;
  order.trackStep = toStep;
  if(!order.stepTimes) order.stepTimes=[Date.now(),0,0,0,0];
  order.stepTimes[toStep] = Date.now();
  data.allUsers[data.ui].orders[data.oi] = order;
  localStorage.setItem(USERS_KEY, JSON.stringify(data.allUsers));
  if(curUser && curUser.id === data.allUsers[data.ui].id){
    curUser = data.allUsers[data.ui];
    localStorage.setItem(SESSION_KEY, JSON.stringify(curUser));
  }
  if(currentTrackingNum === num) veModalTheoDoi(order);
}

function lenLichTienTrangThai(order){
  var num = order.num;
  var now = Date.now();
  var created = order.createdAt || now;
  var confirmMs = order.confirmMs  || 1*60*1000;
  var pickupMs  = order.pickupMs   || 3*60*1000;
  var deliverMs = order.deliverMs  || 15*60*1000;

  var t1 = created + confirmMs;
  var t2 = t1 + pickupMs;
  var t3 = t2 + deliverMs;
  var t4 = t3 + 1000;

  var schedule = [
    {at: t1, step: 1, toast: '✅ Đơn ' + num + ' đã được xác nhận!'},
    {at: t2, step: 2, toast: '🛵 Shipper đang lấy hàng ' + num},
    {at: t3, step: 3, toast: '🎉 Đơn ' + num + ' đã giao thành công!'},
    {at: t4, step: 4, toast: '⭐ Hãy đánh giá đơn ' + num}
  ];

  if(activeTrackingTimers[num]) {
    activeTrackingTimers[num].forEach(function(t){ clearTimeout(t); });
  }
  activeTrackingTimers[num] = [];

  schedule.forEach(function(s){
    var delay = s.at - Date.now();
    if(delay <= 0) return;
    var data = layDonHang(num);
    if(data && data.order.trackStep >= s.step) return;

    var tid = setTimeout(function(){
      var d2 = layDonHang(num);
      if(!d2 || d2.order.trackStep >= s.step) return;
      tiepBuocDon(num, s.step);
      hienThongBao(s.toast, s.step===3 ? 'success' : 'default');
    }, delay);
    activeTrackingTimers[num].push(tid);
  });
}

function khoiDongLaiDonCu(){
  var raw = localStorage.getItem(USERS_KEY);
  if(!raw) return;
  var allUsers = JSON.parse(raw);
  allUsers.forEach(function(u){
    (u.orders||[]).forEach(function(o){
      if(o.trackStep < 3 && o.createdAt) lenLichTienTrangThai(o);
    });
  });
}

function moTheoDoi(num){
  var data = layDonHang(num);
  if(!data){ hienThongBao('Không tìm thấy đơn hàng','warning'); return; }
  currentTrackingNum = num;
  currentTrackOrder  = data.order;
  veModalTheoDoi(data.order);
  document.getElementById('trackingOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  batDauDemNguoc();
}
function dongTheoDoi(){
  document.getElementById('trackingOverlay').classList.remove('open');
  document.body.style.overflow='';
  if(countdownInterval){ clearInterval(countdownInterval); countdownInterval=null; }
}

function veModalTheoDoi(order){
  document.getElementById('tmOrderNum').textContent  = order.num;
  document.getElementById('tmOrderDate').textContent = order.date||'';

  var step = order.trackStep || 0;

  var etaCard    = document.getElementById('tmEtaCard');
  var etaIcon    = document.getElementById('tmEtaIcon');
  var etaLabel   = document.getElementById('tmEtaLabel');
  var etaTimeEl  = document.getElementById('tmEtaTime');
  var etaRemain  = document.getElementById('tmEtaRemain');
  if(order.createdAt){
    var confirmMs = order.confirmMs || 1*60*1000;
    var pickupMs  = order.pickupMs  || 3*60*1000;
    var deliverMs = order.deliverMs || 15*60*1000;
    var etaMs     = order.createdAt + confirmMs + pickupMs + deliverMs;
    var etaDate   = new Date(etaMs);
    var hh = etaDate.getHours().toString().padStart(2,'0');
    var mm = etaDate.getMinutes().toString().padStart(2,'0');
    etaTimeEl.textContent = hh + ':' + mm;
    if(step >= 3){
      etaCard.className = 'tm-eta-card delivered';
      etaIcon.textContent  = '✅';
      etaLabel.textContent = 'Đã giao lúc';
      var doneTs = (order.stepTimes && order.stepTimes[3]) ? order.stepTimes[3] : etaMs;
      var dd = new Date(doneTs);
      etaTimeEl.textContent = dd.getHours().toString().padStart(2,'0')+':'+dd.getMinutes().toString().padStart(2,'0');
      etaRemain.textContent = '✓ Hoàn thành';
    } else {
      etaCard.className = 'tm-eta-card';
      etaIcon.textContent  = step === 2 ? '🛵' : '🕐';
      etaLabel.textContent = 'Dự kiến giao hàng';
      var remainMs = etaMs - Date.now();
      var remainMin = Math.max(0, Math.ceil(remainMs / 60000));
      etaRemain.textContent = remainMin > 0 ? '~' + remainMin + ' phút' : 'Sắp đến!';
    }
  }

  for(var i=0;i<=4;i++){
    var el = document.getElementById('tstep-'+i);
    if(!el) continue;
    el.className = 'tm-step ' + (i < step ? 'done' : i===step ? 'active' : 'pending');
    var dotEl = el.querySelector('.tm-step-dot');
    if(dotEl) dotEl.textContent = i < step ? '✓' : STEP_ICONS[i];
    var timeEl = document.getElementById('ttime-'+i);
    if(timeEl){
      if(order.stepTimes && order.stepTimes[i] && (i < step || i===step)){
        var d = new Date(order.stepTimes[i]);
        timeEl.textContent = d.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});
      } else {
        timeEl.textContent = '';
      }
    }
  }

  var reviewBox = document.getElementById('tmReviewBox');
  if(step === 4){
    reviewBox.style.display = 'block';
    if(order.reviewed){
      document.getElementById('reviewDone').style.display='block';
      document.getElementById('starRow').style.display='none';
      document.getElementById('reviewText').style.display='none';
      document.querySelector('.btn-submit-review').style.display='none';
    }
  } else {
    reviewBox.style.display = 'none';
  }

  capNhatDemNguoc(order);
}

function capNhatDemNguoc(order){
  var step = order.trackStep || 0;
  var countEl   = document.getElementById('tmCountdown');
  var countTime = document.getElementById('tmCountTime');
  var countLabel= document.getElementById('tmCountLabel');
  var countIcon = document.getElementById('tmCountIcon');
  var fillEl    = document.getElementById('tmProgressFill');

  if(step >= 3){
    countEl.style.display='none';
    return;
  }
  countEl.style.display='flex';

  var now = Date.now();
  var created    = order.createdAt || now;
  var confirmMs  = order.confirmMs  || 1*60*1000;
  var pickupMs   = order.pickupMs   || 3*60*1000;
  var deliverMs  = order.deliverMs  || 15*60*1000;

  var t1 = created + confirmMs;
  var t2 = t1 + pickupMs;
  var t3 = t2 + deliverMs;

  var targetTs, totalMs, icon, label;
  if(step === 0){ targetTs=t1; totalMs=confirmMs; icon='⏳'; label='Đang chờ cửa hàng xác nhận...'; }
  else if(step === 1){ targetTs=t2; totalMs=pickupMs; icon='📦'; label='Đang chuẩn bị đơn hàng...'; }
  else { targetTs=t3; totalMs=deliverMs; icon='🛵'; label='Shipper đang trên đường giao...'; }

  countIcon.textContent  = icon;
  countLabel.textContent = label;

  var remaining = targetTs - now;
  if(remaining < 0) remaining = 0;
  var elapsed = totalMs - remaining;
  var pct = Math.min(100, Math.round(elapsed / totalMs * 100));
  fillEl.style.width = pct + '%';

  var mins = Math.floor(remaining / 60000);
  var secs = Math.floor((remaining % 60000) / 1000);
  countTime.textContent = (mins<10?'0':'')+mins+':'+(secs<10?'0':'')+secs;
}

function batDauDemNguoc(){
  if(countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(function(){
    if(!currentTrackingNum) return;
    var data = layDonHang(currentTrackingNum);
    if(!data){ clearInterval(countdownInterval); return; }
    currentTrackOrder = data.order;
    capNhatDemNguoc(data.order);
    veModalTheoDoi(data.order);
  }, 1000);
}

var selectedRating = 0;
function chonSao(n){
  selectedRating = n;
  var btns = document.getElementById('starRow').querySelectorAll('.star-btn');
  btns.forEach(function(b,i){ b.classList.toggle('lit', i < n); });
}
function guiDanhGia(){
  if(!selectedRating){ hienThongBao('⚠ Hãy chọn số sao!','warning'); return; }
  var text = document.getElementById('reviewText').value.trim();
  if(!currentTrackingNum) return;
  var data = layDonHang(currentTrackingNum);
  if(!data) return;
  data.order.reviewed   = true;
  data.order.rating     = selectedRating;
  data.order.reviewText = text;
  data.allUsers[data.ui].orders[data.oi] = data.order;
  localStorage.setItem(USERS_KEY, JSON.stringify(data.allUsers));
  if(curUser && curUser.id === data.allUsers[data.ui].id){
    curUser = data.allUsers[data.ui];
    localStorage.setItem(SESSION_KEY, JSON.stringify(curUser));
  }
  document.getElementById('reviewDone').style.display='block';
  document.getElementById('starRow').style.display='none';
  document.getElementById('reviewText').style.display='none';
  document.querySelector('.btn-submit-review').style.display='none';
  hienThongBao('🙏 Cảm ơn bạn đã đánh giá!','success');
}

function xuLyCuon() {
  var nav   = document.getElementById('catNav');
  var navWrap = document.getElementById('catNav');
  var heroBot = document.querySelector('.hero').getBoundingClientRect().bottom;
  navWrap.classList.toggle('scrolled', heroBot < 64);
}

function khoiTao() {
  khoiTaoXacThuc();
  veThanhDanhMuc();
  veSanPham();
  khoiDongLaiDonCu();

  window.addEventListener('scroll', xuLyCuon, { passive: true });

  ['successOverlay','authOverlay','ordersOverlay','profileOverlay','trackingOverlay','confirmOverlay'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.addEventListener('click',function(e){
      if(e.target===this){
        this.classList.remove('open');
        document.body.style.overflow='';
        if(id==='trackingOverlay' && countdownInterval){ clearInterval(countdownInterval); countdownInterval=null; }
      }
    });
  });

  document.addEventListener('click', function(e){
    var wrap=document.getElementById('hdUserWrap');
    if(ddOpen && wrap && !wrap.contains(e.target)) dongMenuNguoiDung();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if(cartOpen) moTatGioHang();
      ['authOverlay','ordersOverlay','profileOverlay','successOverlay','trackingOverlay','confirmOverlay'].forEach(function(id){
        document.getElementById(id).classList.remove('open');
      });
      document.body.style.overflow='';
      if(countdownInterval){ clearInterval(countdownInterval); countdownInterval=null; }
      dongMenuNguoiDung();
    }
  });
}

var USERS_KEY   = 'sg_users';
var SESSION_KEY = 'sg_sess';
var users   = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
var curUser = null;
var ddOpen  = false;

(function(){
  var has = users.some(function(u){ return u.email==='test@sipgo.vn'; });
  if(!has){
    users.push({id:'demo01',name:'Khách Demo',email:'test@sipgo.vn',
      phone:'0901234567',password:'123456',address:'123 Nguyễn Huệ, Q.1',orders:[]});
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
})();

function khoiTaoXacThuc(){
  var raw = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
  if(raw){ try{ curUser=JSON.parse(raw); }catch(e){ curUser=null; } }
  capNhatHeader();
}

function moDangNhap(tab){
  xoaThongBaoLoi();
  chuyenTab(tab||'login');
  document.getElementById('authOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(function(){
    var f=document.querySelector('#aform-'+(tab||'login')+' .a-inp');
    if(f)f.focus();
  },300);
}
function dongDangNhap(){
  document.getElementById('authOverlay').classList.remove('open');
  document.body.style.overflow='';
}

function chuyenTab(t){
  ['login','register'].forEach(function(n){
    document.getElementById('atab-'+n).classList.toggle('on',n===t);
    document.getElementById('aform-'+n).classList.toggle('on',n===t);
  });
  var hl ={login:'Chào mừng<br/>trở lại! 👋', register:'Tạo tài khoản<br/>mới ✨'};
  var sub={login:'Đăng nhập để đặt hàng nhanh hơn', register:'Chỉ mất 30 giây để bắt đầu'};
  document.getElementById('authHl').innerHTML=hl[t];
  document.getElementById('authSub').textContent=sub[t];
  xoaThongBaoLoi();
}

function xoaThongBaoLoi(){
  var el=document.getElementById('authMsg');
  el.className='auth-msg'; el.textContent='';
}
function hienLoi(m){ var el=document.getElementById('authMsg'); el.className='auth-msg err'; el.textContent='⚠ '+m; }
function hienThanhCongXacThuc(m) { var el=document.getElementById('authMsg'); el.className='auth-msg ok';  el.textContent='✓ '+m; }

function batTatMatKhau(id,btn){
  var inp=document.getElementById(id);
  inp.type=inp.type==='password'?'text':'password';
  btn.textContent=inp.type==='password'?'👁':'🙈';
}

function dangNhap(){
  var em=document.getElementById('lEmail').value.trim().toLowerCase();
  var pw=document.getElementById('lPw').value;
  var rem=document.getElementById('remMe').checked;
  xoaThongBaoLoi();
  if(!em){ hienLoi('Vui lòng nhập email!'); return; }
  if(!pw){ hienLoi('Vui lòng nhập mật khẩu!'); return; }

  var found=null;
  for(var i=0;i<users.length;i++){
    if(users[i].email===em && users[i].password===pw){ found=users[i]; break; }
  }
  if(!found){ hienLoi('Email hoặc mật khẩu không đúng!'); return; }

  curUser=found;
  var store=rem?localStorage:sessionStorage;
  store.setItem(SESSION_KEY,JSON.stringify(curUser));

  capNhatHeader();
  dongDangNhap();
  hienThongBao('Chào '+curUser.name+'! 👋','success');
  if(cartOpen) tuDienForm();
}

function dangKy(){
  var name =document.getElementById('rName').value.trim();
  var email=document.getElementById('rEmail').value.trim().toLowerCase();
  var phone=document.getElementById('rPhone').value.trim().replace(/\s/g,'');
  var pw   =document.getElementById('rPw').value;
  var pwc  =document.getElementById('rPwC').value;
  xoaThongBaoLoi();

  if(!name)  { hienLoi('Vui lòng nhập họ tên!'); return; }
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ hienLoi('Email không hợp lệ!'); return; }
  if(!phone||!/^[0-9]{9,11}$/.test(phone))               { hienLoi('Số điện thoại không hợp lệ!'); return; }
  if(pw.length<6)                                         { hienLoi('Mật khẩu phải ≥ 6 ký tự!'); return; }
  if(pw!==pwc)                                            { hienLoi('Mật khẩu xác nhận không khớp!'); return; }
  if(users.some(function(u){ return u.email===email; }))  { hienLoi('Email này đã được đăng ký!'); return; }

  var nu={id:'u'+Date.now(),name:name,email:email,phone:phone,
          password:pw,address:'',orders:[]};
  users.push(nu);
  localStorage.setItem(USERS_KEY,JSON.stringify(users));

  hienThanhCongXacThuc('Đăng ký thành công! Đang đăng nhập...');
  setTimeout(function(){
    curUser=nu;
    localStorage.setItem(SESSION_KEY,JSON.stringify(curUser));
    capNhatHeader();
    dongDangNhap();
    hienThongBao('Chào mừng '+curUser.name+'! 🎉','success');
    if(cartOpen) tuDienForm();
  },900);
}

function dangXuat(){
  curUser=null;
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  dongMenuNguoiDung();
  capNhatHeader();
  hienThongBao('Đã đăng xuất!');
}

function layVietTat(name){
  return name.split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2);
}
function capNhatHeader(){
  var loginBtn=document.getElementById('btnLoginHd');
  var userBtn =document.getElementById('userHdBtn');
  if(curUser){
    var ini=layVietTat(curUser.name);
    var firstName=curUser.name.split(' ').slice(-1)[0];
    loginBtn.style.display='none';
    userBtn.classList.add('visible');
    document.getElementById('hdAv').textContent=ini;
    document.getElementById('hdName').textContent=firstName;
    document.getElementById('ddAv').textContent=ini;
    document.getElementById('ddName').textContent=curUser.name;
    document.getElementById('ddEmail').textContent=curUser.email;
  } else {
    loginBtn.style.display='flex';
    userBtn.classList.remove('visible');
    dongMenuNguoiDung();
  }
}

function moTatMenuNguoiDung(){
  ddOpen=!ddOpen;
  document.getElementById('userDd').classList.toggle('open',ddOpen);
}
function dongMenuNguoiDung(){
  ddOpen=false;
  document.getElementById('userDd').classList.remove('open');
}

function tuDienForm(){
  if(!curUser) return;
  var n=document.getElementById('fName');
  var p=document.getElementById('fPhone');
  var a=document.getElementById('fAddr');
  if(n&&!n.value) n.value=curUser.name;
  if(p&&!p.value) p.value=curUser.phone;
  if(a&&!a.value&&curUser.address) a.value=curUser.address;
}

function xemDonHangCuaToi(){
  dongMenuNguoiDung();
  if(!curUser){ moDangNhap('login'); return; }

  var all=JSON.parse(localStorage.getItem(USERS_KEY))||[];
  for(var i=0;i<all.length;i++){ if(all[i].id===curUser.id){ curUser=all[i]; break; } }

  var body=document.getElementById('omBody');
  var orders=(curUser.orders||[]).slice().reverse();

  var STATUS_MAP = [
    {cls:'st-waiting',  label:'Chờ xác nhận'},
    {cls:'st-confirmed',label:'Chờ Lấy Hàng'},
    {cls:'st-pickup',   label:'Chờ giao Hàng'},
    {cls:'st-done',     label:'Đã giao thành công'},
    {cls:'st-review',   label:'Chờ đánh giá'}
  ];

  if(orders.length===0){
    body.innerHTML='<div style="text-align:center;padding:60px 20px;color:var(--text2)">'
      +'<div style="font-size:48px;opacity:.5;margin-bottom:12px">📋</div>'
      +'<div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:6px">Chưa có đơn hàng nào</div>'
      +'<p>Hãy thêm đồ uống vào giỏ và đặt hàng!</p></div>';
  } else {
    body.innerHTML=orders.map(function(o){
      var step = o.trackStep||0;
      var st = STATUS_MAP[Math.min(step, STATUS_MAP.length-1)];
      var showTrack = (step < 4 || (step===4 && !o.reviewed));
      var items=o.items.map(function(it){ return it.emoji+' '+it.name+' x'+it.qty; }).join(', ');
      var trackBtn = showTrack
        ? '<button class="btn-track" onclick="dongDonHangCuaToi();moTheoDoi(\''+o.num+'\')">Theo dõi</button>'
        : '';
      var deleteBtn = '<button class="btn-delete-order" onclick="xacNhanXoaDon(\''+o.num+'\')" title="Xóa đơn này">🗑️</button>';
      return '<div class="oh-item" id="oh-'+o.num.replace('#','')+'">'
        +'<div class="oh-row1">'
        +'<div class="oh-num">'+o.num+'</div>'
        +'<div style="display:flex;align-items:center;gap:6px">'
        +'<div class="oh-date">'+o.date+'</div>'
        + deleteBtn
        +'</div>'
        +'</div>'
        +'<div class="oh-items">'+items+'</div>'
        +'<div class="oh-row2"><div class="oh-total">'+dinhDangTien(o.total)+'</div>'
        +'<div style="display:flex;align-items:center;gap:6px">'
        +'<div class="oh-status '+st.cls+'">'+st.label+'</div>'
        + trackBtn
        +'</div></div></div>';
    }).join('');
  }
  document.getElementById('ordersOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function dongDonHangCuaToi(){
  document.getElementById('ordersOverlay').classList.remove('open');
  document.body.style.overflow='';
}

var pendingDeleteNum = null;

function xacNhanXoaDon(num){
  pendingDeleteNum = num;
  document.getElementById('confirmTitle').textContent = 'Xóa đơn ' + num + '?';
  document.getElementById('confirmDesc').textContent  = 'Đơn hàng này sẽ bị xóa khỏi lịch sử. Hành động này không thể hoàn tác.';
  document.getElementById('confirmOkBtn').textContent = 'Xóa đơn';
  document.getElementById('confirmOkBtn').onclick = xoaDon;
  document.getElementById('confirmOverlay').classList.add('open');
}
function dongHopXacNhan(){
  document.getElementById('confirmOverlay').classList.remove('open');
  pendingDeleteNum = null;
}
function xoaDon(){
  if(!curUser || !pendingDeleteNum) return;
  var num = pendingDeleteNum;
  if(activeTrackingTimers[num]){
    activeTrackingTimers[num].forEach(function(t){ clearTimeout(t); });
    delete activeTrackingTimers[num];
  }
  curUser.orders = (curUser.orders||[]).filter(function(o){ return o.num !== num; });
  var all = JSON.parse(localStorage.getItem(USERS_KEY))||[];
  for(var i=0;i<all.length;i++){
    if(all[i].id===curUser.id){ all[i]=curUser; break; }
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(all));
  localStorage.setItem(SESSION_KEY, JSON.stringify(curUser));
  dongHopXacNhan();
  var card = document.getElementById('oh-'+num.replace('#',''));
  if(card){
    card.style.transition='all 0.3s ease';
    card.style.opacity='0';
    card.style.transform='translateX(40px)';
    card.style.maxHeight = card.offsetHeight+'px';
    setTimeout(function(){
      card.style.maxHeight='0';
      card.style.padding='0';
      card.style.margin='0';
      card.style.overflow='hidden';
      setTimeout(function(){ xemDonHangCuaToi(); }, 220);
    }, 250);
  } else {
    xemDonHangCuaToi();
  }
  hienThongBao('🗑️ Đã xóa đơn ' + num,'default');
}

function xemHoSo(){
  dongMenuNguoiDung();
  if(!curUser){ moDangNhap('login'); return; }
  var ini=layVietTat(curUser.name);
  document.getElementById('pmAv').textContent=ini;
  document.getElementById('pmAvName').textContent=curUser.name;
  document.getElementById('pmAvEmail').textContent=curUser.email;
  document.getElementById('pmName').value=curUser.name;
  document.getElementById('pmPhone').value=curUser.phone;
  document.getElementById('pmAddr').value=curUser.address||'';
  document.getElementById('profileOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function dongHoSo(){
  document.getElementById('profileOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function luuHoSo(){
  var name =document.getElementById('pmName').value.trim();
  var phone=document.getElementById('pmPhone').value.trim().replace(/\s/g,'');
  var addr =document.getElementById('pmAddr').value.trim();
  if(!name)                          { hienThongBao('⚠ Nhập họ tên!','warning'); return; }
  if(!/^[0-9]{9,11}$/.test(phone))  { hienThongBao('⚠ SĐT không hợp lệ!','warning'); return; }

  curUser.name=name; curUser.phone=phone; curUser.address=addr;
  var all=JSON.parse(localStorage.getItem(USERS_KEY))||[];
  for(var i=0;i<all.length;i++){ if(all[i].id===curUser.id){ all[i]=curUser; break; } }
  localStorage.setItem(USERS_KEY,JSON.stringify(all));
  localStorage.setItem(SESSION_KEY,JSON.stringify(curUser));

  capNhatHeader();
  dongHoSo();
  hienThongBao('✓ Cập nhật thành công!','success');
}

window.addEventListener('DOMContentLoaded', khoiTao);