import express, { Router } from "express";
import createCategoryController from "../modules/cars/useCases/createCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";
// import { importCategoriesController } from '../modules/cars/useCases/importCategories'
import multer from "multer";
// rota : /categories
const categoriesRouter = Router();
categoriesRouter.use(express.json());

// ListCategory
categoriesRouter.get('/', (request, response) => {
  listCategoriesController().handle(request, response);
});
//  createcategory
categoriesRouter.post('/', (request, response) => {
  createCategoryController().handle(request, response);
});

// configuracao multer
const uploadMulter = multer({
  dest: "./tmp"
});

// //import de imagens
// categoriesRouter.post("/import", uploadMulter.single('file'), (request, response) => {
//   importCategoriesController.handle(request, response);
//   // const { file } = request;
//   // console.log(file);
//   // return response.send("import de arquivo");

// });

export { categoriesRouter };