import React from 'react';
import s from '../RegisterPage/RegisterPage.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'qwer@mail.com.ua',
      password: 'qwer@mail.com.ua',
    },
  });
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Welcome ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
        // alert('error');
      });
  };
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <label className={s.point}>
          <span>Email</span>
          <input
            {...register('email')}
            placeholder="Enter Email"
            className={s.input}
            type="text"
          />
        </label>
        <label className={s.point}>
          <span>Password</span>
          <input
            {...register('password')}
            placeholder="Enter Password"
            className={s.input}
            type="password"
          />
        </label>
        <button className={s.button}>Login</button>
      </form>
    </div>
  );
};
// qwer@mail.com.ua
