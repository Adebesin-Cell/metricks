import Navbar from "./components/navigation/Navbar";
import styles from "./styles/Wrapper.module.scss";
import { Route, Routes } from "react-router-dom";
import { Learning } from "./pages";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Routes>
        <Route path='/learning-center' element={<Learning />}></Route>
      </Routes>
    </div>
  );
}

export default App;
