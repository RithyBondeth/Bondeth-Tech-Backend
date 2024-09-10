import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    imageUrl: string
    
    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn({ name: "product_id" })
    product: Product

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date    
}