const { Router } = require("express");
const router = Router();

router.get("/view", (req, res) => {});
router.post("/create", (req, res) => {});
router.put("/update", (req, res) => {});
router.delete("/delete", (req, res) => {});

router.post("/purchase", (req, res) => {});

router.get("/purchased", (req, res) => {});

module.exports = router;
