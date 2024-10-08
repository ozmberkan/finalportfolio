import { Link } from "react-router-dom";
import { navTabs, socialMedia } from "~/data/data";
import blur from "~/assets/blur/blur.svg";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";

const Header = () => {
  const { user } = useSelector((store) => store.user);

  const exit = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[300px] flex justify-start items-start p-12 border-b border-zinc-500 relative">
      <img src={blur} className="absolute top-0 -z-10 " />

      <div className="flex gap-x-5 w-full">
        <img
          src="./profile.jpeg"
          alt="profile photo"
          className="min-w-48 max-h-48 object-cover rounded-xl ring-2 ring-offset-4 ring-[#075400]/80 ring-offset-black "
        />
        <div className="flex flex-col gap-y-4 w-full">
          <div className="flex gap-y-1  w-full justify-between items-start">
            <div className="flex flex-col">
              <h1 className="text-4xl font-black">Muhammed Berkan Özmen</h1>
              <p className="font-medium text-zinc-400">
                jr. front-end developer / react developer
              </p>
            </div>
            <div className="flex gap-x-5 ">
              {navTabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.to}
                  className="text-xl font-semibold text-zinc-400 hover:text-white transition-colors duration-500"
                >
                  {tab.label}
                </Link>
              ))}
              {user && (
                <div className="flex gap-x-5">
                  <Link
                    to="/admin"
                    className="text-xl font-semibold text-zinc-400 hover:text-white transition-colors duration-500"
                  >
                    Admin
                  </Link>
                  <button
                    onClick={exit}
                    className="text-xl font-semibold text-zinc-400 hover:text-white transition-colors duration-500"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex gap-x-4">
            {socialMedia.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.to === "/resume" ? "_self" : "_blank"}
                className="p-2 rounded-full border-2 hover:ring-2 hover:border-zinc-500 hover:text-zinc-500 hover:ring-offset-black hover:ring-zinc-600 ring-offset-2 border-white text-2xl transition-all duration-500"
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
