import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";

export enum UserRoles {
    ADMIN = "admin",
    USER = "user"   
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { unique: true })
    username: string

    @Column("varchar", { unique: true })
    email: string

    @Column('varchar')
    password: string

    @Column({
        type: "enum",
        enum: UserRoles,
        default: UserRoles.USER
    })
    UserRoles: UserRoles

    @OneToOne(() => Cart, (cart) => cart.user, { cascade: true })
    cart: Cart

    @OneToOne(() => Order, (order) => order, { cascade: true })
    order: Order
   
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}