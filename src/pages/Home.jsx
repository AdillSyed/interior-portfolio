import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import StyleSpectrum from "../components/StyleSpectrum";
import Process from "../components/Process";
import Contact from "../components/Contact";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1C1C1C",
            color: "#F6F4EF",
          },
        }}
      />
      <Header />
      <Hero />
      <SelectedWorks />
      <StyleSpectrum />
      <Process />
      <Contact />
    </>
  );
};

export default Home;
