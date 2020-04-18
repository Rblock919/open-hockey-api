import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Roster')
export class RosterEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;
}
