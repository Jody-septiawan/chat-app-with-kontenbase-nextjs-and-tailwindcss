import { useState } from 'react';

import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="bg-navy flex flex-col">
      <div
        className="container mx-auto grid grid-cols-2 gap-6"
        style={{ height: '95vh' }}
      >
        <div className="left flex items-center">
          <div>
            <div
              className="text-8xl	text-white font-bold mb-5"
              data-aos="zoom-in"
            >
              Connect <br /> to Another <br />
              <span className="text-orange">People</span>
            </div>
            <img
              src="/image-1.png"
              alt="image-1"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
        <div className="right flex items-center justify-center">
          {isRegister == true ? (
            <Register setIsRegister={setIsRegister} />
          ) : (
            <Login setIsRegister={setIsRegister} />
          )}
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
