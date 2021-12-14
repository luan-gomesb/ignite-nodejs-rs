import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import express, { request, response, Router } from "express";
const specificationRepository = new SpecificationRepository();
const specificationSevice = new CreateSpecificationService(specificationRepository);

const specificationRouter = Router();
specificationRouter.use(express.json())

specificationRouter.get("/", (request, response) => {
  response.json(specificationRepository.all());
})

specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  specificationSevice.execute({ name, description });
  return response.status(201).send();

})




export { specificationRouter }