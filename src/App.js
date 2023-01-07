import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();
function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
