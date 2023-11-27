import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import eye from "../../assets/eye-slash.png";
import ellipse from "../../assets/ellipse.png";
import fly from "../../assets/fly.png";
import Plus from "../../assets/Plus.png";
import arrow from "../../assets/arrow-left.png";
import LightBox from "../../components/Lightbox";
import Currency from "../../components/Currency";

function Dashboard() {
  const [click, setClick] = useState(false);
  const [addClick, setAddClick] = useState(false);
  const [accountClick, setAccountClick] = useState(false);
  const [sendClick, setSendClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setAddClick(false);
    setAccountClick(false);
  };
  const handleAddClick = () => {
    setAddClick(!addClick);
    setClick(false);
    setAccountClick(false);
  };
  const handleAccountClick = () => {
    setAccountClick(!accountClick);
    setClick(false);
    setAddClick(false);
  };
  const handleSendClick = () => {
    setSendClick(!sendClick);
    setClick(false);
    setAddClick(false);
  };

  const handle = () => {
    setAccountClick(false);
    setAddClick(false);
    setClick(false);
    setSendClick(false);
  };
  return (
    <div className='w-10/12 mx-auto pt-10 mb-20'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={avatar} alt='' />
          <p className='ml-2'>Hi, Jimmy</p>
        </div>
        <div
          className='w-fit p-2 outline outline-slate-200'
          onClick={handleClick}>
          NGN
        </div>
      </div>
      <div className='mt-5'>Account Balance</div>
      <div className='flex items-end'>
        <div
          className='text-lg mr-2 font-semibold'
          onClick={handleAccountClick}>
          N6,000,000.00<span className='text-slate-400 text-sm'>.00</span>
        </div>
        <img src={eye} alt='' />
      </div>
      <div className='flex my-5'>
        <div className='flex items-center mr-2'>
          <p className='mr-1' onClick={handleAddClick}>
            Add Money
          </p>
          <img src={Plus} alt='' />
        </div>
        <div className='flex items-center mr-2'>
          <p className='mr-1' onClick={handleSendClick}>
            Send Money
          </p>
          <img src={fly} alt='' />
        </div>
        <img src={ellipse} alt='' />
      </div>
      <div onClick={handle}>
        <div className='flex bg-black items-center justify-between p-3 rounded-lg'>
          <div className='text-white w-10/12'>
            <div className='font-bold'>Complete your account setup</div>
            <p className='text-sm'>
              Make all transactions by completing your KYC
            </p>
          </div>
          <img src={arrow} alt='' />
        </div>
        <div className='text-slate-600 my-5 font-semibold'>Transactions</div>
        <div className='text-center w-4/5 m-auto mt-10'>
          You haven’t performed any transactions yet
        </div>
      </div>
      <div className='flex w-10/12 fixed bottom-5 items-center justify-between'>
        <div children>
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
                fill='#00DC8A'
              />
              <path
                d='M12.0391 18.8643C11.6291 18.8643 11.2891 18.5243 11.2891 18.1143V15.1143C11.2891 14.7043 11.6291 14.3643 12.0391 14.3643C12.4491 14.3643 12.7891 14.7043 12.7891 15.1143V18.1143C12.7891 18.5243 12.4491 18.8643 12.0391 18.8643Z'
                fill='#00DC8A'
              />
            </svg>
            <p>Home</p>
          </NavLink>
        </div>

        <div className='w'>
          <NavLink
            onClick={handleSendClick}
            className={({ isPending, isActive }) =>
              isPending
                ? ""
                : isActive
                ? "text-center flex flex-col items-center"
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
                fill='#64748B'
              />
            </svg>

            <p>Settings</p>
          </NavLink>
        </div>
      </div>
      {click ? <Currency /> : ""}
      {addClick ? (
        <LightBox
          optOne='Bank Transfer'
          subOne='Receive money with you account number'
          optTwo='Card'
          subTwo='Fund wallet using a debit card'
          optThree='Thepeer'
          subThree='Fund your wallet with Thepeer'
          bank='Bank Transfer'
        />
      ) : (
        ""
      )}
      {accountClick ? (
        <LightBox
          optOne='Account details'
          subOne='View your account information'
          optTwo='Account Statement'
          subTwo='Generate a statement of your transactions'
          optThree='Exchange rates'
          subThree='Convert to another currency'
          bank='Account Details'
        />
      ) : (
        ""
      )}
      {sendClick ? (
        <LightBox
          optOne='Triggo'
          subOne='Send money to a Triggo user'
          optTwo='Send to a Naira account'
          subTwo='Send money to an external account'
          optThree='Swap Currency'
          subThree='Convert to another currency'
          bank='Triggo'
          bankTwo='Naira'
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
