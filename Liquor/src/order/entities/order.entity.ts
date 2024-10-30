import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Liquor } from '../../liquor/entities/liquor.entity'; // Asegúrate de ajustar la ruta

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column({ type: 'date' })
    orderDate: Date;

    @Column()
    eventServed: string;

    @ManyToOne(() => Liquor, (liquor) => liquor.orders)
    liquor: Liquor;
}
