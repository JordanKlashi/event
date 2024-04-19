import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Page from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
      </DataProvider>
    </Router>

  );
}

export default App;
