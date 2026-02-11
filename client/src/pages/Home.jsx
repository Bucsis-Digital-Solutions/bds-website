import { FaEnvelope, FaPhone, FaWhatsapp, FaSquareUpwork } from 'react-icons/fa6'
import { SlSpeedometer } from "react-icons/sl";
import { PiArrowFatLinesUpFill, PiPlugsConnected } from "react-icons/pi";

function Home() {
    const sendMessage = (ev) => {
        ev.preventDefault()
        const form = document.getElementById('contact-form')
        const button = document.getElementById('send-button')
        button.disabled = true
        button.innerHTML = "Sending..."
        const data = {}
        const form_data = new FormData(form)
        form_data.forEach((v, k) => {
            data[k] = v
        })
        fetch('https://script.google.com/macros/s/AKfycbxJSaQNmrPLvYI7m3vjv3g5lUeyJTq2QMjHfP5HspZOwlJMapeccUBBqJkW9To-FBBRlw/exec', {
            "method": "POST",
            "headers": {
                "Content-Type": "text/plain"
            },
            "body": JSON.stringify(data)
        }).then((res) => {
            if (res.ok) {
                form.innerHTML="Thanks for reaching out! We'll get back to you shortly!"
            } else {
                form.innerHTML="Oops! Something went wrong. Please try again later."
            }
        }).catch((err) => {
            form.innerHTML="Oops! Something went wrong. Please try again later."
        })
    }

    return (
        <>
            <div className='w-screen border-b border-b-[#777] bg-[url(../public/background.png)] bg-cover'>
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
            <div className='border-b border-b-[#777]'>
                <div className='w-screen md:w-3/4 m-auto'>
                    <div className='p-5 mt-[50px] mb-[50px]'>
                        <h1 className='text-3xl text-blue-500 text-center'>Software Catered to How You Do Business</h1>
                        <p className='text-center text-lg p-5'>It's easy to find a tool that is good enough to do the job, but impossible to find one that does exactly what you need. We help design and build the software you need to manage your business efficiently and effectively.</p>
                    </div>
                    <div className='p-5 flex mt-[50px] mb-[50px]'>
                        <div className='flex w-1/2 justify-center'>
                            <SlSpeedometer size={200}/>
                        </div>
                        <div className='flex flex-col justify-center w-1/2'>
                            <h1 className='text-2xl text-blue-500 text-center'>Rapid Prototyping</h1>
                            <p className='text-center text-lg p-5'>Take your ideas and turn them into reality faster.</p>
                        </div>
                    </div>
                    <div className='p-5 flex mt-[50px] mb-[50px]'>
                        <div className='flex flex-col justify-center w-1/2'>
                            <h1 className='text-2xl text-blue-500 text-center'>Scale Up</h1>
                            <p className='text-center text-lg p-5'>Enhance your software to grow with you, not hold you back.</p>
                        </div>
                        <div className='flex w-1/2 justify-center'>
                            <PiArrowFatLinesUpFill size={200} />
                        </div>
                    </div>
                    <div className='p-5 flex mt-[50px] mb-[50px]'>
                        <div className='flex w-1/2 justify-center'>
                            <PiPlugsConnected size={200} />
                        </div>
                        <div className='flex flex-col justify-center w-1/2'>
                            <h1 className='text-2xl text-blue-500 text-center'>Automate and Integrate</h1>
                            <p className='text-center text-lg p-5'>Connect your infrastructure and automate your workflows to enhance your business</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-xl text-center bg-[#1A1036] p-5 mt-[50px]'>Some of the tools in the tool box</h1>
                <div className='flex flex-col md:flex-row md:justify-around items-center bg-[#1A1036] p-5 mb-[50px]'>
                    <a className='w-[250px] h-[50px]' href='https://www.appsmith.com/' target='_blank' rel='noreferrer'>
                        <img className='h-1/2 w-1/2 md:h-full md:w-full object-cover m-auto' src='appsmith-logo.png' alt='Appsmith Logo'></img>
                    </a>
                    <a className='w-[250px] h-[50px]' href='https://cloud.google.com/' target='_blank' rel='noreferrer'>
                        <img className='h-1/2 w-1/2 md:h-full md:w-full object-cover m-auto' src='gcloud-logo.png' alt='Google Cloud Logo'></img>
                    </a>
                    <a className='w-[250px] h-[50px]' href='https://about.appsheet.com/' target='_blank' rel='noreferrer'>
                        <img className='h-1/2 w-1/2 md:h-full md:w-full object-cover m-auto' src='appsheet-logo-transparent.png' alt='AppSheet Logo'></img>
                    </a>
                    <a className='w-[250px] h-[50px]' href='https://stripe.com/' target='_blank' rel='noreferrer'>
                        <img className='h-1/2 w-1/2 md:w-full md:h-full object-contain m-auto' src='stripe-logo.png' alt='Stripe Logo'></img>
                    </a>
                    <a className='w-[250px] h-[50px]' href='https://www.shopify.com/' target='_blank' rel='noreferrer'>
                        <img className='h-1/2 w-1/2 md:h-full md:w-full object-contain m-auto' src='shopify-logo.png' alt='Shopify Logo'></img>
                    </a>
                </div>
            </div>
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
                        <div className='flex items-center'>
                            <FaSquareUpwork color='#aa77dd' className='m-2'/>
                            <a className="align-middle" href="https://www.upwork.com/freelancers/robertbucsis">Find us on Upwork</a>
                        </div>
                    </div>
                    <form id='contact-form' className="md:w-1/2 md:p-5 mb-2">
                        <div className='flex'>
                            <div className='w-1/2 m-1'>
                                <input id='first_name' name='first_name' placeholder='First Name' className='text-[#222] w-full p-2 rounded-lg'></input>
                            </div>
                            <div className='w-1/2 m-1'>
                                <input id='last_name' name='last_name' placeholder='Last Name' className='text-[#222] w-full p-2 rounded-lg'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 m-1'>
                                <input id='email' name='email' placeholder='Email' className='text-[#222] w-full p-2 rounded-lg'></input>
                            </div>
                            <div className='w-1/2 m-1'>
                                <input id='phone' name='phone' placeholder='Phone' className='text-[#222] w-full p-2 rounded-lg'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-full m-1'>
                                <textarea id='message' name='message' placeholder='Message' className='text-[#222] w-full resize-y h-[150px] p-2 rounded-lg'></textarea>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button id='send-button' type='button' onClick={sendMessage} className='p-5 rounded-lg bg-purple-800 w-1/4'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home;