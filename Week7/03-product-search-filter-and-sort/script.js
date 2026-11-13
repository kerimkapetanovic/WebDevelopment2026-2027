
// Example 3: Filtering, Searching and Sorting

// Array of product objects
const products = [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 80 },
    { name: "Monitor", price: 250 },
    { name: "Laptop", price: 900 },
    { name: "Headphones", price: 60 },
    { name: "USB Cable", price: 15 }
];

// Display products on the webpage
function showProducts(productArray) {
    const list = document.getElementById("productList");
    const count = document.getElementById("count");

    list.innerHTML = "";

    productArray.forEach((product) => {
        const item = document.createElement("li");

        item.textContent =
            product.name + " - $" + product.price;

        list.appendChild(item);
    });

    count.textContent =
        "Products found: " + productArray.length;
}

// Filter and sort products
function filterProducts() {
    const search = document.getElementById("search").value.toLowerCase().trim();
    const rawMaxPrice = document.getElementById("maxPrice").value;
    const sort = document.getElementById("sort").value;

    // Create a new array containing matching products
    let results = products.filter((product) => {
        const matchesName =
            product.name.toLowerCase().includes(search);

        const matchesPrice =
            rawMaxPrice === "" || product.price <= Number(rawMaxPrice);

        return matchesName && matchesPrice;
    });

    // Sort products by price
    if (sort === "low") {
        results.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        results.sort((a, b) => b.price - a.price);
    } else if (sort === "abc") {
        results.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sort === "zyx") {
        results.sort((a, b) => b.name.localeCompare(a.name));
    }

    showProducts(results);
}

// Apply filters
document.getElementById("filterBtn").addEventListener("click", filterProducts);

// Reset filters
document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("search").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("sort").value = "default";

    showProducts(products);
});

// Show all products when the page loads
showProducts(products);
