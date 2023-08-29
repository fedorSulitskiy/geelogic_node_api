const {
  show,
  show_by_id,
  find_contributed_algos,
  find_bookmarked_algos,
} = require("./II.controller");

const router = require("express").Router();

router.post("/show", show);
router.post("/show_by_id", show_by_id);
router.post("/find_contributed_algos", find_contributed_algos);
router.post("/find_bookmarked_algos", find_bookmarked_algos);

module.exports = router;
