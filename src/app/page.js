import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
        <main className="flex flex-col max-w-[90vw] mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
        </main>
    </Provider>
  );
}
