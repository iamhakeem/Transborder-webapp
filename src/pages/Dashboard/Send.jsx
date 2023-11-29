import React from "react";
import Back from "../../components/Back";

function Send() {
  return (
    <div className='w-10/12 mx-auto pt-20 font-semibold'>
      <Back />
      <div className='font-bold my-5 mb-10 text-3xl'>Send TGT</div>
      <form action=''>
        <label htmlFor='fname'> TGT </label> <br />
        <input
          type='text'
          placeholder='@johndoe'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-4'
          required
        />
        <div className='text-right mb-5'>Account name</div>
        <label htmlFor='desc'> Description </label> <br />
        <input
          type='text'
          placeholder='Add a short note'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
        />{" "}
        <label htmlFor='amount'> Amount </label> <br />
        <input
          type='number'
          placeholder='Enter amount'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          required
        />{" "}
        <label htmlFor='pin'> Pin </label> <br />
        <input
          type='number'
          max='4'
          placeholder='Enter 4-digits PIN'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2'
          required
        />{" "}
        <br />
        <div className='flex items-center mt-5'>
          <input type='checkbox' name='save' id='save' />
          <p className='ml-2'>Save to beneficiary</p>
        </div>
        <button
          type='submit'
          onSubmit={() => {
            alert("Sent successfully");
          }}
          className='w-10/12 font-semibold text-center bg-[#00DC8A] rounded-full p-3 fixed bottom-0'>
          <p>Send money</p>
        </button>
      </form>
    </div>
  );
}

export default Send;
