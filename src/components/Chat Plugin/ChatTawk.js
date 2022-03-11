import React from 'react';
import TawkTo from 'tawkto-react';

function ChatTawk(props) {
    React.useEffect(() => {

        var tawk = new TawkTo('622a193aa34c2456412a6e0d', "1ftq75431")

        tawk.onStatusChange((status) => {
            console.log(status)
        })

    }, [])

    return (
        <div>
            
        </div>
    );
}

export default ChatTawk;


