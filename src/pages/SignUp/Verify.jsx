import React from "react";
import Back from "../../components/Back";
import { Link } from "react-router-dom";

function Verify() {
  return (
    <div className='w-10/12 mx-auto pt-20'>
      <Back />
      <div className='text-3xl font-bold'> Verify your account </div>
      <p className='my-3 text-slate-600'>
        We sent you 6 digit code to johndoe@example.com
      </p>
      <form action='' className='flex justify-between'>
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
        <input
          type='number'
          className='outline outline-slate-300 rounded-lg p-2 w-[15%] mt-2 placeholder:text-center'
          placeholder='--'
        />
      </form>
      <div className='font-semibold mt-3'>
        Send code in <span className='text-blue-700'>5:00</span>
      </div>
      <Link to='/name'>
        <div className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-2'>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Verify;
