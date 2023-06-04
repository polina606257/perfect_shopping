import { v4 as uuidv4 } from "uuid";

class Category {
  id: string;
  name: string;
  image: string;
  counter = 0;

  constructor(name: string, image: string) {
    this.id = uuidv4();
    this.name = name;
    this.image = image;
  }
}

export default Category;
