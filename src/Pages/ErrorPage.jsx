import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <div className='flex justify-center items-center min-h-screen '>
                <div className=' flex flex-col justify-center items-center space-y-5 w-1/2 p-2'>
                    <img src="/images/Error.png" alt="Error image" />
                    <div className='text-xl'>
                        Oops!! Something must have gone wrong 🤔😢
                    </div>
                    <Link to="/">
                    <button className='bg-black text-white rounded-md p-2 hover:bg-yellow-200 hover:text-black transition duration-300'>
                        Back to home
                    </button>
                    </Link>
                </div>
            </div>




        </>
    )
}

export default ErrorPage
