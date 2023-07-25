import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  registrationDate: Date;

  @ManyToOne(() => User, (user: { contacts: any; }) => user.contacts)
  @JoinColumn({ name: "user_id" })
  user: User;
}

export { Contact };
