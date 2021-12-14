import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import fs from "fs";
import { parse } from "csv-parse";


interface ICategory {
  name: string,
  description: string
}
class ImportCategoriesUseCase {
  //crepositorios como dependencia

  constructor(private categoryRepository: ICategoryRepository) {

  }

  loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse({ delimiter: ";" });
      stream.pipe(parseFile);
      parseFile.on("data", async (linha) => {
        const [name, description] = linha;
        categories.push({ name, description });
      }).on("end", () => {
        //apaga o arquivo da pasta após utilizar
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on("error", (err) => {
        reject(err)
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(({ name, description }) => {
      const alreadExist = this.categoryRepository.findByName(name);
      if (!alreadExist) {
        this.categoryRepository.create({ name, description });
      }
    });
    // { categoryList }: ICategoryList
    // categoryList.map(({ name, description }) => { this.categoryRepository.create({ name, description }) });
  }

}
export { ImportCategoriesUseCase }