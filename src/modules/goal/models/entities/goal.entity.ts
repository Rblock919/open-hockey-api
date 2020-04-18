import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Goal')
export class GoalEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;
}
