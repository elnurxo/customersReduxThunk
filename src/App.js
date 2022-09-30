import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Customers from "./pages/Customers";
import CustomersAdd from "./pages/CustomersAdd";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./redux/reducers/customer.reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/add" element={<CustomersAdd />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
