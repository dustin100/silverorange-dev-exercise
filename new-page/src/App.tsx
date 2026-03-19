import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <h1>This is the header.</h1>
      </Header>
      <main>
        <div className="wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis aliquet lacus, id semper nibh pulvinar eget. Vivamus
            cursus sit amet lectus et pulvinar. Quisque sed condimentum quam,
            eget egestas sapien.
          </p>
          <p>
            Etiam posuere interdum nulla, laoreet condimentum massa mollis eu.
            Pellentesque laoreet luctus posuere. Mauris eget lectus fermentum,
            convallis magna ut, aliquam purus. In a mi augue. Donec hendrerit
            dolor lacus, ac ultrices enim efficitur ut.
          </p>
          <p>
            Donec tincidunt interdum porttitor. In elementum lectus est, ut
            pharetra tortor vestibulum pulvinar. Proin bibendum egestas
            suscipit. Aliquam nec pulvinar arcu, in feugiat nibh.
          </p>
          <p>
            Suspendisse eget mi sed ligula tincidunt ullamcorper nec a ipsum.
            Phasellus sollicitudin egestas consectetur. Sed congue lobortis
            magna, non tincidunt est fermentum in. Nullam condimentum metus
            ligula, vel viverra nibh rhoncus in.
          </p>
          <p>
            Fusce aliquam eros euismod dui maximus interdum. Mauris finibus a
            erat eget tristique. Praesent imperdiet congue arcu, vel interdum
            turpis malesuada eget. Suspendisse potenti. Nulla tincidunt dolor ac
            lorem feugiat ullamcorper.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
