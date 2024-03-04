import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="absolute top-0 flex h-14 w-full bg-second px-4 py-2 text-third sm:pl-2 sm:pr-5">
      <h2 className="border-b-2 border-fourth text-4xl">
        <Link to="/">FrozenSpade.TV</Link>
      </h2>
      <ul className="flex w-full items-center justify-end gap-2">
        <li className="text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/wrpb">World Records & Personal Bests</Link>
        </li>
        <li className="text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/youtube">YouTube Vods</Link>
        </li>
        <li className="text-lg transition-all duration-100 ease-in hover:border-b hover:border-fourth hover:text-fourth">
          <Link to="/social">Social Media</Link>
        </li>
      </ul>
    </nav>
  );
}
