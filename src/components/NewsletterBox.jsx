import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gary-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita unde ut libero enim, quos odio temporibus veniam obcaecati officia eum quidem voluptates in provident rerum assumenda suscipit eius eaque!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsletterBox