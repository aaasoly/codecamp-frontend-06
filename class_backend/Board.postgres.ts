import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity() // board class 를 테이블로 만들어 달라
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // 중복되지 않는, 자동으로 증가(increment)하는 컬럼, id는 uuid
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  //deletedAt: Date
  // 실제로 삭제되는 것이 아니라 Date에 저장, 조회할 땐 Date가 비어있는 애들만 조회
  // soft-delete
}
