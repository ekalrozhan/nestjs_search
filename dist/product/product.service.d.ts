import { Product } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    all(): Promise<Product[]>;
    queryBuilder(alias: string): Promise<import("typeorm").SelectQueryBuilder<Product>>;
}
