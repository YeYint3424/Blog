
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router/Router";
import { store } from "./appredux/store";

function App() {
  // console.log('tsttttt',store.getState());
  return (
    <Router />
  );
}

export default App;
