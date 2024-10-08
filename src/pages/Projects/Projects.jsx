import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "~/redux/slices/projectsSlice";
import { dotWave } from "ldrs";
import Project from "~/components/Project/Project";

const Projects = () => {
  dotWave.register();

  const dispatch = useDispatch();
  const { projects, isLoading } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-grow justify-center items-center w-full">
        <l-dot-wave size="250" speed="1" color="white"></l-dot-wave>
      </div>
    );
  }

  console.log(projects);

  return (
    <div className="w-full flex-grow p-12 grid grid-cols-3 gap-5">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
