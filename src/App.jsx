import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./styles/global.scss";
import { Sidebar } from "./components/Sidebar";

function App() {

  const posts = [
    { name: 'Web developer', position:'Architecture Engineer', title: ['👻🛸Lorem ipsum dolor sit amet consectetur adipisicing elit','https://github.com/tsdeveloper/vite-project', '👉🏽👽 Follow me guys..!']},
    // { name: 'XPTO DevOps', position:'DevOps Developer', title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis, corrupti necessitatibus voluptatum molestias nisi quos id incidunt dolores facere minima nemo repudiandae explicabo adipisci, aspernatur eveniet soluta modi magnam.'},
    // { name: 'XPTO Front End', position:'UI/UX', title:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa perferendis autem illum quam modi hic? Nobis, repellendus voluptatum? Saepe dolores amet in sit, error voluptates officiis laboriosam inventore quaerat dolor.'},

  ]
  return (
    <section>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map((post) => (
          <Post
            author={post.name}
            position={post.position}
            content={post.title}
          />))}
      
        </main>
      </section>
    </section>
  );
}

export default App;
