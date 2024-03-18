import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property
} from "@mikro-orm/core";
import { Cat } from "./cat.model";
import { Dog } from "./dog.model";

@Entity()
export class Owner {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @OneToMany({
    entity: () => Dog,
    mappedBy: (dog: Dog) => dog.owner,
  })
  dogs = new Collection<Dog>(this);

  @OneToMany({
    entity: () => Cat,
    mappedBy: (cat: Cat) => cat.owner,
  })
  cats = new Collection<Cat>(this);
}
