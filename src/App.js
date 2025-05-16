import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/main";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
      once: false,
    });
    const handleScroll = () => {
      Aos.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
