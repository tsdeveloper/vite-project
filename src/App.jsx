import { Header } from "./components/Header";

import styles from './App.module.css';
import './styles/global.scss';


function App() {
    return (
    <div>
      <Header />
     <div className={styles.wrapper}>
      aside+main
     </div>
    </div>
  );
}

export default App;
