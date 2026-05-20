import style from "./CardStatus.module.css";
const CartStatus = ({ counter, title }) => {
  return (
    <>
      <div className={`${style.cardStatus} d-flex align-items-center `}>
        <div
          className={` ${style.icon} w-100 d-flex justify-content-center align-items-center`}
        >
          <i class="fa-solid fa-hotel"></i>
        </div>
        <div
          className={`${style.info} w-100 d-flex flex-column align-items-center gap-2 `}
        >
          <div className={`${style.counter}`}>{counter}</div>
          <div className={`${style.title}`}>{title}</div>
        </div>
      </div>
    </>
  );
};

export default CartStatus;
