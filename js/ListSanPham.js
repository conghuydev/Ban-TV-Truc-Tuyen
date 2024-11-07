const products = [
    {
        name: "Tivi Samsung 4K",
        image: "/img/android-tivi-tcl-4k-65-inch-l65c8-sl1.jpg",
        price: 14999999,
        size: "65 inch",
        resolution: "4K"
    },
    {
        name: "Tivi LG 4K",
        image: "/img/LG.png",
        price: 18999999,
        size: "55 inch",
        resolution: "4K"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 17999999,
        size: "75 inch",
        resolution: "4K"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/google-tivi-tcl-4k-50-inch-50p755.jpg",
        price: 11999999,
        size: "50 inch",
        resolution: "4K"
    },
    {
        name: "Tivi Samsung ",
        image: "/img/google-tivi-qled-tcl-65-inch-65q636-2.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "HD"
    },
    {
        name: "Tivi LG ",
        image: "/img/android-tivi-4k-tcl-55-inch-55p618-7.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "HD"
    },
    {
        name: "Tivi Sony Bravia ",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "HD"
    },
    {
        name: "Tivi Xiaomi Mi TV ",
        image: "/img/xiaomi.png",
        price: 12000000,
        size: "50 inch",
        resolution: "HD"
    },
    {
        name: "Tivi Samsung  ",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "FULL HD"
    },
    {
        name: "Tivi LG  ",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "FULL HD"
    },
    {
        name: "Tivi Sony Bravia ",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "FULL HD"
    },
    {
        name: "Tivi Xiaomi Mi TV ",
        image: "/img/xiaomi.png",
        price: 12000000,
        size: "50 inch",
        resolution: "FULL HD"
    },
    {
        name: "Tivi Samsung QLED 4K",
        image: "/img/tivi-tcl-43-inch-43p755.jpg",
        price: 15000000,
        size: "65 inch",
        resolution: "4K"
    },
    {
        name: "Tivi LG OLED 4K",
        image: "/img/android-tivi-qled-tcl-4k-55-inch-55c815.jpg",
        price: 20000000,
        size: "55 inch",
        resolution: "4K"
    },
    {
        name: "Tivi Sony Bravia 4K",
        image: "/img/sámung.png",
        price: 18000000,
        size: "75 inch",
        resolution: "4K"
    },
    {
        name: "Tivi Xiaomi Mi TV 4K",
        image: "/img/xiaomi.png",
        price: 12000000,
        size: "50 inch",
        resolution: "4K"
    }
    // Thêm các sản phẩm khác nếu cần
];
let cart = [];
let displayedProducts = 8;
// Hàm hiển thị danh sách sản phẩm
function displayProducts(filteredProducts = products) {
    const productListContent = document.getElementById('product-list-content');
    productListContent.innerHTML = ''; // Xóa nội dung cũ
    filteredProducts.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        // Chuyển đến trang chi tiết khi click vào productItem (trừ nút "Thêm vào giỏ hàng")
        productItem.addEventListener('click', function () {
            window.location.href = `ChiTietSanPham.html?productIndex=${index}`;
        });

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-size">Kích thước: ${product.size}</p>
            <p class="product-resolution">Độ phân giải: ${product.resolution}</p>
            <p class="product-price">${product.price.toLocaleString()} VNĐ</p>
            <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${index})">Thêm vào giỏ hàng</button>
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
// Hàm hiển thị nút "Xem thêm"
function showMoreButton(filteredProducts) {
    const productListContent = document.getElementById('product-list-content');
    const showMoreButton = document.createElement('button');
    showMoreButton.className = 'btn btn-secondary mt-3';
    showMoreButton.innerText = 'Xem thêm';
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
            image: "/img/xiaomi.png",
            price: 12000000,
            size: "50 inch",
            resolution: "4K UHD"
        },
        // Thêm các sản phẩm khác nếu cần
    ];
    
    let cart = [];
    let displayedProductsCount = 4; // Số lượng sản phẩm hiển thị ban đầu
    
    // Hàm hiển thị danh sách sản phẩm
    function displayProducts(filteredProducts = products) {
        const productListContent = document.getElementById('product-list-content');
        productListContent.innerHTML = ''; // Xóa nội dung cũ
    
        // Hiển thị sản phẩm dựa trên số lượng đã định
        filteredProducts.slice(0, displayedProductsCount).forEach((product, index) => {
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
    
        // Kiểm tra nếu có sản phẩm để hiển thị thêm
        const loadMoreButton = document.getElementById('load-more');
        if (filteredProducts.length > displayedProductsCount) {
            loadMoreButton.style.display = 'block'; // Hiển thị nút "Xem thêm"
        } else {
            loadMoreButton.style.display = 'none'; // Ẩn nút "Xem thêm"
        }
    }
    
    // Hàm load thêm sản phẩm
    function loadMoreProducts() {
        displayedProductsCount += 4; // Tăng số lượng sản phẩm hiển thị
        displayProducts(products); // Cập nhật danh sách sản phẩm hiển thị
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
    
    showMoreButton.onclick = () => {
        displayProducts(products); // Hiển thị lại toàn bộ sản phẩm
        showMoreButton.style.display = 'none'; // Ẩn nút "Xem thêm" sau khi nhấn
    };
    productListContent.appendChild(showMoreButton);
}
// Hàm lọc sản phẩm theo tên
function filterProducts(brand) {
    const filteredProducts = products.filter(product => product.name.includes(brand));
    displayProducts(filteredProducts);
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
displayProducts();

// Hàm lọc sản phẩm theo kích thước
function filterBySize(size) {
    const filteredProducts = products.filter(product => product.size === size);
    displayProducts(filteredProducts);
}

// Hàm lọc sản phẩm theo độ phân giải
function filterByResolution(resolution) {const filteredProducts = products.filter(product => product.resolution === resolution);
    displayProducts(filteredProducts);
}

// Hàm hiển thị lại tất cả sản phẩm
function resetFilters() {
    displayProducts(products); // Hiển thị lại tất cả sản phẩm
}
// Hàm lọc sản phẩm theo khoảng giá
function filterByPrice(minPrice, maxPrice) {
    const filteredProducts = products.filter(product => product.price >= minPrice && product.price < maxPrice);
    displayProducts(filteredProducts);
}

// Hàm hiển thị lại tất cả sản phẩm
function resetFilters() {
    displayProducts(products); // Hiển thị lại tất cả sản phẩm
}
