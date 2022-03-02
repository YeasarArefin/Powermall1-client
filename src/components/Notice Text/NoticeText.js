/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

function NoticeText({ notice}) {
    return (
        <div className="">
            <marquee behavior="scroll" direction="left" className="bg-white rounded-full p-3 mt-6 text-sm">{notice.notice}</marquee>
        </div>
    );
}

export default NoticeText;