import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RemoteApp from "./components/RemoteApp";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header signedIn={false} />
      <Routes>
        <Route
          path="/auth/*"
          element={<RemoteApp remoteName="auth" mountPath="/auth" />}
        />
        <Route
          path="/marketing/*"
          element={<RemoteApp remoteName="marketing" mountPath="/marketing" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
