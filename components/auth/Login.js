import InputAuth from './InputAuth';

export default function Login({ setIsRegister }) {
  return (
    <div
      data-aos="flip-right"
      className="card p-5 border-4 w-9/12	  rounded-2xl"
    >
      <div className="title text-center text-white text-3xl font-bold mb-10">
        Login
      </div>
      <InputAuth title="Email" />
      <InputAuth title="Password" />
      <div className="mt-14">
        <button className="bg-orange p-2 rounded w-full text-white font-bold hover:bg-orange-500">
          Submit
        </button>
        <div className="text-center text-white mt-2">
          Don't have an account ?
          <span
            onClick={() => setIsRegister(true)}
            className="font-bold text-green cursor-pointer ml-2 hover:text-green-500"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
