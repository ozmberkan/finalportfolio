import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "~/components/Admin/AdminNavbar";
import { adminTable } from "~/data/data";
import { getAllProjects } from "~/redux/slices/projectsSlice";
import { TiDeleteOutline } from "react-icons/ti";
import { BiEdit } from "react-icons/bi";

const Admin = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((store) => store.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div>
      <AdminNavbar />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {adminTable.map((table) => (
                <th scope="col" className="px-6 py-3" key={table.label}>
                  {table.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{project.title}</td>
                  <td className="px-6 py-4">
                    {project.description.slice(0, 5)}...
                  </td>
                  <td className="px-6 py-4">{project.link}</td>
                  <td className="px-6 py-4">
                    <img src={project.image} className="w-12" />
                  </td>
                  <td className="px-6 py-4">{project.githubLink}</td>
                  <td className="px-6 py-4">{project.version}</td>
                  <td className="px-6 py-4">
                    {project.responsive ? "Evet" : "Hayır"}
                  </td>
                  <td className="px-6 py-4">{project.technology}</td>
                  <td className="px-6 py-4">{project.styleTech}</td>
                  <td className="px-6 py-4 flex gap-x-3">
                    <button className="text-xl">
                      <TiDeleteOutline />
                    </button>
                    <button className="text-xl">
                      <BiEdit />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  colSpan={adminTable.length}
                  className="px-6 py-4 text-center"
                >
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
