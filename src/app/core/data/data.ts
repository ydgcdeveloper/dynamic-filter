import { ProductCategoryEnum, ProductItem } from "../types/types";

export const PRODUCTS_DATA: ProductItem [] = [ 
    {
        id: '1',
        name: 'Apple',
        description: 'Fresh apple from the garden',
        price: 1.5,
        duedate: '2020-12-31',
        category: {
            id: '1',
            name: ProductCategoryEnum.FOOD
        }
    },
    {
        id: '2',
        name: 'Banana',
        description: 'Fresh banana from the garden',
        price: 2.5,
        duedate: '2020-12-31',
        category: {
            id: '1',
            name: ProductCategoryEnum.FOOD
        }
    },
    {
        id: '3',
        name: 'Orange',
        description: 'Fresh orange from the garden',
        price: 3.5,
        duedate: '2020-12-31',
        category: {
            id: '1',
            name: ProductCategoryEnum.FOOD
        }
    },
    {
        id: '4',
        name: 'Coca Cola',
        description: 'Fresh coca cola from the factory',
        price: 1.5,
        duedate: '2020-12-31',
        category: {
            id: '2',
            name: ProductCategoryEnum.DRINK
        }
    },
    {
        id: '5',
        name: 'Pepsi',
        description: 'Fresh pepsi from the factory',
        price: 2.5,
        duedate: '2020-12-31',
        category: {
            id: '2',
            name: ProductCategoryEnum.DRINK
        }
    },
    {
        id: '6',
        name: 'Fanta',
        description: 'Fresh fanta from the factory',
        price: 3.5,
        duedate: '2020-12-31',
        category: {
            id: '2',
            name: ProductCategoryEnum.DRINK
        }
    },
    {
        id: '7',
        name: 'Samsung Galaxy S20',
        description: 'The latest samsung galaxy s20',
        price: 1000,
        duedate: '2020-12-31',
        category: {
            id: '3',
            name: ProductCategoryEnum.ELECTRONIC
        }
    },
    {
        id: '8',
        name: 'Iphone 11',
        description: 'The latest iphone 11',
        price: 1200,
        duedate: '2020-12-31',
        category: {
            id: '3',
            name: ProductCategoryEnum.ELECTRONIC
        }
    },
    {
        id: '9',
        name: 'Macbook Pro',
        description: 'The latest macbook pro',
        price: 1500,
        duedate: '2020-12-31',
        category: {
            id: '3',
            name: ProductCategoryEnum.ELECTRONIC
        }
    },
    {
        id: '10',
        name: 'T-Shirt',
        description: 'The latest t-shirt',
        price: 10,
        duedate: '2020-12-31',
        category: {
            id: '4',
            name: ProductCategoryEnum.CLOTHES
        }
    },
    {
        id: '11',
        name: 'Jeans',
        description: 'The latest jeans',
        price: 20,
        duedate: '2020-12-31',
        category: {
            id: '4',
            name: ProductCategoryEnum.CLOTHES
        }
    },
    {
        id: '12',
        name: 'Jacket',
        description: 'The latest jacket',
        price: 30,
        duedate: '2020-12-31',
        category: {
            id: '4',
            name: ProductCategoryEnum.CLOTHES
        }
    },
    {
        id: '13',
        name: 'Book',
        description: 'The latest book',
        price: 5,
        duedate: '2020-12-31',
        category: {
            id: '5',
            name: ProductCategoryEnum.OTHER
        }
    },
    {
        id: '14',
        name: 'Notebook',
        description: 'The latest notebook',
        price: 2,
        duedate: '2020-12-31',
        category: {
            id: '5',
            name: ProductCategoryEnum.OTHER
        }
    },
    {
        id: '15',
        name: 'Pen',
        description: 'The latest pen',
        price: 1,
        duedate: '2020-12-31',
        category: {
            id: '5',
            name: ProductCategoryEnum.OTHER
        }
    }
]