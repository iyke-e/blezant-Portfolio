


const MobileNav = ({ menuOpen, setMenuOpen, toggleScroll }) => {

    const closeMenu = () => {
        setMenuOpen(!menuOpen)
        toggleScroll()
    }
    return (
        <div className='space-y-12 px-4 py-4 absolute w-full h-[calc(100dvh-60px)] bg-background/80 left-0 top-[60px] backdrop-blur-2xl'>
            <div >
                <p className='text-sm text-gray-400 mb-6'>Menu</p>
                <nav >
                    <ul className='grid gap-6'>
                        <li className='text-2xl hover:text-gray-500' onClick={closeMenu}>
                            Home
                        </li>
                        <li className='text-2xl hover:text-gray-500' onClick={closeMenu}>
                            Project
                        </li>
                        <li className='text-2xl hover:text-gray-500' onClick={closeMenu}>
                            About
                        </li>
                        <li className='text-2xl hover:text-gray-500' onClick={closeMenu}>
                            Contact
                        </li>

                    </ul>
                </nav>
            </div>
            <div>
                <p className='text-sm text-gray-400 mb-6'>Connect</p>
                <nav >
                    <ul className='grid gap-6'>
                        <li>
                            <a className='text-2xl hover:text-gray-500' target='_blank' href={"/Egwim_Ikechukwu_Resume.pdf"}>Resume</a>
                        </li>
                        <li>
                            <a className='text-2xl hover:text-gray-500' target='_blank' href={"https://linkedin.com/in/iyke-gp"}>Linkedin</a>
                        </li>
                        <li>
                            <a className='text-2xl hover:text-gray-500' target='_blank' href={"https://github.com/iyke-e"}>Github</a>
                        </li>

                    </ul>
                </nav>
            </div>



        </div>
    )
}

export default MobileNav