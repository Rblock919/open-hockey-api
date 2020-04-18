import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('Player')
export class PlayerEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 25 })
  firstName: string;

  @Column('varchar', { length: 25 })
  lastName: string;

  @Column('varchar', { length: 2 })
  position: string;

  @Column('varchar', { length: 1 })
  shoots: string;
}

// player stats will be the abstract and extended class w/ union types, not player
