
const useLoader = () => {
  return (
    <div>useLoader</div>
  )
}

export default useLoader

export const userLoader = async () => {
    try {
        const response = await fetch("http://localhost:8080/student-list");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching student list: ", error);
        return null; // Return null in case of an error
    }
}