import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const {
    title,
    version,
    technology,
    description,
    styleTech,
    responsive,
    link,
    githubLink,
    image,
  } = project;

  return (
    <div className="w-full rounded-md bg-black border border-zinc-800  p-5 relative flex flex-col gap-y-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex sm:justify-between items-center  justify-center sm:flex-row flex-col gap-y-2 ">
        <h1 className="uppercase font-semibold text-white">{title}</h1>
        <div className="flex gap-x-3">
          <Link
            to={link}
            target="_blank"
            className="px-4 py-1 rounded-md bg-neutral-800 text-white hover:bg-neutral-600 transition-colors"
          >
            Canlı
          </Link>
          <Link
            to={githubLink}
            target="_blank"
            className="px-4 py-1 rounded-md bg-neutral-800 text-white hover:bg-neutral-600 transition-colors"
          >
            Github
          </Link>
        </div>
      </div>
      <div className="w-full relative">
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-44 object-cover rounded-md "
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-neutral-800 text-white px-2 py-1 rounded-md text-xs">
          {technology}
        </span>
        <span className="bg-orange-600 text-white px-2 py-1 rounded-md text-xs">
          {version}
        </span>
        {responsive && (
          <span className="bg-green-600 text-white px-2 py-1 rounded-md text-xs">
            Duyarlı
          </span>
        )}
        {styleTech && (
          <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs">
            {styleTech}
          </span>
        )}
      </div>
      <div className="w-full text-sm">{description}</div>
    </div>
  );
};

export default Project;
