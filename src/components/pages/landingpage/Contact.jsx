import React from 'react'

const Contact = () => {
    return (
        <div className=' section-inline my-20 '>
            <h2 className={"mb-8 text-center"}>Contact</h2>

            <div className='grid md:flex items-center gap-8 md:gap-20'>

                <div className='w-full space-y-4'>
                    <h3 className='mb-4'>Ready to Build Your App?</h3>
                    <p>I'm always excited to hear about new mobile projects, big or small. Whether you have a specific idea in mind or need help exploring the possibilities, let's connect. I'm available for full-project development or consultation.

                    </p>
                    <p>Let's make your vision a reality.</p>
                </div>
                <form className='w-full rounded-xl grid gap-10 p-6 border border-white/20'>
                    <div className='grid gap-2'>
                        <label htmlFor="name">Name</label>
                        <input className='border-b outline-0 border-white/20 pb-2' placeholder='Enter your name' type="text" />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="name">Email</label>
                        <input className='border-b outline-0  border-white/20 pb-2' placeholder='Enter your email address' type="email" />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="name">message</label>
                        <textarea className='border rounded-xl border-white/20 outline-0  h-20 w-full pb-2' name="message" id=""></textarea>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Contact