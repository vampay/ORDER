const express = require("express");
const router = express.Router();
// Import Controller
const{postTimestam,updateTimestam,DeleteTimestam,getTimestam,getTimestamID}=require("../controllers/orderController");
// APIs Routing Config
router.post("/",postTimestam);
router.put("/:id",updateTimestam);
router.delete("/:id",DeleteTimestam);
router.get("/",getTimestam);
router.get("/:id",getTimestamID);
// Export router
module.exports = router;
