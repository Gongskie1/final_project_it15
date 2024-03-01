import { Link, useLoaderData } from "react-router-dom"

interface UserData {
  email: string;
}
const Datas = () => {
  const sulod : UserData[] = useLoaderData() as UserData[];
  return (
    <div>
     {sulod.map((value,index)=>(
        <Link className='flex flex-row justify-center items-center self-baseline gap-2 cursor-pointer overflow-x-auto' key={index}
        // onClick={() => { setValues(value.email); } } 
        to={`friend/${index}`}>
            <div
            className='w-10 h-10 bg-[#E5E5E5] rounded-lg flex justify-center items-center cursor-pointer'
            >s</div>
            <p className='self-start '>{value.email}</p>
        </Link>
    ))}
    </div>
  )
}

export default Datas

export const userLoader = async () => {
    try {
        const response = await fetch("http://localhost:8080/student-list");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching student list: ", error);
        return null; 
    }
}