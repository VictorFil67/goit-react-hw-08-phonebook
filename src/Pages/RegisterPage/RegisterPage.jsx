import React from 'react';
import s from './RegisterPage.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../store/auth/operations';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        // navigate('/contacts');
        toast.success(`Welcome ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });
  };
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <label className={s.point}>
          <span>Name</span>
          <input
            {...register('name')}
            placeholder="Enter Name"
            className={s.input}
            type="text"
          />
        </label>
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
        <button className={s.button}>Register</button>
      </form>
    </div>
  );
};
