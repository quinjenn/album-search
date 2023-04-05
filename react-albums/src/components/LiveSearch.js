// import React, { Fragment, useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "components/SearchBar";
// import Results from "components/Results";

// export default function LiveSearch(props) {
//   const [term, setTerm] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const baseURL = `https://itunes.apple.com/search?country=CA&media=music&entity=album&attribute=artistTerm`;
//     const searchURL = term ? `${baseURL}&term=${term}` : `${baseURL}&term=beatles`;

//     axios.get(searchURL).then(response => {
//       console.log(response.data.results);
//       // setResults(response.data.results);
//       setResults([...response.data.results])
//     });
//   }, [term]);

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const baseURL = `https://itunes.apple.com/search?country=CA&media=music&entity=album&attribute=artistTerm`;
    const searchURL = term ? `${baseURL}&term=${term}` : `${baseURL}&term=${term}`;

    axios.get(searchURL).then(response => {
      console.log(response.data.results);
      // setResults(response.data.results);
      setResults([...response.data.results]);
    });
  }, [term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
