"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_seeder_1 = require("nestjs-seeder");
const product_entity_1 = require("./product.entity");
const product_seeder_1 = require("./product.seeder");
(0, nestjs_seeder_1.seeder)({
    imports: [
        typeorm_1.TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'nest_search',
            entities: [product_entity_1.Product],
            synchronize: true,
        }),
        typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product])
    ],
}).run([product_seeder_1.ProductSeeder]);
//# sourceMappingURL=seeder.js.map