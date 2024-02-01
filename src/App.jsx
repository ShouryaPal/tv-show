import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowName from "./Components/ShowName.jsx";
import ShowDetail from "./Components/ShowDetail.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ShowName />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
