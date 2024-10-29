import express from "express";
import  userController from "../controllers/userController.js";
import posterController from "../controllers/posterController.js";
import upload from "../controllers/uploadFile.js";
const router = express.Router();

               //===== MEAN: signup =========
router.post("/Signup", userController.register); 
router.post("/login", userController.login);
router.get("/getUsers", userController.getUsers);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.get("/getUserById/:id", userController.getUserById);

              // ========= MEAN: poster ==========
router.post("/poster", upload.single("image"),posterController.createPoster);             
export default router;