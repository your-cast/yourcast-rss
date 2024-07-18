import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('episodes')
export class EpisodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  @Column('bigint', {
    name: 'show_id',
  })
  showId: number;

  @CreateDateColumn()
  @Column('date', {
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn()
  @Column('date', {
    name: 'updated_at',
  })
  updatedAt: Date;
}
