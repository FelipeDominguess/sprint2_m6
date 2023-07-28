import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  registrationDate: Date;
  contacts: any;

 
}

export { User };
