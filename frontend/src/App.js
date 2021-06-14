import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import Login from "./components/auth/Login/login";
import Register from "./components/auth/Register/register";
import store from "./store";
import ProtectedRoute from "./components/routes/protectedRoute";
import Home from "./components/home/home";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="px-0 py-0">
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <ProtectedRoute path="/" component={Home} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
