import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center absolute bottom-0 bg-second w-full text-third h-14">
      <p className="text-center">© Copyright {year} by FrozenSpade.TV</p>
      <a
        className="text-sm"
        href="https://twitter.com/KiTsuNe_76"
        target="_blank"
        rel="noreferrer"
      >
        Developed by @kitsune_76
      </a>
      <Link to="/secret" className="absolute bottom-0 right-0 text-second">
        Secret
      </Link>
    </footer>
  );
}
