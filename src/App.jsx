import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './styles/global.scss';
import { Post } from "./Post";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Post
        author="Developer"
        content="Ex et quis officia culpa nulla nisi commodo sit adipisicing culpa officia sit occaecat laboris."
      />
    </div>
  );
}

export default App;
