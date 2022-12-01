import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import VideoPage from "./pages/Video";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/video" element={<VideoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
