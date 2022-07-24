import style from "./Paginator.module.css";
import btn_page from "../../assets/images/btn-page-icon.svg";

export function Paginator({ prev, next }) {
  return (
    <div className={style.buttons_pages}>
      <button onClick={prev}>
        <img src={btn_page} alt="Previous" />
      </button>
      <button onClick={next}>
        <img src={btn_page} alt="Next" />
      </button>
    </div>
  );
}
