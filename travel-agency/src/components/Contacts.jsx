import React from 'react'

const Contacts = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h1 className="text-center text-xl text-gray-700">Send us a message</h1>
            <p className="text-center text-gray-700 py-2">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="photo"
                    className="w-full md:h-full max-h-[500px] h-[200px] object-cover p-2" />
                <form>
                    <div className="grid grid-cols-2 gap-2">
                        <input className='border border-slate-900 focus:border-none rounded m-2 p-2' type="text" placeholder='First Name' />
                        <input className='border border-slate-900 focus:border-none rounded m-2 p-2' type="text" placeholder='Last Name' />
                        <input className='border border-slate-900 focus:border-none rounded m-2 p-2' type="email" placeholder='Email' />
                        <input className='border border-slate-900 focus:border-none rounded m-2 p-2' type="tel" placeholder='Phone' />
                        <textarea className="col-span-2 border border-slate-900 focus:border-none rounded m-2 p-2" cols="30" rows="11" placeholder='Information'></textarea>
                        <button className="col-span-2 m-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
