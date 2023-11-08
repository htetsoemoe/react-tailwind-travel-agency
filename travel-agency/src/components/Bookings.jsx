import React from 'react'

const Bookings = () => {
    return (
        <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
            <form className="lg:flex lg:justify-between w-full items-center">
                <div className="flex flex-col my-2 py-2">
                    <label htmlFor="places">Destination</label>
                    <select name="places" id="places"
                        className="lg:w-[300px] md:w-full border rounded p-2">
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label htmlFor="check-in">Check-In</label>
                        <input type="date" id='check-in' name='check-in' className="border rounded p-2" />
                    </div>
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label htmlFor="check-out">Check-Out</label>
                        <input type="date" name="check-out" id="check-out" className='border rounded p-2' />
                    </div>
                </div>
                <div className="flex flex-col my-2 p-2 w-full">
                    <label htmlFor="available-button">Search</label>
                    <button className="w-full" id='available-button'>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    )
}

export default Bookings
