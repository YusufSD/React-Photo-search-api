import "./App.css";
import SearchHeader from "./searchHeader";
import searchImages from "./api";
import ImageList from "./imagelist";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const resultApi = await searchImages(term);
    setImages(resultApi);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imageHolder={images} />
    </div>
  );
}

export default App;
