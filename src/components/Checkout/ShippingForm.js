import React, { useState } from 'react'
import Input from '../Contact/Input'
import AreaSelect from './AreaSelect'
import DistrictSelect from './DistrictSelect'
import DivisionSelect from './DivisionSelect'

const placeholder = [
    { name: 'Select your district' },
]

const ShippingForm = () => {
    const [selected, setSelected] = useState(placeholder[0])

    return (
        <div className='my-6'>
            <form action="" className='flex flex-col space-y-3'>
                {/* name      */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="name" className='text-gray-500 text-sm'>Full Name</label>
                    <Input type="text" name="name" id="name" placeholder="Enter your first and last name" />
                </div>

                {/* email  */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="number" className='text-gray-500 text-sm'>Phone Number</label>
                    <Input type="number" name="number" id="number" placeholder="Enter your phone number" />
                </div>

                {/* division select   */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="number" className='text-gray-500 text-sm'>Select Division </label>
                    <DivisionSelect />
                </div>

                {/* district select   */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="number" className='text-gray-500 text-sm'>Select District </label>
                    <DistrictSelect selected={selected} setSelected={setSelected} />
                </div>

                {/* area select  */}
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="number" className='text-gray-500 text-sm'>Select Area </label>
                    <AreaSelect selectedID={selected.division_id} />
                </div>

                {/* button  */}
                <div className='flex justify-end pt-4'>
                    <button className='px-6 w-36 py-3 rounded-lg bg-primary text-white hover:bg-blue-500 transition duration-300'>Save</button>
                </div>

            </form> 
        </div>
    )
}

export default ShippingForm
