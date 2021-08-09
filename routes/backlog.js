const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");
const validInfo = require("../middleware/validInfo");

// get backlog

router.get("/", authorize, async (req, res) => {
  try {
    const backlog = await pool.query(
      "SELECT users.user_id, user_name, game_id, date_added, game_name, game_image FROM backlog INNER JOIN users ON backlog.user_id = users.user_id WHERE users.user_id = $1",
      [req.user.id]
    );

    console.log("req user is: ", backlog.rows);
    res.json(backlog.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

router.post("/", validInfo, async (req, res) => {
  try {
    const { game_id, user_id, date, game_name, game_image } = req.body;
    console.log(req.body);
    const game = await pool.query(
      "SELECT * FROM backlog WHERE game_id = $1 AND user_id = $2",
      [game_id, user_id]
    );

    if (game.rows.length !== 0) {
      return res.status(401).json("This game is already in your backlog!");
    }

    const newGame = await pool.query(
      "INSERT INTO backlog (game_id, date_added, user_id, game_name, game_image) VALUES ($1, $2, $3, $4, $5);",
      [game_id, date, user_id, game_name, game_image]
    );
    console.log("the post is:", newGame);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
