import { useEffect, useState } from "react"

interface studentListType{
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

const Sidebar = () => {
    const [studentList ,setStudentList] = useState<studentListType[]>([]);

    useEffect(()=>{
        fetch("http://localhost:8080/student-list")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Convert response to JSON
        })
        .then(data => {
            setStudentList(data.message)
            console.log("List of students:", data.message);
            console.log(studentList)
        })
        .catch(err => {
            console.error('Error fetching student list:', err);
        });
    },[])

  return (
    <div className='px-4  h-full flex flex-col'>

        <div className=' flex flex-row items-center gap-2 border-b-[1px] py-4 w-full'>
            <input type="text" className='outline-none border-[#6A9C7D] border-[1px] rounded-md p-[5px] h-full w-full' placeholder='search'/> 
            <button type='submit' className='w-8 h-8 bg-black'>s</button>
        </div>

        <div className='pt-2 pb-3 flex flex-col max-h-full h-full overflow-hidden '>
            <h3 className='text-base font-semibold'>Friends</h3>

            <div className='pt-4 flex overflow-auto bg-[#F1F5F9] h-full flex-col rounded-lg gap-2'>
                {studentList.map((value,index)=>(
                    <div className='flex flex-row justify-center items-center self-baseline gap-2 cursor-pointer overflow-x-auto' key={index}>
                        <div
                        className='w-10 h-10 bg-[#E5E5E5] rounded-lg flex justify-center items-center cursor-pointer'
                        >s</div>
                        <p className='self-start '>{value.email}</p>
                    </div>
                ))}
                
                

            </div>
            
        </div>

    </div>
  )
}

export default Sidebar