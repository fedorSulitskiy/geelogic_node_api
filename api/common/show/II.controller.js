const {
  show,
  show_by_id,
  find_contributed_algos,
  find_bookmarked_algos,
} = require("./I.service");
const logger = require("../../../logger/logger");

module.exports = {
  show: (req, res) => {
    const body = req.body;
    show(body, (err, results) => {
      if (err) {
        logger.error(`"${err}" - 500`);
        return res.status(500).send("Database connection error");
      }
      logger.info('"POST node_api/show" - 200');
      return res.status(200).send(results);
    });
  },
  show_by_id: (req, res) => {
    const body = req.body;
    show_by_id(body, (err, results) => {
      if (err) {
        logger.error(`"${err}" - 500`);
        return res.status(500).send("Database connection error");
      }
      logger.info('"POST node_api/show_by_id" - 200');
      return res.status(200).send(results);
    });
  },
  find_contributed_algos: (req, res) => {
    const body = req.body;
    find_contributed_algos(body, (err, results) => {
      if (err) {
        logger.error(`"${err}" - 500`);
        return res.status(500).send("Database connection error");
      }
      logger.info('"POST node_api/find_contributed_algos" - 200');
      return res.status(200).send(results);
    });
  },
  find_bookmarked_algos: (req, res) => {
    const body = req.body;
    find_bookmarked_algos(body, (err, results) => {
      if (err) {
        logger.error(`"${err}" - 500`);
        return res.status(500).send("Database connection error");
      }
      logger.info('"POST node_api/find_bookmarked_algos" - 200');
      return res.status(200).send(results);
    });
  },
};
