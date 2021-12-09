import React from 'react'

const Features = () => {
    const featuresData = [
        {
            id:1, 
            title: 'Express Delivery',
            subTitle: 'With Selected Items',
            image:'../../../assets/1.png',
            color:'text-blue-600'
        },
        {
            id:2, 
            title: 'Cash On Delivery',
            subTitle: 'With Selected Items',
            image:'../../../assets/2.png',
            color: 'text-green-600'
        },
        {
            id:3, 
            title: 'Gift Voucher',
            subTitle: 'With Selected Items',
            image:'../../../assets/3.png',
            color: 'text-pink-600'
        },
    ]


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12"> 
            {featuresData.map(feature => (
                <div key={feature.id} className="rounded-lg hover:shadow-xl transform hover:translate-y-4 overflow-hidden h-52 transition duration-500" style={{ background: `url(${feature?.image})`}}>
                    <div className="flex flex-col justify-center space-y-1 h-full p-6">
                        {/* text  */}
                        <div>
                            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                            <p className="text-sm text-white mb-2">{feature.subTitle}</p>
                        </div>

                        {/* button  */}
                        <div>
                            <button className={`bg-white w-28 px-3 py-2 mt-2 rounded-full ${feature.color} hover:scale-110 transform transition duration-300 text-sm`}  >Save Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features
