import { CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { CartItem } from "./cartItem.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, (user) => user.cart)
    @JoinColumn({ name: "user_id" })
    user: User
    
    @OneToMany(() => CartItem, (cartItem) => cartItem.cart, { cascade: true, eager: true })
    cartItems: CartItem[]

    get cartTotalPrice(): number {
        return this.cartItems?.reduce((sum, item) => sum + item.cartItemTotalPrice, 0) || 0
    }

    @CreateDateColumn()
    createdAt: Date 

    @UpdateDateColumn()
    updatedAt: Date
}