import Navbar from "../navigation/Navbar"
import logo from "../../assets/logo.svg"
import Button from "../common/Button"
import { MdOutlineMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import MobileNav from "../navigation/MobileNav";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const docBody = document.body;


    const toggleScroll = () => {
        docBody.classList.toggle("stop-scroll");
        console.log(docBody)
    };

    return (
        <header className=" flex bg-background/60 backdrop-blur-lg justify-between section-inline py-3 text-text-primary w-screen items-center z-2 inset-x-0 fixed top-0">

            <img src={logo} className={"w-10 h-10"} alt="" />
            <Navbar />
            <div className=" md:hidden" >
                <MdOutlineMenuOpen onClick={() => { setMenuOpen(!menuOpen) }} className={"w-8 h-8"} />
                {
                    menuOpen ? <MobileNav toggleScroll={toggleScroll} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        : ""
                }
            </div>
            <div className="hidden md:block" >
                <Button>Resume</Button>
            </div>
        </header>
    )
}

export default Header