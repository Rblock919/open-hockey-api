import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Assist')
export class AssistEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;
}
