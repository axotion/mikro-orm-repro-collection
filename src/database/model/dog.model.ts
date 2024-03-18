import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Owner } from "./owner.model";

@Entity()
export class Dog {
  @PrimaryKey()
  id: number;

  @Property()
  nickname: string;

  @ManyToOne(() => Owner)
  owner: Owner;
}
