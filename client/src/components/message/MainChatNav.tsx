import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const MainChatNav = () => {
  const [data,setData] = useState<string>()
      const params = useParams();

  useEffect(() => {
    const id = params.id;

    fetch(`http://localhost:8080/chat-page/friend/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then((data) => {
            setData(data.data.email)
            console.log("Server Response Status:", data);
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
        });

        console.log("This is an ID: ", id);
    }, [params]);
  
  return (
    <div
    className='shadow-xl px-5 py-2 border-t-[1px] border-x-[1px] rounded-t-lg'
    >
        <div
        className='flex flex-row justify-between'
        >
            <div
            className='w-12 h-12 bg-[#E5E5E5] cursor-pointer flex justify-center items-center rounded-lg'
            >
                
            </div>
            <div>
                <h2
                className='text-base font-semibold uppercase'
                >{data}</h2>
            </div>
        </div>
    </div>
  )
}

export default MainChatNav