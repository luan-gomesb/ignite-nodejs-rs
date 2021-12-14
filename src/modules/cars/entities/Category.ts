import { v4 as uuidv4 } from 'uuid'

class Category {
  uuid?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    if (!this.uuid) {
      this.uuid = uuidv4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }

}
export default Category;