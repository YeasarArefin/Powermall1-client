import axios from 'axios'
import React from 'react'
import Footer from '../components/Footer/Footer'

const TermsScreen = () => {
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        axios.get('https://powermallapi.herokuapp.com/termsandconditions')
            .then(res => setItem(res.data[0]))
    }, [])

    return (
        <div>
            <div className="preview my-16 pb-8 max-w-screen-xl mx-auto px-6 text-justify" dangerouslySetInnerHTML={{ __html: item?.html }}></div>
            <Footer />

        </div>
    )
}

export default TermsScreen
