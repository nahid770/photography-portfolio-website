import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='fs-1'>Wellcome to my Blog</h2>
            <h3 className='text-start fs-3'>1. What is difference between authorization and authentication?</h3>
            <p className='text-start'>Ans: authentication is the process of varifying someone who is he/she. and authorization is the process of 
             varifying what specific applications, files, and data a user has access or give permission.

            Simply the authenticaiton is the process of varifying who someone is 
            and authorization is the process of varifying what the user access to.</p>
            <h3 className='text-start fs-3'>2. Why we use Firebase?</h3>
            <p className='text-start'>Ans: Google Firebase is a google-backed application development software that enables developers 
            to develop IOS, Android and Web apps. firebase provides tools for tracking analysis, reporting and 
            fixing app crashes also works for authentication.</p>

            <h3 className='text-start fs-3'>3. What is the alternatives of firebase?</h3>
            <p className='text-start'> 
        Ans: There are a lots of alternative of firebase to implement authentication. some of them are
        parse, Back4App, Aws.

        Back4App is a reliable Firebase alternative that is an open source technology. It offer features like
        scalable hosting, storage, authentication.</p>

        <h3 className='text-start fs-3'>4. What other services does firebase provide other than authentication</h3>
        <p className='text-start'>Ans: Firebase provides tools for tracking analysis, reporting and fixing app crashes also works for authentication creating marketing and product experiment.</p>
 
        </div>
    );
};

export default Blog;