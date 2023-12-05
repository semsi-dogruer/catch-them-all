import Beer from "./components/Beer.jsx";
import Dogs from "./components/Dogs.jsx";
import Memes from "./components/Memes.jsx";
import Pokemon from "./components/Pokemon.jsx";

export default function Home() {
  return (
    <div>
      <Dogs />
      <Memes />
      <Pokemon />
      <Beer />
    </div>
  );
}
