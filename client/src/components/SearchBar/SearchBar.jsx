import { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";

export function SearchBar() {
  const { results, setProducts } = useContext(ResultsContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //search
    if (Array.isArray(results)) {
      let filtered = results.filter((res) => {
        const { name, description } = res;
        return name.includes(search) || description.includes(search);
      });
      !filtered ? setProducts(results) : setProducts(filtered);
    }
  };

  useEffect(() => {
    setProducts(results);
  }, [results, setProducts]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>
          <img src="" alt="Search" />
        </button>
        <input type="text" onChange={handleSearch} />
      </form>
    </div>
  );
}
