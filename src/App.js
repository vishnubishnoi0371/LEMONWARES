import "./App.css";
import Footer_card from "./components/Footer_card";
import Hero_sec from "./components/Hero_sec";
import My_footer from "./components/My_footer";
import My_nav from "./components/My_nav";
import Nagerian from "./components/Nagerian";
import Stories from "./components/Stories";
import True_cloud from "./components/True_cloud";
import Lemon_wares from "./components/Lemon_wares";
import Backtotop from "./components/Backtotop";
import Preload from "./components/Preload";

function App() {
  return (
    <div className="App">
      <My_nav />
      <Hero_sec/>
      <True_cloud />
      <Lemon_wares/>
      <Stories/>
      <Nagerian />
      <Footer_card />
      <My_footer />
      <Backtotop/>
      <Preload/>
    </div>
  );
}

export default App;
