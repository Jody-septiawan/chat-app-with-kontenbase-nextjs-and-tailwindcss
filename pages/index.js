import Register from '../components/auth/Register';

export default function Auth() {
  return (
    <div className="bg-navy flex flex-col">
      <div
        className="container mx-auto grid grid-cols-2 gap-6"
        style={{ height: '95vh' }}
      >
        <div className="left flex items-center">
          <div>
            <div className="text-8xl	text-white font-bold mb-5">
              Connect <br /> to Another <br />
              <span className="text-orange">People</span>
            </div>
            <img src="/image-1.png" alt="image-1" />
          </div>
        </div>
        <div className="right flex items-center justify-center">
          <div className="card p-5 border-4 w-10/12	  rounded-2xl">
            <Register />
          </div>
        </div>
      </div>
      <div
        className="footer flex justify-center items-center text-white"
        style={{ height: '5vh' }}
      >
        &copy; JodySeptiawan {new Date().getFullYear()}
      </div>
    </div>
  );
}
