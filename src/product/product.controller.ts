import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('api/products')
export class ProductController {

    constructor(private productService: ProductService){

    }
    @Get('frontend')
    async frontend(){
        return this.productService.all();
    }

    @Get('backend')
    async backend(){
        const builder = await this.productService.queryBuilder('products')
        return await builder.getMany()
    }
}
