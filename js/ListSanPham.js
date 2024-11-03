const products = [
    {
        name: "Tivi Samsung QLED 4K",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi LG OLED 4K",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/xiaomi_tv.png",
        price: 12000000,
        size: "50 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Samsung QLED 4K",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi LG OLED 4K",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/xiaomi_tv.png",
        price: 12000000,
        size: "50 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Samsung QLED 4K",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi LG OLED 4K",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/xiaomi_tv.png",
        price: 12000000,
        size: "50 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Samsung QLED 4K",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi LG OLED 4K",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "4K UHD"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/xiaomi_tv.png",
        price: 12000000,
        size: "50 inch",
        resolution: "4K UHD"
    }
    // Thêm các sản phẩm khác nếu cần
];

let cart = [];

// Hàm hiển thị danh sách sản phẩm
function displayProducts() {
    const productListContent = document.getElementById('product-list-content');
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-size">Kích thước: ${product.size}</p>
            <p class="product-resolution">Độ phân giải: ${product.resolution}</p>
            <p class="product-price">${product.price.toLocaleString()} VNĐ</p>
            <button class="btn btn-primary" onclick="addToCart(${index})">Thêm vào giỏ hàng</button>
        `;

        productListContent.appendChild(productItem);
    });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product); // Thêm sản phẩm vào giỏ hàng
    updateCartDisplay(); // Cập nhật hiển thị giỏ hàng
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productIndex) {
    cart.splice(productIndex, 1); // Xóa sản phẩm theo chỉ số
    updateCartDisplay(); // Cập nhật hiển thị giỏ hàng
}

// Hàm cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total');
    const cartItemsContainer = document.getElementById('cart-items');

    cartCount.textContent = cart.length;

    // Cập nhật danh sách sản phẩm trong giỏ hàng
    cartItemsContainer.innerHTML = ''; // Xóa nội dung cũ
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toLocaleString()} VNĐ`;
        
        // Thêm nút xóa cho từng sản phẩm
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.className = 'btn btn-danger btn-sm';
        removeButton.addEventListener('click', function() {
            removeFromCart(index); // Gọi hàm xóa khi nhấn nút
        });

        li.appendChild(removeButton); // Thêm nút xóa vào danh sách
        cartItemsContainer.appendChild(li);
        total += item.price; // Cộng dồn tổng tiền
    });

    totalPrice.textContent = total.toLocaleString() + ' VNĐ'; // Cập nhật tổng tiền
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
displayProducts();
