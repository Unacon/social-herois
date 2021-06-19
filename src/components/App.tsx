import React from "react";
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Header from "./Layout/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Routes />
      </main>
    </Provider>
  );
}

export default App;
