const Products = [
    {
        ProductName: 'Smartphone',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '50',
    },
    {
        ProductName: 'Laptop',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '20',
    },
    {
        ProductName: 'Headphones',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '30',
    },
    {
        ProductName: 'Smart Watch',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '15',
    },
    {
        ProductName: 'Bluetooth Speaker',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '5',
    },
    {
        ProductName: 'Camera',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '25',
    },
    {
        ProductName: 'Printer',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '18',
    },
    {
        ProductName: 'Tablet',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '8',
    },
    {
        ProductName: 'External Hard Drive',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '12',
    },
    {
        ProductName: 'Wireless Mouse',
        ProductNumber: '35611',
        AvailableStock: '200',
        Sold: '110',
        Delivered: '10',
        PendingDelivery: '7',
    },
];

const productDataElement = document.querySelector('.Products tbody');
const showAllButton = document.querySelector('.Products a');
const searchInput = document.getElementById('searchInput');

// Function to generate product table rows
const generateProductRows = (productList) => {
    productDataElement.innerHTML = '';

    productList.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.ProductName}</td>
            <td>${product.ProductNumber}</td>
            <td>${product.AvailableStock}</td>
            <td>${product.Sold}</td>
            <td>${product.Delivered}</td>
            <td>${product.PendingDelivery}</td>
        `;
        productDataElement.appendChild(row);

        // Add a CSS class to set the row color
        if (product.Delivered < product.PendingDelivery) {
            row.classList.add('warning');
        } else {
            row.classList.add('primary');
        }

        productDataElement.appendChild(row);
    });
};

// Function to show all products
const showAllProducts = () => {
    generateProductRows(Products);
};

// Display only 1 product by default
const defaultProducts = Products.slice(0, 10);
generateProductRows(defaultProducts);

// Event listener for "Show All" button click
showAllButton.addEventListener('click', showAllProducts);

// Event listener for search input
searchInput.addEventListener('input', searchProducts);

function searchProducts() {
    // Get the search input value
    const searchValue = searchInput.value.toLowerCase();

    // Filter the products based on the search value
    const filteredProducts = Products.filter((product) => {
        return (
            product.ProductName.toLowerCase().includes(searchValue) ||
            product.ProductNumber.toLowerCase().includes(searchValue)
        );
    });

    // Generate rows for the filtered products
    generateProductRows(filteredProducts);
}
