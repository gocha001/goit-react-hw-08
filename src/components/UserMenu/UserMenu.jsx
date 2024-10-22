import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <button onClick={() => dispatch(logout())} className={css.btn}>
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
