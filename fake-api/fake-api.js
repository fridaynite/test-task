const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const userObject = {
  name: "",
  email: "johndoe@gmail.com",
  password: "qwerty",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === userObject.email && password === userObject.password) {
    const { password, ...rest } = userObject;

    res.json({ ...rest });
  } else {
    res.status(400).json("Wrong credentials");
  }
});

app.put("/profile/name", (req, res) => {
  const { name } = req.body;

  userObject.name = name;

  const { password, ...rest } = userObject;

  res.json({ ...rest });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
