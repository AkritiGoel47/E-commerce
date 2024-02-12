function getProductKeyFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('key');
}

function populateProductDetails() {
    const productKey = getProductKeyFromUrl();
    const productDetailsContainer = document.getElementById("productDetailsContainer");

    const products = new Map([
        ["product1", {
            image: "https://www.jiomart.com/images/product/original/rv41dhm0me/bullmer-olive-front-and-back-printed-colourblock-baggy-oversized-tshirt-for-men-product-images-rv41dhm0me-0-202308010843.jpg?im=Resize=(330,410)",
            title: "HERE&NOW",
            description: "This is a stylish and comfortable T-shirt that you'll love!",
            rating: 4.6,
            price: 599,
            discountedPrice: 799,
            sizes: ["small", "medium", "large"]
        }],
        ["product2", {
            image: "https://assets.ajio.com/medias/sys_master/root/20231116/2SxL/65563613ddf779151989eea5/-473Wx593H-469534194-red-MODEL.jpg",
            title: "PUMA",
            description: "This is a stylish and comfortable Shoe that you'll love!",
            rating: 3.6,
            price: 5999,
            discountedPrice: 7000,
            sizes: ["UK-6", "UK-7", "UK-8", "UK-9", "UK-9", "UK-10"]
        }],
        ["product3", {
            image: "https://imagescdn.planetfashion.in/img/app/product/7/794482-9329925.jpg?auto=format&w=494.40000000000003",
            title: "LOUIS PHILLIPE",
            description: "This is a stylish and comfortable Shirt that you'll love!",
            rating: 4.8,
            price: 999,
            discountedPrice: 1299,
            sizes: ["small", "medium", "large"]
        }],
        ["product4", {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJV_OlftpxpussTwV7em9WcnS9EI0k-CJ16gOH6WI79gEQMhaAUQk5nJPGk-QMzR-NaQ&usqp=CAU",
            title: "LEVI'S",
            description: "This is a stylish and comfortable Jeans that you'll love!",
            rating: 4.8,
            price: 999,
            discountedPrice: 1299,
            sizes: ["28", "30", "32"]
        }],
        ["product5", {
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/h/5/h/xl-sdes624a-325-manyavar-original-imagkx7qh9bympzn.jpeg?q=90&crop=true",
            title: "MANYAVAR",
            description: "This is a stylish and comfortable kurtas that you'll love!",
            rating: 4.8,
            price: 999,
            discountedPrice: 1299,
            sizes: ["small", "medium", "large"]
        }],
        ["product6", {
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/trouser/9/v/f/34-pctpcctfm96250-peter-england-original-imagkc83xyjhvhfp.jpeg?q=90",
            title: "FLYING MACHINE",
            description: "This is a stylish and comfortable Trousers that you'll love!",
            rating: 4.8,
            price: 999,
            discountedPrice: 1299,
            sizes: ["28", "30", "32"]
        }],


    ]);

    const product = products.get(productKey);

    if (product) {
        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = product.image;

        const productTitle = document.createElement("h1");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        const productDescription = document.createElement("p");
        productDescription.classList.add("product-description");
        productDescription.textContent = product.description;

        const productRating = document.createElement("div");
        productRating.classList.add("review");
        productRating.innerHTML = `<span>&#9733;(${product.rating})</span>`;

        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = `₹${product.price}`;

        const productStrike = document.createElement("strike");
        productStrike.innerHTML = `₹${product.discountedPrice} <br>`;

        const productSizeSelect = document.createElement("select");
        productSizeSelect.name = "size";
        const sizeOptions = product.sizes.map(size => `<option value="${size}">${size}</option>`).join('');
        productSizeSelect.innerHTML = `<option value="select size">select size</option>${sizeOptions}`;

        productDetailsContainer.appendChild(productImage);
        productDetailsContainer.appendChild(productTitle);
        productDetailsContainer.appendChild(productDescription);
        productDetailsContainer.appendChild(productRating);
        productDetailsContainer.appendChild(productPrice);
        productDetailsContainer.appendChild(productStrike);
        productDetailsContainer.appendChild(productSizeSelect);
    } else {
        const errorParagraph = document.createElement("p");
        errorParagraph.textContent = "Product not found, please explore other products";
        productDetailsContainer.appendChild(errorParagraph);
    }
}

window.onload = populateProductDetails;