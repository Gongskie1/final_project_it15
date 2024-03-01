import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {io} from "socket.io-client";

interface studentListType{
    id: number;
    about_me: string;
    age: string;
    department: string;
    email: string;
    password: string;
    profile_pic:string;
    program: string;
    status: string;
    username: string;
}

const socket = io("http://localhost:8080");
const Sidebar = () => {
    
    const [studentList ,setStudentList] = useState<studentListType[]>([]);
    const storedValue = localStorage.getItem("student");
    const username = storedValue ? JSON.parse(storedValue) : null;
    

    useEffect(()=>{
        fetch(`http://localhost:8080/student-list/${username.id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setStudentList(data.message)
            // console.log("List of students:", data.message);
        })
        .catch(err => {
            console.error('Error fetching student list:', err);
        });
    },[]);
    
   
    const joinRoomFunc = () =>{
        socket.emit("join_room", username.id);
    }
  return (
    <div className='px-4  h-full flex flex-col'>

        {/* <div className=' flex flex-row items-center gap-2 border-b-[1px] py-4 w-full'>
            <select name="" id="">
                
            </select>
        </div> */}

        <div className='pt-2 pb-3 flex flex-col max-h-full h-full overflow-hidden '>
            <h3 className='text-base font-semibold'>Friends</h3>

            <div className='pt-4 flex overflow-auto bg-[#F1F5F9] h-full flex-col rounded-lg gap-2'>
                {studentList.map((value,index)=>(
                    <Link className='flex flex-row justify-center items-center self-baseline gap-2 cursor-pointer overflow-x-auto' key={index}
                    onClick={() =>  joinRoomFunc()} 
                    to={`friend/${value.id}`}>
                        <div
                        className='w-10 h-10 bg-[#E5E5E5] rounded-lg flex justify-center items-center cursor-pointer'
                        >s</div>
                        <p className='self-start '>{value.email}</p>
                    </Link>
                ))}
                
                

            </div>
            
        </div>

    </div>
  )
 
}

export default Sidebar
