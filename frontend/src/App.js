import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
     <BrowserRouter>
      {/* <Header /> */}
      <div id="content">
      <main>
        <Container>

          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
            {/* Catch-all Route */}
          </Routes>
          
        </Container>
      </main>
      </div>
      {/* <Footer /> */}
   {/* <ToastContainer /> */}
    </BrowserRouter>
  );
}

export default App;
