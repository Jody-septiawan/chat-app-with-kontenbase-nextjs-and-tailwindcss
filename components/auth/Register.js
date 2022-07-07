import InputAuth from './InputAuth';

export default function Register({ setIsRegister }) {
  return (
    <div data-aos="flip-left" className="card p-5 border-4 w-9/12	  rounded-2xl">
      <div className="title text-center text-white text-3xl font-bold mb-10">
        Register
      </div>
      <InputAuth title="Username" />
      <InputAuth title="Email" />
      <InputAuth title="Password" />
      <InputAuth title="Repeat Password" />
      <div className="mt-14">
        <button className="bg-orange p-2 rounded w-full text-white font-bold hover:bg-orange-500">
          Submit
        </button>
        <div className="text-center text-white mt-2">
          Already have account?
          <span
            onClick={() => setIsRegister(false)}
            className="font-bold text-green cursor-pointer ml-2 hover:text-green-500"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
