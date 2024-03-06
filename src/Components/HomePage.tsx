import Header from "./Header";

export default function HomePage() {
  const hoverStyling = "hover:tracking-wider duration-300";
  const svgPath = "src/assets/lines.svg";
  const fancyBtn = "bg-[#ffff] py-2 px-4 rounded-xl";
  const imgPath =
    "https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <>
      <section className="Home h-screen flex flex-col xl:flex-row xl:justify-between  text-center">
        <div className="flex-grow">
          <Header />
          <div
            id="home-main"
            className="py-10 md:py-20 lg:py-32 xl:py-24 flex flex-grow flex-col items-center gap-4 md:gap-6 xl:gap-10 px-3"
          >
            <div className="flex items-end justify-center w-full">
              <h1 className="text-7xl md:text-8xl serif drop-shadow-lg">
                Welcome <span className="text-3xl">to my</span>
                <br />
                Art Gallery
              </h1>
              <img src={svgPath} alt="" className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            <p className="font-light max-w-lg">
              Explore captivating paintings, from vibrant landscapes to intimate
              portraits. Each piece is a reflection of my passion, creativity,
              and dedication to the art form.
            </p>
            <div className="flex text-sm w-full items-center justify-center gap-6 pt-2">
              <span className={`flex items-center gap-1.5 ${fancyBtn}`}>
                <i className="fa-solid fa-envelope"></i>
                Email Me
              </span>
              <span className={`flex items-center gap-1.5 ${fancyBtn}`}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                About Me
              </span>
            </div>
            <span
              className={`flex items-center gap-2 w-full justify-center pt-2 ${hoverStyling}`}
            >
              Follow on Instagram
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>

        <div id="home-img" className="flex-grow text-left xl:w-2/12">
          <span className="flex gap-1 items-center xl:absolute xl:right-10 xl:top-6 xl:text-[#F3EFEA] pl-3">
            <h2 className={`${hoverStyling}`}>Latest Collection</h2>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <img
            src={imgPath}
            alt="Your Image"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
}
