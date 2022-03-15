/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

function NoticeText({ notice}) {
    return (
        <div className=" bg-white rounded-full px-5 mt-6 py-2">
            <marquee behavior="scroll" direction="left" className="text-sm mt-2">{notice.notice}</marquee>
        </div>
    );
}

export default NoticeText;