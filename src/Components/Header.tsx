export default function Header() {
  return (
    <section className="Header flex items-center justify-between px-3 md:px-6 md:pt-3">
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
      <span className="flex items-center gap-1">
        Gallery <i className="fa-solid fa-arrow-right"></i>
      </span>
    </div>
  );
}
