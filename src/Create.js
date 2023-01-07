import { useState, useRef } from "react";
import axios from "axios";
function Create() {
    const rRno = useRef();
    const [rno, setRno] = useState("");
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    const hRno = (event) => { setRno(event.target.value); }
    const hName = (event) => { setName(event.target.value); }
    const hMarks = (event) => { setMarks(event.target.value); }

    const save = (event) => {
        event.preventDefault();
        let urladd = "http://localhost:9000/create"
        axios.post(urladd, { rno, name, marks })
            .then(res => {
                if (res.data.insertedId) {
                    alert('Record Created')
                    setRno("")
                    setName("")
                    setMarks("")
                    rRno.current.focus();
                }
                else {
                    alert('Roll No: ' + rno + 'already exists!')
                    setRno("")
                    setName("")
                    setMarks("")
                    rRno.current.focus();
                }
            })
    }
    return (
        <>
            <center>
                <h1>Create Entry</h1>
                <form onSubmit={save}>
                    <input type="number" placeholder="Enter your roll no" onChange={hRno} value={rno} ref={rRno} />
                    <br /><br />
                    <input type="text" placeholder="Enter your name" onChange={hName} value={name} />
                    <br /><br />
                    <input type="number" placeholder="Enter your marks" onChange={hMarks} value={marks} />
                    <br /><br />
                    <input type="submit" value="Save" />
                </form>
            </center>

        </>
    );
}
export default Create;