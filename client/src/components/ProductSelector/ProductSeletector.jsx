import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import styles from "./ProductSelector.module.css";

export function ProductSelector({ setter, state }) {
  const { products } = useProducts();
  const [hidden, setHidden] = useState("none");
  const [select, setSelected] = useState("");

  const handleHiddenOptions = () => {
    let value = hidden === "none" ? "flex" : "none";
    setHidden(value);
  };

  const handleSelect = (e) => {
    let { id } = e.target;
    if (!id) {
      id = e.target.parentElement.id;
      setSelected(id);
      setHidden("none");
    } else {
      setSelected(id);
      setHidden("none");
    }
  };

  useEffect(() => {
    const product = products.find((p) => p.id === select);
    if (product) setter({ ...state, ...product });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  return (
    <div className={styles.products_container}>
      <button onClick={handleHiddenOptions}>Select product</button>
      <div
        className={styles.form_selector_container}
        style={{ display: hidden }}
      >
        {Array.isArray(products)
          ? products.map((p) => (
              <article key={p.id} id={p.id} onClick={handleSelect}>
                <img src={p.image_url} alt="product" />
                <span>{p.name}</span>
              </article>
            ))
          : null}
      </div>
    </div>
  );
}
