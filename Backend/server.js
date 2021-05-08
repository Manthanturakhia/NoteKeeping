import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 8000;
import cookieParser from "cookie-parser";
import session from "express-session";
import jwt from "jsonwebtoken";

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//app.use(cookieParser);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.use(
  session({
    key: "userId",
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
*/
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "notemaking",
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert = "Insert into users values (?,?,?,?)";
  db.query(sqlInsert, [username, name, email, password], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = "select username from users where username=? AND password=?";

  db.query(user, [username, password], (err, result) => {
    console.log(result);
    if (result.length == 0) {
      res.status(400).send("not found");
      console.log("not found");
    } else {
      console.log("found");
      //req.session.user = result;
      //console.log(req.session.user);
      //res.status(200).send(result.data);
      return res.json(result);
    }
  });

  if (!user) {
    return res.status(401).send("User not found");
    //return res.json({status:'error', error: 'Invalid username/password'})
  }
});

app.get("/", (req, res) => res.status(200).send("testing"));

app.get("/getNotes", async (req, res) => {
  const username = req.query.username;
  console.log("user", username);
  const notes = "select noteid,title,body from notes where username=? order by noteid desc";
  db.query(notes, [username], (err, result) => {
    if (result.length > 0) {
      return res.json(result);
    } else {
      console.log(err);
      res.status(403).send(err);
    }
  });
});

app.post("/addNotes", (req, res) => {
  
  const username = req.body.username;
  const title = req.body.title;
  const body = req.body.body;
  console.log(username)
  const sqlInsert = "INSERT INTO notes(username, title, body) VALUES (?,?,?)";
  db.query(sqlInsert, [username,title,body], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

app.post("/deleteNote", (req, res) => {
  
  const username = req.body.username;
  const id = req.body.id;
  
  console.log(username)
  const sqlDelete = "DELETE FROM notes WHERE username=? AND noteid=? ";
  db.query(sqlDelete, [username,id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});


app.get("/getNoteFromId", async (req, res) => {
  const id = req.query.id;
  
  const notes = "select noteid,title,body from notes where noteid=?";
  db.query(notes, [id], (err, result) => {
    if (result.length > 0) {
      return res.json(result);
    } else {

      console.log(err);
      res.status(403).send(err);
    }
  });
});

app.post("/updateNoteById", (req, res) => {
  
 
  const id = req.body.noteid;
  const title = req.body.title;
  const body = req.body.body
  
  console.log(id)
  console.log(title)
  const sqlDelete = "UPDATE notes SET title=?,body=? WHERE noteid=? ";
  db.query(sqlDelete, [title,body,id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/getAllUsers", async (req, res) => {
  const username = req.query.username;
  
  const getUsers = "SELECT * FROM users WHERE username not in (?)";
  db.query(getUsers, [username], (err, result) => {
    if (result.length > 0) {
      return res.json(result);
    } else {

      console.log(err);
      res.status(403).send(err);
    }
  });
});


app.post("/setAccess", (req, res) => {
  
 
  const noteid = req.body.noteid;
  const susername = req.body.susername;
  const ousername = req.body.ousername;
  const access = req.body.access;
  console.log(noteid,susername,ousername,access)
  const setAccess = "INSERT INTO permissions(noteid, susername, ousername, access) VALUES (?,?,?,?)";
  db.query(setAccess, [noteid,susername,ousername,access], (err, result) => {
    if (err) {
      res.status(500).send(err);
      console.log(err)
    } else {
      res.status(200).send(result);
      
    }
  });
});


app.listen(port, () => console.log(`listening on ${port}`));
