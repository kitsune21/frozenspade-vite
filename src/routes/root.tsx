import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/footer";
import Menu from "../components/menu";

export default function Root() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <Menu />
      </header>
      <main className="z-10 h-screen bg-second py-14">
        <section className="m-2 h-[98%] overflow-hidden overflow-y-auto rounded-xl border-2 border-fourth bg-main">
          <Outlet />
        </section>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
