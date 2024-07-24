import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./styles/global.scss";
import { Sidebar } from "./components/Sidebar";

function App() {

  const posts = [
    { name: 'Web developer', 
      position:'Architecture Engineer', 
      title: ['👻🛸Lorem ipsum dolor sit amet consectetur adipisicing elit',
        '👉🏽 https://github.com/tsdeveloper/vite-project', 
        '#frontend #reactjs #vite #nextjs']
    },    
    { name: 'John Wicky', 
      position:'UI/UX', 
      title: [
        '👻🛸Lorem ipsum dolor sit amet consectetur adipisicing elit',
        '👉🏽 https://github.com/tsdeveloper/vite-project', 
        '#frontend #reactjs #vite #nextjs']
    },    
    { name: 'Yoda', 
      position:'Jedi', 
      title: ['👻🛸Lorem ipsum dolor sit amet consectetur adipisicing elit',
        '👉🏽 https://github.com/tsdeveloper/vite-project', 
        '#frontend #reactjs #vite #nextjs']
    },    
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
