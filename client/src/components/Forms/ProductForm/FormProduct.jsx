import styles from "./FromProduct.module.css";
import default_img from "../../../assets/images/default-img.jpg";
import delete_img from "../../../assets/images/delete.svg";
import create_img from "../../../assets/images/create.svg";
import edit_img from "../../../assets/images/edit.svg";
import { ProductSelector } from "../../ProductSelector/ProductSeletector";
import { useState, useRef, useEffect } from "react";

export function FormProduct() {
  const brandImg = useRef();
  const productImg = useRef();

  const [disabled, setDisabled] = useState({
    add: true,
    edit: true,
    delete: true,
  });

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    image_url: "",
    price: 0,
    brand: {
      name: "",
      logo_url: "",
    },
  });

  const handleClear = () => {
    setDisabled({
      add: true,
      edit: true,
      delete: true,
    });

    setProduct({
      id: "",
      name: "",
      description: "",
      image_url: "",
      price: 0,
      brand: {
        name: "",
        logo_url: "",
      },
    });
  };

  const handleFile = (e) => {
    let allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (allowedTypes.includes(file.type)) {
        const url_image = URL.createObjectURL(file);
        if (e.target.id === "file_product") {
          productImg.current.src = url_image;
          setProduct({ ...product, image_url: url_image });
        } else {
          brandImg.current.src = url_image;
          setProduct({
            ...product,
            brand: { ...product.brand, logo_url: url_image },
          });
        }
      }
    }
  };

  const handleProduct = (e) => {
    let { value, id } = e.target;
    let allowed = ["p_name", "p_description", "p_price", "b_name"];
    if (allowed.includes(id)) {
      if (id === "b_name") {
        let brandCopy = { ...product.brand };
        brandCopy.name = value;
        return setProduct({ ...product, brand: { ...brandCopy } });
      }
      let field = id.split("_")[1];
      if (field === "price") {
        const onlyNumbers = /^[0-9]*$/;
        if (onlyNumbers.test(Number(value)))
          setProduct({ ...product, [field]: Number(value) });
      } else setProduct({ ...product, [field]: value });
    }
  };

  useEffect(() => {
    const { name, description, price, id } = product;
    if (
      name !== "" &&
      description !== "" &&
      price > 0 &&
      id !== "" &&
      product.brand.name !== ""
    ) {
      setDisabled({ add: true, edit: false, delete: false });
    } else if (
      name !== "" &&
      description !== "" &&
      price > 0 &&
      product.brand.name !== ""
    ) {
      setDisabled({ edit: true, delete: true, add: false });
    } else setDisabled({ edit: true, delete: true, add: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <div className={styles.form_container}>
      <h1>Administrator Panel</h1>
      <h3>Monitor your products</h3>
      <div className={styles.form_clear}>
        <button onClick={handleClear} className={styles.form_clear_btn}>
          Clear
        </button>
      </div>
      <ProductSelector setter={setProduct} state={product} />
      <form className={styles.form_product}>
        <div className={styles.form_product_product}>
          <h2>Product Information</h2>
          <input
            type="text"
            placeholder="Name of product"
            id="p_name"
            onChange={handleProduct}
            value={product.name}
          />
          <textarea
            type="text"
            placeholder="Description..."
            id="p_description"
            onChange={handleProduct}
            value={product.description}
          ></textarea>
          <input
            type="text"
            placeholder="Price"
            id="p_price"
            onChange={handleProduct}
            value={product.price}
          />
          <label htmlFor="file_product" className={styles.form_product_file}>
            {product.image_url === "" ? <>Select a brand image</> : null}
            <img
              src={product.image_url === "" ? default_img : product.image_url}
              alt="img product"
              ref={productImg}
            />
            <input id="file_product" type="file" onChange={handleFile} />
          </label>
        </div>

        <div className={styles.form_product_brand}>
          <h2>Brand Information</h2>
          <input
            type="text"
            placeholder="Name of brand"
            id="b_name"
            onChange={handleProduct}
            value={product.brand.name}
          />
          <label htmlFor="file_brand" className={styles.form_product_file}>
            {product.brand.logo_url === "" ? <>Select a brand image</> : null}
            <img
              src={
                product.brand.logo_url === ""
                  ? default_img
                  : product.brand.logo_url
              }
              ref={brandImg}
              alt="img product"
            />
            <input id="file_brand" type="file" onChange={handleFile} />
          </label>
        </div>

        <div className={styles.form_buttons}>
          <button className={styles.form_button_create} disabled={disabled.add}>
            <img src={create_img} alt="Create" />
          </button>
          <button className={styles.form_button_edit} disabled={disabled.edit}>
            <img src={edit_img} alt="Edit" />
          </button>
          <button
            className={styles.form_button_delete}
            disabled={disabled.delete}
          >
            <img src={delete_img} alt="Delete" />
          </button>
        </div>
      </form>
    </div>
  );
}
