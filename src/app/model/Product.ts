import { ProductType } from "./ProductType";

export interface Product {

    title: string;
    description: string;
    vendor: string;
    type: ProductType;
}