import axios from 'axios';
import React from 'react';
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { BsFillCameraFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const EditProfile = () => {
    const [files, setFiles] = React.useState([])
    const { newUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    //image drag and drop
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })
    const image1 = files?.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} className='w-28 h-28 rounded-full object-cover' alt="preview" />
            </div>
        </div>
    ))

    const formdata = new FormData();
    formdata.append('image', files?.[0])

    const onSubmit = data => {


        if (files?.length > 0) {
            axios.post('https://api.imgbb.com/1/upload?&key=a1a59ec813f7ab9889dd822f6f1ceaba', formdata)
                .then((response) => {
                    if (response) {
                        if (data?.mobile?.length > 0) {
                            if (data?.mobile?.length > 11 || data?.mobile?.length < 11 || !data?.mobile?.startsWith("01")) {
                                swal("Opps!!", "Mobile Number Must be 11 number or please start with 01 !!!", "info");
                            } else {
                                data.['image'] = `${response.data.data.image.url}`;
                                axios.put(`https://powermallapi.herokuapp.com/users/${newUser._id}`, data)
                                    .then(res => {
                                        swal("Yo!!!", "Profile successfully updated!!!", "success");
                                        navigate('/profile/account')
                                        window.location.reload()
                                    }).catch((err) => {
                                        swal("Something went wrong!", `${err.message}`, "error")
                                    })
                            }
                        }else{
                            data.['image'] = `${response.data.data.image.url}`;
                            axios.put(`https://powermallapi.herokuapp.com/users/${newUser._id}`, data)
                                .then(res => {
                                    swal("Yo!!!", "Profile successfully updated!!!", "success");
                                    navigate('/profile/account')
                                    window.location.reload()
                                }).catch((err) => {
                                    swal("Something went wrong!", `${err.message}`, "error")
                                })
                        }
                        

                    }

                })
                .catch((error) => {
                    alert('try agian')
                })
        } else {

            if(data?.mobile?.length > 0){
                if (data?.mobile?.length > 11 || data?.mobile?.length < 11 || !data?.mobile?.startsWith("01")) {
                    swal("Opps!!", "Mobile Number Must be 11 number or please start with 01 !!!", "info");
                } else {
                    axios.put(`https://powermallapi.herokuapp.com/users/${newUser._id}`, data)
                        .then(res => {
                            swal("Yo!!!", "Profile successfully updated!!!", "success");
                            navigate('/profile/account')
                            window.location.reload()
                        }).catch((err) => {
                            swal("Something went wrong!", `${err.message}`, "error")
                        })
                }
            }else{
                axios.put(`https://powermallapi.herokuapp.com/users/${newUser._id}`, data)
                    .then(res => {
                        swal("Yo!!!", "Profile successfully updated!!!", "success");
                        navigate('/profile/account')
                        window.location.reload()
                    }).catch((err) => {
                        swal("Something went wrong!", `${err.message}`, "error")
                    })
            }
            


        }
    };


    return (
        <>
            <div>
                <div className="mt-10 sm:mt-0 mb-12 lg:mb-4">
                    <div className="grid grid-cols-1 md:gap-6">

                        <div className="mt-5 md:mt-0" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=" overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 sm:px-6 bg-gray-100 flex justify-between">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                                    </div>

                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        {/* image  */}
                                        <div className='mb-4 flex flex-col items-center space-y-4 w-48' {...getRootProps()}>
                                            {files?.length > 0 ? (
                                                <div>{image1}</div>
                                            ) : (
                                                <img className='w-28 h-28 rounded-full object-cover' src={newUser?.image} alt={newUser?.name} />
                                            )}
                                            <div className="flex border border-gray-200 px-4 rounded-lg space-x-3 py-2 items-center h-full ">
                                                <BsFillCameraFill className="text-3xl text-gray-600" />
                                                <span className="text-gray-600 font-semibold">Change Photo</span>
                                            </div>
                                            <input className="input-primary" {...getInputProps()} placeholder="Upload Your Files" />

                                        </div>

                                        <div className="flex flex-col space-y-3">
                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    className="input2"
                                                    defaultValue={newUser?.name} {...register("name")}
                                                />
                                            </div>

                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6'>
                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        className="input2"
                                                        value={newUser?.email}
                                                    />
                                                </div>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="number"
                                                        className="input2"
                                                        defaultValue={newUser?.mobile && newUser?.mobile}
                                                        {...register("mobile")}
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6'>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                                        Age
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="age"
                                                        className="input2"
                                                        defaultValue={newUser?.age && newUser?.age}
                                                        {...register("age")}
                                                    />
                                                </div>

                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                                        Gender
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="gender"
                                                        className="input2"
                                                        defaultValue={newUser?.gender && newUser?.gender}
                                                        {...register("gender")}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                    Address
                                                </label>
                                                <textarea name="address" id="address" className="mt-1 ring-blue-200 focus:outline-none focus:ring-2 transition duration-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md py-3 h-32 resize-x-none px-4" {...register("address")}
                                                    defaultValue={newUser?.address && newUser?.address}
                                                ></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 w-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-blue-200"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EditProfile
