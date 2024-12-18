import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>
        <h1>
          NotesApp
        </h1>
        <nav>
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/create">
            Add courses
          </Link>
          <Link className="hover:underline" to="/list">
            List notes
          </Link>  
          <Link className="hover:underline" to="/add">
            Create notes for class
          </Link>     
        </nav>
      </div>
    </header>
  );
}

export default Header;