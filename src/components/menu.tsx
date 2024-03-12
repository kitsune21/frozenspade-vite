import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 flex flex-col z-10 sm:flex-row sm:items-center h-auto sm:h-14 w-full bg-second px-4 py-2 text-third sm:pl-2 sm:pr-5">
      <div className="flex w-full">
        <h2 className="border-b-2 border-fourth text-4xl">
          <Link to="/" onClick={() => setIsOpen(false)}>
            FrozenSpade.TV
          </Link>
        </h2>
        <button
          className="sm:hidden ml-auto block text-4xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>
      <ul
        className={`sm:flex w-full sm:w-auto items-center justify-end gap-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="flex-shrink-0 text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/wrpb" onClick={() => setIsOpen(false)}>
            World Records & Personal Bests
          </Link>
        </li>
        <li className="flex-shrink-0 text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/youtube" onClick={() => setIsOpen(false)}>
            YouTube Vods
          </Link>
        </li>
        <li className="flex-shrink-0 text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/social" onClick={() => setIsOpen(false)}>
            Socials
          </Link>
        </li>
      </ul>
    </nav>
  );
}
