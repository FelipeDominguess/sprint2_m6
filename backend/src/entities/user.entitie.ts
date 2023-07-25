import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

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
}

export { User };
