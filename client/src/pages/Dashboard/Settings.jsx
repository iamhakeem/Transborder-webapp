import React, { useState } from "react";
import Back from "../../components/Back";
import avatar from "../../assets/avatar.png";
import arrowdown from "../../assets/arrowdown.png";
import arrow from "../../assets/arrow.png";
import { Link, NavLink } from "react-router-dom";

function Settings() {
  const [clickOne, setClickOne] = useState(false);
  const handleClick = () => {
    setClickOne(!clickOne);
  };
  const [clickTwo, setClickTwo] = useState(false);
  const handleClickTwo = () => {
    setClickTwo(!clickTwo);
  };
  const [clickThree, setClickThree] = useState(false);
  const handleClickThree = () => {
    setClickThree(!clickThree);
  };
  return (
    <div className='w-10/12 mx-auto pt-20'>
      <Back />
      <div className='text-center'>
        <img src={avatar} alt='' className='mx-auto w-14' />
        <p className='mt-2'>John Doe</p>
        <p className='mb-5'>@johndoe</p>
        <Link
          to='/edit'
          className='outline outline-slate-300 rounded-full mx-auto my-4 py-2 px-10'>
          Edit profile
        </Link>
      </div>
      <div className='my-10 font-semibold'>
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClick}>
          <p>Account</p>
          {clickOne ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickOne ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Account Information</p>
            <p className='p-2 rounded-lg mb-5'>Account Verification</p>
            <p className='p-2 rounded-lg mb-5'>Beneficiaries</p>
            <p className='p-2 rounded-lg mb-5'>Notification</p>
            <p className='p-2 rounded-lg mb-5'>Referrals</p>
          </div>
        ) : (
          ""
        )}
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClickTwo}>
          <p>Security</p>
          {clickTwo ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickTwo ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Change Password</p>
            <p className='p-2 rounded-lg my-5'>Change PIN</p>
            <p className='p-2 rounded-lg my-5'>Two-factor Authentication</p>
            <p className='p-2 rounded-lg my-5'>Enable Biometrics</p>
          </div>
        ) : (
          ""
        )}
        <div
          className='bg-slate-200 p-3 rounded-lg flex items-center justify-between mb-5'
          onClick={handleClickThree}>
          <p>Others</p>
          {clickThree ? (
            <img src={arrowdown} alt='' />
          ) : (
            <img src={arrow} alt='' />
          )}
        </div>
        {clickThree ? (
          <div className='w-11/12 m-auto'>
            <p className='p-2 rounded-lg my-5'>Privacy Policy</p>
            <p className='p-2 rounded-lg my-5'>Terms and Conditions</p>
            <p className='p-2 rounded-lg my-5'>Support</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='flex w-10/12 fixed bottom-5 items-center justify-between'>
        <div >
          <NavLink
            to='/dashboard'
            className={({ isPending, isActive }) =>
              isPending
                ? ""
                : isActive
                ? "text-center text-[#00DC8A] flex flex-col items-center"
                : "flex flex-col items-center"
            }>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17.8291 22.8642H6.24906C3.50906 22.8642 1.28906 20.6342 1.28906 17.8942V10.4842C1.28906 9.12423 2.12906 7.41423 3.20906 6.57423L8.59906 2.37423C10.2191 1.11423 12.8091 1.05423 14.4891 2.23423L20.6691 6.56423C21.8591 7.39423 22.7891 9.17423 22.7891 10.6242V17.9042C22.7891 20.6342 20.5691 22.8642 17.8291 22.8642ZM9.51906 3.55423L4.12906 7.75423C3.41906 8.31423 2.78906 9.58423 2.78906 10.4842V17.8942C2.78906 19.8042 4.33906 21.3642 6.24906 21.3642H17.8291C19.7391 21.3642 21.2891 19.8142 21.2891 17.9042V10.6242C21.2891 9.66423 20.5991 8.33423 19.8091 7.79423L13.6291 3.46423C12.4891 2.66423 10.6091 2.70423 9.51906 3.55423Z'
                fill='#64748B'
              />
              <path
                d='M12.0391 18.8643C11.6291 18.8643 11.2891 18.5243 11.2891 18.1143V15.1143C11.2891 14.7043 11.6291 14.3643 12.0391 14.3643C12.4491 14.3643 12.7891 14.7043 12.7891 15.1143V18.1143C12.7891 18.5243 12.4491 18.8643 12.0391 18.8643Z'
                fill='#64748B'
              />
            </svg>
            <p>Home</p>
          </NavLink>
        </div>

        <div className='w'>
          <NavLink
            to='/dashboard'
            className={({ isPending, isActive }) =>
              isPending
                ? ""
                : isActive
                ? "text-center text-[#00DC8A] flex flex-col items-center"
                : "flex flex-col items-center"
            }>
            <svg
              width='23'
              height='23'
              viewBox='0 0 23 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M21.0156 1.11426L14.0156 21.1143L10.0156 12.1143L1.01562 8.11426L21.0156 1.11426Z'
                stroke='#64748B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <p>Send</p>
          </NavLink>
        </div>

        <div className='w'>
          <NavLink
            to='/settings'
            className={({ isPending, isActive }) =>
              isPending
                ? ""
                : isActive
                ? "text-center text-[#00DC8A] flex flex-col items-center"
                : "flex flex-col items-center"
            }>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.9381 5.42043L13.7681 2.43043C12.7781 1.86043 11.2281 1.86043 10.2381 2.43043L5.01813 5.44043C2.94813 6.84043 2.82812 7.05043 2.82812 9.28043V14.7104C2.82812 16.9404 2.94813 17.1604 5.05813 18.5804L10.2281 21.5704C10.7281 21.8604 11.3681 22.0004 11.9981 22.0004C12.6281 22.0004 13.2681 21.8604 13.7581 21.5704L18.9781 18.5604C21.0481 17.1604 21.1681 16.9504 21.1681 14.7204V9.28043C21.1681 7.05043 21.0481 6.84043 18.9381 5.42043ZM11.9981 15.2504C10.2081 15.2504 8.74813 13.7904 8.74813 12.0004C8.74813 10.2104 10.2081 8.75043 11.9981 8.75043C13.7881 8.75043 15.2481 10.2104 15.2481 12.0004C15.2481 13.7904 13.7881 15.2504 11.9981 15.2504Z'
                fill='#00DC8A'
              />
            </svg>

            <p>Settings</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Settings;
