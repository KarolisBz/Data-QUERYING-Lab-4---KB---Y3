import { useState } from "react";

// Read content to be imported
const Create = () => {
  // using states we set movie data - 'useState' allows functional components to use states
  // that work like global vars but with extra computing in between if required
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // logs form information
  const handleSubmit = (e) => {
    e.preventDefault(); // stops from being fired more than once
    console.log(title, year, poster);
  }

  return (
    <div>
      <h3>Hello from the Read Create component</h3>
      {/*form, fires handleSubmit on submit*/}
      <form onSubmit={handleSubmit}>
        <div>
          {/*Handles Title info*/}
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}></input>
        </div>
        <div>
          {/*Handles Movie Year info*/}
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}></input>
        </div>
        <div>
          {/*Handles Movie poster URL*/}
          <label>Add Movie poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}></input>
        </div>
        <div>
          {/*submits form*/}
          <input type="submit" value="Add Movie"></input>
        </div>
      </form>
    </div>
  );
}

// exporting module to be used in app.js
export default Create;