const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
    const url = "mongodb://0.0.0.0:27017"
    MongoClient.connect(url, (err, database) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const dbo = database.db("student_management");
            const data = { "_id": req.body.rno, "name": req.body.name, "marks": req.body.marks }
            dbo.collection('students').insertOne(data, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            })
        }
    })
})
app.get("/read", (req, res) => {
    const url = "mongodb://0.0.0.0:27017"
    MongoClient.connect(url, (err, database) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const dbo = database.db("student_management");
            dbo.collection('students').find({}).toArray((err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            })
        }
    })
})
app.delete("/remove", (req, res) => {
    const url = "mongodb://0.0.0.0:27017"
    MongoClient.connect(url, (err, database) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const dbo = database.db("student_management");
            const data = { "_id": req.body.rno };
            dbo.collection('students').deleteOne(data, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            })
        }
    })
})
app.put("/update", (req, res) => {
    const url = "mongodb://0.0.0.0:27017"
    MongoClient.connect(url, (err, database) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            const dbo = database.db("student_management");
            const data = { "name": req.body.name, "marks": req.body.marks };
            dbo.collection('students').updateOne({ "_id": req.body.rno }, { $set: data }, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            })
        }
    })
})
app.listen(9000, () => { console.log('Server up and running at Port 9000!') })