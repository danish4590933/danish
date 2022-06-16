import  express  from 'express';
import { dcreate, dcreate1,dcreate3 } from '../Controller/Back.js';

const router=express.Router();


router.get("/view",dcreate)
router.post("/create",dcreate1)
router.delete("/delete/:id",dcreate3);








export default router;








