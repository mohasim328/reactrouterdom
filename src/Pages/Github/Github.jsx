import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();


  // const [data, setData] = useState([]);
  // useEffect( () =>{

  //   fetch('https://api.github.com/users/mohasim328')
  //   .then( (response) => {
  //      return response.json()})
  //   .then( (data) => {
  //     console.log(data)
  //     setData(data);
  //   })

  // } ,[])


  return (
    <div className="w-full">
    <div className='max-w-6xl container flex justify-center items-center h-80 bg-gray-700'>
        follower : {data.followers}

        <img src={data.avatar_url} alt="pic" width={300}/>
    </div>
</div>
  )
}

export default Github
 
export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/mohasim328');
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
};


