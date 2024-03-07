import Header from "./Header";

export default function HomePage() {
  const hoverStyling = "hover:tracking-wider duration-300";
  const fancyBtn = "bg-[#ffff] py-2 px-4 rounded-xl";
  const imgPath =
    "https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const svgLines = "http://www.w3.org/2000/svg";

  return (
    <>
      <Header />
      <section className="Home flex h-screen xl:h-fit flex-col xl:flex-row xl:justify-between items-center text-center">
        <div className="flex-grow">
          <div
            id="home-main"
            className="py-8 md:py-20 lg:py-32 xl:py-24 flex flex-grow flex-col items-center gap-3 md:gap-6 xl:gap-10 px-3"
          >
            <div className="flex items-end justify-center w-full">
              <h1 className="text-7xl md:text-8xl serif drop-shadow-lg">
                Welcome <span className="text-2xl md:text-3xl">to my</span>
                <br />
                Art Gallery
              </h1>
              <svg
                className="w-10 h-10 md:w-14 md:h-14"
                viewBox="0 0 115 98"
                fill="none"
                xmlns={svgLines}
              >
                <path
                  d="M1.96056 72.4776C2.11526 72.1427 2.61932 71.3858 3.47274 70.2068C4.32617 69.0278 5.12206 67.971 5.86041 67.0365C6.59877 66.102 7.54001 64.8843 8.68414 63.3832C9.82849 61.8822 10.7074 60.7311 11.3207 59.9299C11.9341 59.1285 12.5843 58.2841 13.2713 57.3967C13.9584 56.509 15.1275 54.993 16.7787 52.8487C18.4299 50.7043 20.1083 48.5845 21.8138 46.4892C23.5193 44.3939 24.8029 42.8334 25.6647 41.8077C26.5262 40.7821 27.2318 39.9321 27.7814 39.258C28.3309 38.5838 29.2978 37.4637 30.6822 35.8979C32.0668 34.332 33.1765 33.0913 34.0112 32.176C34.8462 31.2609 35.6647 30.3806 36.4668 29.535C37.2686 28.6897 38.0465 27.8696 38.8004 27.0747C39.5543 26.2796 40.7613 25.0652 42.4216 23.4316C44.0818 21.7979 45.4922 20.4434 46.6528 19.3679C47.8133 18.2927 48.6809 17.4937 49.2556 16.9708C49.8305 16.4479 50.4121 15.9271 51.0005 15.4083C51.5889 14.8892 52.4073 14.182 53.4557 13.2864C54.5041 12.3909 55.6724 11.4026 56.9604 10.3215"
                  stroke="currentColor"
                  stroke-width="2.40238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.4046 76.4629C22.4757 76.2636 22.8882 75.2594 23.6421 73.4504C24.3963 71.6413 25.5284 69.4455 27.0387 66.8629C28.5492 64.2803 29.7211 62.335 30.5545 61.027C31.3881 59.7189 31.9949 58.7378 32.3747 58.0837C32.7546 57.4295 33.7812 55.8811 35.4545 53.4384C37.1276 50.9957 38.4956 49.06 39.5587 47.6315C40.6217 46.203 41.4966 45.0339 42.1831 44.1242C42.8697 43.2147 43.7552 42.0704 44.8397 40.6914C45.9243 39.3122 47.0484 37.9385 48.2119 36.5703C49.3754 35.2022 50.2633 34.1643 50.8755 33.4568C51.4878 32.7495 52.2802 31.8579 53.2527 30.782C54.2253 29.7064 55.2707 28.5952 56.3889 27.4486C57.5069 26.3018 58.5024 25.2882 59.3754 24.4077C60.2482 23.5273 61.5074 22.3131 63.153 20.7653C64.7988 19.2174 66.3734 17.7947 67.8767 16.4972C69.3802 15.1998 70.8823 13.932 72.3831 12.694C73.8839 11.4558 75.3001 10.3252 76.6316 9.30249C77.9633 8.27974 79.4285 7.16454 81.0272 5.95691"
                  stroke="currentColor"
                  stroke-width="2.40238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.0535 96.3708C40.1289 96.0743 40.5204 94.6886 41.2279 92.2139C41.9354 89.7392 42.8657 87.1333 44.0189 84.396C45.1718 81.6585 46.1029 79.5524 46.8122 78.0777C47.5217 76.6033 48.0229 75.5319 48.3156 74.8636C48.6081 74.1952 49.4992 72.4651 50.989 69.6731C52.4788 66.8811 53.7505 64.6236 54.8041 62.9006C55.8577 61.1773 56.6296 59.9047 57.1198 59.0828C57.6098 58.2607 58.4645 56.9465 59.6838 55.1404C60.9031 53.3342 61.8391 51.9585 62.4916 51.0132C63.1444 50.0679 63.9512 48.9479 64.9121 47.6531C65.8729 46.3586 66.6215 45.3676 67.1579 44.6801C67.6943 43.9926 68.1759 43.3761 68.6029 42.8305C69.03 42.2849 69.6793 41.4738 70.5507 40.3972C71.4222 39.3207 72.5404 37.9981 73.9054 36.4295C75.2707 34.8611 76.4771 33.5194 77.5246 32.4043C78.5724 31.2895 79.6814 30.1035 80.8516 28.8463C82.0216 27.5891 83.856 25.7855 86.3548 23.4353C88.8536 21.0853 90.8133 19.2912 92.234 18.053C93.6546 16.8147 94.8794 15.757 95.9082 14.8797C96.937 14.0026 98.3193 12.8774 100.055 11.5041C101.79 10.1307 103.119 9.08812 104.041 8.37633C104.963 7.66455 105.694 7.10317 106.235 6.69222C106.777 6.28127 107.584 5.67645 108.659 4.87774C109.733 4.07904 111.207 2.98964 113.082 1.60953"
                  stroke="currentColor"
                  stroke-width="2.40238"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
              className={`flex items-center  gap-2 w-full justify-center pt-2 ${hoverStyling}`}
            >
              Follow on Instagram
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>

        <div
          id="home-img"
          className="text-left mx-4 mb-3 md:w-9/12 xl:w-5/12 h-full xl:h-5/6 md:ml-6 xl:ml-0 border-2 border-gray-400 xl:mr-6 rounded-xl"
        >
          <span className="flex gap-1 items-center absolute text-white">
            <h2 className={`${hoverStyling}`}>Latest Collection</h2>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <img
            src={imgPath}
            alt="Your Image"
            className="object-cover w-full h-full -ml-2 -mt-2 mb-2  xl:-ml-3 xl:-mt-3 xl:mb-3  rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
