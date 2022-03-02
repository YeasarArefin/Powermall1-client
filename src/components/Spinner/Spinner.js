import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div className="flex flex-col h-3/4 justify-center items-center">
            <ClipLoader color="#F59E0B" loading={loading} size={150} />
        </div>
    )
}

export default Spinner
