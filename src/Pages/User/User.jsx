import { useParams } from "react-router-dom"
export default function User() {

    const { userid } = useParams();
    return (
        <div className="w-full">
            <div className='max-w-3xl text-white container flex justify-center items-center bg-gray-700 h-40'>
                User:{userid}
            </div>
        </div>
    )
}


