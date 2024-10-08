import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" w-full flex flex-grow flex-col gap-y-12 p-12">
      <div className="flex flex-col gap-y-5 w-full ">
        <div className="w-full sm:h-20 flex sm:justify-between items-center sm:flex-row flex-col gap-y-2  ">
          <h1 className="sm:text-2xl text-sm   font-semibold text-center">
            Sık kullandığım teknolojiler.
          </h1>
          <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,bootstrap,tailwind,nextjs,redux" />
        </div>
        <div className="w-full sm:h-20 flex sm:justify-between items-center sm:flex-row flex-col gap-y-2  ">
          <h1 className="sm:text-2xl text-sm font-semibold text-center">
            Backend tarafında kullandığım teknolojiler.
          </h1>
          <img src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongodb,postman" />
        </div>
      </div>
      {/* <div className="w-full flex flex-col gap-y-7 ">
        <h1 className="text-5xl font-semibold  text-zinc-300 animate-pulse">
          Merhaba, kişisel portfolyo günceme hoş geldin. projelerimi
          inceleyebilir. İletişime geçebilirsin.
        </h1>
        <Link
          to="/projects"
          className="bg-neutral-900 text-white hover:ring-2 ring-offset-2 ring-offset-black ring-neutral-700 transition-all duration-500 w-44 flex justify-center items-center p-2 rounded-md "
        >
          Projelerime göz at!
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
