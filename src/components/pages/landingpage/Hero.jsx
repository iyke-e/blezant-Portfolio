import Button from "../../common/Button"
import heropics from "../../../assets/blessing.png"
import bg from "../../../assets/bg.jpg"
import Heromask from "../../../assets/mask.jpg"
import Header from "../../layout/Header"

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className={"bg-center bg-cover bg-no-repeat"} >

            <div className=" bg-gradient-to-b from-background/80 to-background backdrop-blur-[80px] py-20 md:py-30 ">



                <div className={"section-inline grid  md:flex gap-8 md:gap-16 items-center"}>

                    <div>
                        <h1 className="mb-4 md:mb-12 ">Creating Seamless Mobile Experiences.</h1>
                        <p> With expertise in React Native and Flutter, I build intuitive and powerful apps that feel native on any device</p>

                        <div className="flex gap-6 mt-8 items-center">
                            <Button>
                                View My Work
                            </Button>
                            <Button btntype={"outline"}>
                                Get in Touch
                            </Button>

                        </div>
                    </div>

                    <div
                        className="w-full md:w-180 aspect-[3.2/4] bg-gray-400 pt-8 rounded-xl overflow-hidden"

                    >
                        <img
                            src={heropics}
                            alt="hero"
                            className="w-full h-full object-cover"
                        />
                    </div>




                </div>


            </div>
        </div>

    )
}

export default Hero