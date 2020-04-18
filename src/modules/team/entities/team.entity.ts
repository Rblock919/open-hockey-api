import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Team')
export class TeamEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;

  @Column('varchar', { length: 3, unique: true })
  abbr: string;
}
