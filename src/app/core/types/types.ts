export interface ProductItem {
    id: string;
    name: string;
    description: string;
    price: number;
    duedate: string;
    category: ProductCategory;
}

export interface ProductCategory {
    id: string;
    name: string;
}

export enum ProductCategoryEnum {
    FOOD = 'food',
    DRINK = 'drink',
    ELECTRONIC = 'electronic',
    CLOTHES = 'clothes',
    OTHER = 'other',
}