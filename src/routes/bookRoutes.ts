
import { addNewBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers";
import { Router } from "express";

const router:Router = Router();

router.get('/books',getBooks);

router.get('/books/:id',getBookById);

router.post('/books', addNewBook);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);

export default router;