// Mở modal đăng nhập khi nhấn vào "Đăng nhập"
document.getElementById("login").onclick = function() {
    openLoginModal();
};

// Mở modal đăng ký khi nhấn vào "Đăng ký"
document.getElementById("signup").onclick = function() {
    openSignupModal();
};

// Hàm mở modal đăng nhập
function openLoginModal() {
    document.querySelector(".login-modal").style.display = "block";
    document.querySelector(".signup-modal").style.display = "none";
}

// Hàm mở modal đăng ký
function openSignupModal() {
    document.querySelector(".signup-modal").style.display = "block";
    document.querySelector(".login-modal").style.display = "none";
}

// Đóng modal khi nhấn vào nút "X"
function closeModal() {
    document.querySelector(".login-modal").style.display = "none";
    document.querySelector(".signup-modal").style.display = "none";
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function(event) {
    if (event.target.classList.contains("login-modal") || event.target.classList.contains("signup-modal")) {
        closeModal();
    }
};

// Kiểm tra đăng nhập
document.getElementById("login-button").onclick = function(e) {
    e.preventDefault(); // Ngăn chặn form submit
    const phone = document.getElementById("phone-login").value;
    const password = document.getElementById("password-login").value;

    // Kiểm tra thông tin
    if (phone === "") {
        document.querySelector(".phonelog").innerText = "Vui lòng nhập số điện thoại.";
    } else {
        document.querySelector(".phonelog").innerText = "";
    }

    if (password === "") {
        document.querySelector(".form-message-check-login").innerText = "Vui lòng nhập mật khẩu.";
    } else {
        document.querySelector(".form-message-check-login").innerText = "";
    }

    if (phone && password) {
        // Xử lý đăng nhập
        alert("Đăng nhập thành công!");
        closeModal();
    }
};

// Kiểm tra đăng ký
document.getElementById("signup-button").onclick = function(e) {
    e.preventDefault(); // Ngăn chặn form submit
    const phone = document.getElementById("phone-signup").value;
    const password = document.getElementById("password-signup").value;
    const confirmPassword = document.getElementById("confirm-password-signup").value;

    // Kiểm tra thông tin
    if (phone === "") {
        document.querySelector(".phonesignup").innerText = "Vui lòng nhập số điện thoại.";
    } else {
        document.querySelector(".phonesignup").innerText = "";
    }

    if (password === "") {
        document.querySelector(".form-message-check-signup").innerText = "Vui lòng nhập mật khẩu.";
    } else {
        document.querySelector(".form-message-check-signup").innerText = "";
    }

    if (confirmPassword === "") {
        document.querySelector(".form-message-check-confirm").innerText = "Vui lòng xác nhận mật khẩu.";
    } else {
        document.querySelector(".form-message-check-confirm").innerText = "";
    }

    if (password && confirmPassword && password !== confirmPassword) {
        document.querySelector(".form-message-check-confirm").innerText = "Mật khẩu không khớp.";
    }

    if (phone && password && confirmPassword && password === confirmPassword) {
        // Xử lý đăng ký
        alert("Đăng ký thành công!");
        closeModal();
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.container-left a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định (chuyển hướng)
            
            // Bỏ lớp 'active' khỏi tất cả các liên kết trước khi thêm vào liên kết hiện tại
            links.forEach(l => l.classList.remove('active'));
            // Thêm lớp 'active' vào liên kết hiện tại
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.container-left-2 input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const link = this.nextElementSibling.querySelector('a'); // Thẻ <a> bên trong label
            if (this.checked) {
                link.classList.add('active'); // Thêm lớp 'active' nếu checkbox được chọn
            } else {
                link.classList.remove('active'); // Xóa lớp 'active' nếu checkbox không được chọn
            }
        });
    });
});
function removeItem(button) {
    const item = button.parentElement;
    item.remove();
    updateTotal();
}

function updateTotal() {
    const items = document.querySelectorAll('#cart-items li');
    let total = 0;
    items.forEach(item => {
        const priceText = item.querySelector('span:last-child').textContent;
        const price = parseInt(priceText.split(' x ')[1].replace(' VNĐ', '').replace(/\./g, ''));
        total += price;
    });
    document.getElementById('total').textContent = total.toLocaleString() + ' VNĐ';
}

let cartCount = 0; // Biến để theo dõi số lượng sản phẩm trong giỏ hàng
function addToCart(product) {
    cartCount++; // Tăng số lượng sản phẩm trong giỏ hàng
    updateCartCount(); // Cập nhật số lượng hiển thị
    // Thêm mã để thêm sản phẩm vào giỏ hàng ở đây
}
function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount; // Cập nhật số lượng trong giỏ hàng
}

function removeItem(button) {
    // Lấy sản phẩm từ DOM và xóa nó
    const item = button.parentElement; // lấy phần tử cha chứa sản phẩm
    item.remove(); // xóa sản phẩm khỏi giỏ hàng

    cartCount--; // Giảm số lượng sản phẩm trong giỏ hàng
    updateCartCount(); // Cập nhật số lượng hiển thị
    // Cập nhật tổng tiền ở đây nếu cần
}
// Hàm mở modal giỏ hàng
function openCartModal() {
    document.querySelector('.cart-modal').style.display = 'flex'; // Hiển thị modal
}

// Hàm đóng modal giỏ hàng
function closeCartModal() {
    document.querySelector('.cart-modal').style.display = 'none'; // Ẩn modal
}

// Gán sự kiện click cho nút giỏ hàng
document.getElementById('cart-button').addEventListener('click', openCartModal);




