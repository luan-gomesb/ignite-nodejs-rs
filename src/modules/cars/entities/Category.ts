import { v4 as uuidv4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
/* linka a nossa entidade categoria a tabela do banco de dados categories
para o type ORM */
@Entity("categories")
class Category {
  /* define coluna como primaria para o typeorm */
  @PrimaryColumn()
  id?: string;
  /* MArca que é a coluna da nossa tabela */
  @Column()
  name: string;
  @Column()
  description: string;

  /* marca que é uma coluna com timestamp, para esse time stamp ser definido pelo banco de dados ao invés de colocar com new Date() */
  @CreateDateColumn()
  created_at: Date;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    if (!this.id) {
      this.id = uuidv4();
    }
    // if (!this.created_at) {
    // passado para o banco atraves do typeorm
    //   this.created_at = new Date();
    // }
  }

}
export default Category;