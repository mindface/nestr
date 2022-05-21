// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity()
// export class Task {
//   @PrimaryGeneratedColumn()
//   readonly task_id: number;

//   @Column('varchar', { length: 20, nullable: false })
//   title: string;

//   @Column('date', { nullable: false })
//   due_date: Date;

//   @Column('tinyint', { width: 1, default: 1 })
//   status: number;

//   @CreateDateColumn()
//   readonly create_at?: Date;

//   @UpdateDateColumn()
//   readonly update_at?: Date;
// }
