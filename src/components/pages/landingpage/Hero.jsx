import Button from "../../common/Button";
import heropics from "../../../assets/blessing.jpeg";
import bg from "../../../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      style={{ backgroundImage: `url(${bg})` }}
      className={"bg-center scroll-mt-12 bg-cover bg-no-repeat"}
    >
      <div className=" bg-gradient-to-b from-background/80 to-background backdrop-blur-[80px] pt-20 pb-10 md:pt-30 ">
        <div
          className={
            "section-inline grid  md:grid-cols-[5fr_3fr] gap-8 md:gap-16 items-center"
          }
        >
          <div>
            <h1 className="mb-4 md:mb-6 ">
              Creating Seamless Mobile Experiences.
            </h1>
            <p>
              I develop scalable mobile applications and focus on creating
              seamless user experiences. With hands-on expertise in Flutter and
              React Native, I build high-performance features that enhance
              usability and reliability across platforms. I’m passionate about
              delivering impactful products and contributing to teams that
              drive innovation.
            </p>

            <div className="flex gap-6 mt-8 items-center">
              <a href="#project">
                <Button>View My Work</Button>
              </a>
              <a href="#contact">
                <Button btntype={"outline"}>Get in Touch</Button>
              </a>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <img
              src={heropics}
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
