import axios from 'axios';
import React from 'react';

const CookiePolicyScreen = () => {
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/cookie')
            .then(res => setItem(res.data[0]))
    }, [])

    return (
        <div>
            <div className="preview my-16 pb-8  max-w-screen-xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: item?.html }}></div>
        </div>
    )
}

export default CookiePolicyScreen
