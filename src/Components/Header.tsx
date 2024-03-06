export default function Header() {
  return (
    <section className="Header flex items-center justify-between flex-grow md:px-8 md:pt-2 px-3">
      <a href="#">
        <h1 className="text-4xl md:text-5xl serif drop-shadow-lg hover:tracking-widest duration-300 mt-1">
          Amna.
        </h1>
      </a>
      <NavBar />
    </section>
  );
}

function NavBar() {
  return (
    <div className="NavBar text-base">
      <span className="flex items-center gap-2">
        Gallery <i className="fa-solid fa-arrow-right"></i>
      </span>
    </div>
  );
}
