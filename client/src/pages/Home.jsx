import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6'

function Home() {
    return (
        <>
            <div className='w-screen'>
                <div className='w-screen md:w-3/4 m-auto'>
                    <div className="flex p-5">
                        <div className="w-full p-[25px] md:w-1/2">
                            <h1 className="text-3xl text-blue-500">Bucsis Digital Solutions</h1>
                            <p className="text-lg">
                                Transforming your business with Technology
                            </p>
                            <p className="text-[#aaa]">
                                Expert consulting and development for Web Applications and API Integrations
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center m-5">
                        <a className="p-5 bg-purple-800 rounded-lg" href="#contact-us">Contact Us</a>
                    </div>
                </div>
            </div>
            <hr className='border-[#777]'/>
            <div className='w-screen md:w-3/4 m-auto'>
                <div className="h-screen">
                </div>
            </div>
            <hr className='border-[#777]'/>
            <div className='w-screen md:w-3/4 m-auto'>
                <div id="contact-us" className="md:flex mt-5">
                    <div className="md:w-1/2 p-5">
                        <h1 className="text-3xl text-blue-500">Ready to take your business to the next level?</h1>
                        <p className="text-lg pt-5 pb-5">Let BDS bring your digital vision to life. Whether you're looking to build something new, refine an existing process, or just looking for some information, we are here to help.</p>
                        <div className='flex items-center'>
                            <FaEnvelope color='#aa77dd' className='m-2'/>
                            <a className="align-middle" href="mailto:rbucsis@bucsisdigital.ca">rbucsis@bucsisdigital.ca</a>
                        </div>
                        <div className='flex items-center'>
                            <FaPhone color='#aa77dd' className='m-2'/>
                            <a className="align-middle" href="tel:13065397239">(306) 539-7239</a>
                        </div>
                        <div className='flex items-center'>
                            <FaWhatsapp color='#aa77dd' className='m-2'/>
                            <a className="align-middle" href="https://wa.me/13065397239">Contact us on WhatsApp</a>
                        </div>
                    </div>
                    <form className="md:w-1/2 md:p-5 mb-2">
                        <div className='flex'>
                            <div className='w-1/2 m-1'>
                                <input placeholder='First Name' className='w-full p-2 rounded-lg'></input>
                            </div>
                            <div className='w-1/2 m-1'>
                                <input placeholder='Last Name' className='w-full p-2 rounded-lg'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 m-1'>
                                <input placeholder='Email' className='w-full p-2 rounded-lg'></input>
                            </div>
                            <div className='w-1/2 m-1'>
                                <input placeholder='Phone' className='w-full p-2 rounded-lg'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-full m-1'>
                                <textarea placeholder='Message' className='w-full resize-y h-[125px] p-2 rounded-lg'></textarea>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='p-5 rounded-lg bg-purple-800 w-1/4'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home;