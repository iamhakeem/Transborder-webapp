import React from "react";
import Back from "../../components/Back";

function SendBank() {
  return (
    <div className='w-10/12 mx-auto py-20 font-semibold'>
      <Back />
      <div className='font-bold my-5 mb-10 text-3xl'>Send to Bank</div>
      <form action=''>
        <label htmlFor='fname'> Bank </label> <br />
        <select
          name='banks'
          id='banks'
          className='outline outline-slate-600 rounded-lg py-4 w-full px-2 mt-2 mb-5'>
          <option value=''></option>
          <option value='GTBank'>Guaranty Trust Bank</option>
          <option value='FBN'>First Bank</option>
          <option value='FCMB'>FCMB</option>
          <option value='Polaris'>Polaris Bank</option>
        </select>
        <input
          type='number'
          placeholder='0123456789'
          className='outline outline-slate-600 rounded-lg py-4 px-2 w-full mt-2 mb-5'
          required
        />{" "}
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

export default SendBank;
