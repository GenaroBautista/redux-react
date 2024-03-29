
import './App.css';
import { faker } from "@faker-js/faker";

function App() {
  return (
    <div className="ui container comments">
      <di className="comments">
        <a href="/"  className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
          </a>
          <div className="content">
            <a href="/" className={faker.image.avatar}>
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM </span>
            </div>
            <div className="text">Nice blog post!</div>
          </div>
      </di>
    </div>
  );
}

export default App;
