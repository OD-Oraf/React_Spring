import { useState, useEffect } from 'react';
import './App.css';

import { getAllStudents } from "./client";

function App() {
    const[students, setStudents] = useState([]);

    const fetchStudents = () =>
        getAllStudents()
            //response sent back from api call
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //Load student data into state
                setStudents(data);
            })


    //when component loads call fetch students
    useEffect(() => {
        console.log("Component is mounted");
        fetchStudents();
    },[]);

    return <p> {students.length} </p>;


}

export default App;
