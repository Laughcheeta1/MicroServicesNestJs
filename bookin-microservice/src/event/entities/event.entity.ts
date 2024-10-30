import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EventC {
    @PrimaryGeneratedColumn({name: "id"})
    EventId: number;

    @Column({name: "name"})
    EventName: string;

    @Column({name: "date"})
    EventDate: Date;

    @Column({name: "guest_name"})
    GuestName: string;

    @Column({name: "guest_email"})
    GuestEmail: string;

    @Column({name: "guest_count"})
    GuestCount: number;

    @Column({name: "special_requests"})
    SpecialRequests: string;
}
