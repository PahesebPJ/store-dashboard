const configTables = [
    {
        name: "Product",
        description: "Here you can register, delete or update products to sell in the store, also you could search by products",
        route: "content",
        apiCall: "/products",
            inputs: [
                {
                    label: "Product",
                    id: "name",
                    type: "text",
                    placeholder: "Product name"
                },
                {
                    label: "Description",
                    id: "description",
                    type: "text",
                    placeholder: "Product description"
                },
                {
                    label: "Product price",
                    id: "price",
                    type: "number",
                    placeholder: "Price"
                },
                {
                    label: "Product Category",
                    id: "category",
                    type: "text",
                    placeholder: "Category"
                },
                {
                    label: "Discount code",
                    id: "discount",
                    type: "number",
                    placeholder: "Discount code"
                },
                {
                    label: "Product brand",
                    id: "brand",
                    type: "text",
                    placeholder: "Brand"
                }
            ]
    },
    {
        name: "User",
        description: "Here you can see users register in the system",
        route: "content",
        apiCall: "/user",
        inputs: [
            {
                label: "Product",
                id: "name",
                type: "text",
                placeholder: "Product name"
            },
            {
                label: "Description",
                id: "description",
                type: "text",
                placeholder: "Product description"
            },
            {
                label: "Product price",
                id: "price",
                type: "text",
                placeholder: "Price"
            },
        ]
    },
    {
        name: "Shopping Cart",
        description: "Products register in shopping cart",
        route: "content",
        apiCall: "/cart"
    },
    {
        name: "Order",
        description: "Here you can see orders register from database",
        route: "content",
        apiCall: "/order"
    },
    {
        name: "Order details",
        description: "Here you can register, delete or update products to sell in the store, also you could search by products",
        route: "content",
        apiCall: "/orderDetails"
    },
    {
        name: "Inventory",
        description: "Here you can register, delete or update products to sell in the store, also you could search by products",
        route: "content",
        apiCall: "/inventory"
    },
    {
        name: "Discount",
        description: "Here you can register, delete or update products to sell in the store, also you could search by products",
        route: "content",
        apiCall: "/discount"
    },
    {
        name: "Cart item",
        description: "Here you can register, delete or update products to sell in the store, also you could search by products",
        route: "content",
        apiCall: "/cartItem"
    },
];

export default configTables;