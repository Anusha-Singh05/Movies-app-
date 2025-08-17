import express from 'express';
import { getComments, createComment, deleteComment } from '../controllers/comment_controllers.js';


const router = express.Router();

router.get('"/:movie_id', getComments);
router.post("/", createComment);
router.delete("/:id", deleteComment)

export default router;