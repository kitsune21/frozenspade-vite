export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center absolute bottom-0 bg-second w-full text-third h-14">
      <p className="text-center">© Copyright {year} by FrozenSpade.TV</p>
    </footer>
  );
}
