import React,{useState} from 'react'
import axios from 'axios'

export default function AddStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }

        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
            alert("Student Added")

            setName("");
            setAge("");
            setGender("");
            
        }).catch((err) =>{
            alert(err)
        })
    }

    return(
        <div>
            <form onSubmit={sendData}>

                <div>
                    <label for="name">Student Name</label>
                    <input type="text" id="name"
                    onChange={(e)=>{
                            setName(e.target.value);
                    }}/>
                </div>

                <div>
                    <label for="age">Age</label>
                    <input type="text" id="age"
                    onChange={
                        (e)=>{
                            setAge(e.target.value);
                    }}/>
                </div>

                <div>
                    <label for="gender">Gender</label>
                    <input type="text" id="gender"
                    onChange={(e)=>{
                            setGender(e.target.value);
                    }}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}