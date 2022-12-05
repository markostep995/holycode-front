import "./App.css";
import BusinessPlace from "./containers/businessPlace";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BusinessPlace />
    </Provider>
  );
}

export default App;
