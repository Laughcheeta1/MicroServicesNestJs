import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../../order/entities/order.entity'; // Asegúrate de ajustar la ruta

@Entity()
export class Liquor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    stockLevel: number;

    @Column()
    supplierContact: string;

    @Column()
    reorderThreshold: number;

    @OneToMany(() => Order, (order) => order.liquor)
    orders: Order[];
}
