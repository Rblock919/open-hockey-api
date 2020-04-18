import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Game')
export class GameEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 50, unique: true })
  name: string;
}
