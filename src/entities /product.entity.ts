import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductImage } from "./productImage.entity";
import { Category } from "./category.entity";
import { CartItem } from "./cartItem.entity";
import { OrderItem } from "./orderItem.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    name: string
 
    @Column("text") 
    description: string

    @Column("decimal")
    price: number

    @Column("int")
    stock: number

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: "category_id" })
    category: Category

    @OneToMany(() => ProductImage, (productImage) => productImage.product, { cascade: true })
    images: ProductImage[]

    @OneToMany(() => CartItem, (cartItem) => cartItem.product, { cascade: true })
    cartItems: CartItem[]   

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product, { cascade: true })
    orderItems: OrderItem[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}   