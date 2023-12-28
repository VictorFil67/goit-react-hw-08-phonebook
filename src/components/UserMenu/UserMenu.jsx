import { useDispatch, useSelector } from 'react-redux';
// import { selectUserName } from '../../store/auth/selectors';
import { selectUserEmail } from '../../store/auth/selectors';
import s from './UserMenu.module.css';
import { logoutThunk } from '../../store/auth/operations';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  //   const user = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <div className={s.wrap}>
      <p className={s.email}>{email}</p>
      <button
        onClick={() => {
          dispatch(logoutThunk())
            .unwrap()
            .then(res => {
              // navigate('/contacts');
              toast.success(`You are logout!!!`);
            })
            .catch(() => {
              toast.error('Something went wrong!!!');
              // alert('error');
            });
        }}
      >
        Logout
      </button>

      {/* {user && <button>Logout</button>}  */}
    </div>
  );
};
