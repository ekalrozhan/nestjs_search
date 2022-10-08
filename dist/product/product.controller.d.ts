import { ProductService } from './product.service';
import { Request } from 'express';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    frontend(): Promise<import("./product.entity").Product[]>;
    backend(req: Request): Promise<import("./product.entity").Product[]>;
}
