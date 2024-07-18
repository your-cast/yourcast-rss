import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('shows')
export class ShowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  artwork: string;

  @Column()
  format: string;

  @Column()
  link: string;

  @Column()
  timezone: string;

  @Column()
  language: string;

  @Column()
  explicit: boolean;

  @Column()
  category: string;

  @Column()
  tags: string;

  @Column()
  author: string;

  @Column()
  podcast_owner: string;

  @Column()
  email_owner: string;

  @Column()
  copyright: string;

  @Column()
  token: string;

  @Column()
  status: string;

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
