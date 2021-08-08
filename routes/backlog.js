const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// get backlog

router.get("/", authorize, async (req, res) => {
  try {
    const backlog = await pool.query(
      "SELECT user_name, game_id, date_added FROM backlog INNER JOIN users ON backlog.user_id = users.user_id WHERE users.user_id = $1",
      [req.user.id]
    );

    console.log("req user is: ", backlog.rows);
    res.json(backlog.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// router.post("/addGame", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await pool.query("SELECT * FROM backlog WHERE user_id = users(user_id)", [
//       email,
//     ]);

//     if (user.rows.length !== 0) {
//       return res.status(401).json("User already exists");
//     }

//     const newGame = await pool.query(
//       "INSERT INTO backlog (game_id, date_added, user_id) VALUES (360, '2021-08-08', 'e5daae2d-cfa2-49ac-a9f6-203ec4a9d783');",
//       [name, email, bcryptPassword]
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
