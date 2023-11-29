import React from "react";
import Back from "../../components/Back";
import avatar from "../../assets/avatar.png";

function ProfileEdit() {
  return (
    <div className='w-10/12 mx-auto py-20 font-semibold'>
      <Back />
      <div className='flex items-center my-5'>
        <img src={avatar} alt='' className='w-16' />
        <div className='ml-3'>
          <div className='font-bold'>John doe</div>
          <div className='text-slate-400'>@johndoe</div>
        </div>
      </div>
      <form action=''>
        <label htmlFor='desc'> Name </label> <br />
        <input
          type='text'
          placeholder='John Doe'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />
        <label htmlFor='email'> Email </label> <br />
        <input
          type='email'
          placeholder='johndoe@example.com'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />
        <label htmlFor='tag'> TGT </label> <br />
        <input
          type='text'
          placeholder='@johndoe'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />
        <label htmlFor='birth'> Date of birth </label> <br />
        <input
          type='date'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />
        <label htmlFor='address'> Address </label> <br />
        <input
          type='text'
          placeholder='124, Greater Heights, Ikoyi'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />
        <label htmlFor='address'> Address </label> <br />
        <input
          type='phone'
          placeholder='+234 806 061 8329'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          disabled
        />{" "}
        <br />
        <button
          type='submit'
          onSubmit={() => {
            alert("Profile changed");
          }}
          className='w-10/12 mx-auto font-semibold text-center bg-slate-300 text-red-500 rounded-full p-3 fixed bottom-0'>
          <p>Delete account</p>
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
