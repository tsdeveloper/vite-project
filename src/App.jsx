import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./styles/global.scss";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <section>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Developer"
            position="Web Design"
            content="<p>🛸Ex et quis officia culpa nulla</p><p>nisi commodo sit adipisicing</p> <p>culpa officia sit occaecat laboris.</p>"
          />

          <Post
            author="Developer"
            position="Web Developer"
            content="😎Ex et quis officia culpa nulla nisi commodo sit adipisicing culpa officia sit occaecat laboris."
          />
        </main>
      </section>
    </section>
  );
}

export default App;
