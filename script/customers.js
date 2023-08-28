const customers = [
    {
        CustomerName: 'ABC PLACE',
        ContactPerson: 'JOHN',
        contactdetails: '0712 345678',
        location: 'WESTLANDS'
    },
    {
        CustomerName: 'SARIT CENTER',
        ContactPerson: 'JANE',
        contactdetails: '0712 123456',
        location: 'WESTLANDS'
    },
    {
        CustomerName: 'THE MALL',
        ContactPerson: 'DAVID',
        contactdetails: '0712 123456',
        location: 'WESTLANDS'
    },
    {
        CustomerName: 'THE HUB',
        ContactPerson: 'OLOO',
        contactdetails: '0712 123456',
        location: 'KAREN'
    },
    {
        CustomerName: 'JUNCTION MALL',
        ContactPerson: 'SAM',
        contactdetails: '0712 123456',
        location: 'GONG ROAD'
    },
    {
        CustomerName: 'TOYOTA CENTER',
        ContactPerson: 'KATE',
        contactdetails: '0712 123456',
        location: 'INDUSTRIAL AREA'
    },
    {
        CustomerName: 'JUJA CITY MALL',
        ContactPerson: 'KEN',
        contactdetails: '0712 123456',
        location: 'JUJA'
    },
    {
        CustomerName: 'ANANAS MALL',
        ContactPerson: 'SIMON',
        contactdetails: '0712 123456',
        location: 'THIKA'
    },
    {
        CustomerName: 'TWO RIVERS MALL',
        ContactPerson: 'MBETE',
        contactdetails: '0712 123456',
        location: 'RUAKA'
    },
    {
        CustomerName: 'MOUNTAIN VIEW MALL',
        ContactPerson: 'KATE',
        contactdetails: '0712 123456',
        location: 'KANGEMI'
    },
    
];

const customerDataElement = document.getElementById('customer-data');
const showAllButton = document.querySelector('.customers a');

// Function to generate customer table rows
const generateCustomerRows = (customerList) => {
    customerDataElement.innerHTML = '';

    customerList.forEach((customer) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.CustomerName}</td>
            <td>${customer.ContactPerson}</td>
            <td>${customer.contactdetails}</td>
            <td>${customer.location}</td>
            <td class="warning"></td>
        `;
        customerDataElement.appendChild(row);
    });
};

// Function to show all customers
const showAllCustomers = () => {
    generateCustomerRows(customers);
};

// Display only 10 customers by default
const defaultCustomers = customers.slice(0, 10);
generateCustomerRows(defaultCustomers);

// Event listener for "Show All" button click
showAllButton.addEventListener('click', showAllCustomers);