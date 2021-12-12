import React from 'react';
import { Route, Routes } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <Routes>
                <Route path="/profile/*" element={<h1>Profile</h1>} >
                    <Route path="account" element={<h2>Account</h2>} />
                </Route>
            </Routes>
        </>
    )
}

export default Profile
