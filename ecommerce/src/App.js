import Homepage from "./pages/homepage";
import {Switch,Route} from "react-router-dom"
import Cartpage from "./pages/cartpage";
import Productpage from "./pages/productpage";
import Header from "./components/header/header";

function App() {
  return (
    <div>
<Header/>
    <Switch>
<Route exact path="/" component={Homepage}    />
<Route exact path="/cart" component={Cartpage}    />
<Route exact path="/product/:id" component={Productpage}    />
    </Switch>
    </div>
  );
}

export default App;
