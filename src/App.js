import "./App.css";
import Auth from "./container/Auth";
import Header from "./container/Header";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  );
}

export default App;
