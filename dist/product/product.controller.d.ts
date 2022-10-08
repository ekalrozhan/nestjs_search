import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    frontend(): Promise<import("./product.entity").Product[]>;
    backend(): Promise<import("./product.entity").Product[]>;
}
