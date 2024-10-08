import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { db } from "~/firebase/firebase";
import { getAllProjects } from "~/redux/slices/projectsSlice";

const AddModal = ({ setIsAddModal }) => {
  const { register, handleSubmit } = useForm({});

  const dispatch = useDispatch();

  const addProject = async (data) => {
    try {
      const processedData = {
        ...data,
        responsive: data.responsive === "true",
      };

      const projectsRef = doc(collection(db, "projects"));

      await setDoc(projectsRef, processedData);

      dispatch(getAllProjects());
      toast.success("Başarıyla yeni proje eklendi.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative z-10">
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity z-0"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1 className="sm:flex sm:items-start text-black font-semibold">
                Proje Ekle
              </h1>
            </div>

            <form
              className=" grid grid-cols-2 gap-5 p-5"
              onSubmit={handleSubmit(addProject)}
            >
              <div className="flex flex-col gap-y-1 text-black">
                <label>Başlık</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("title")}
                />
              </div>

              <div className="flex flex-col gap-y-1 text-black">
                <label>Görsel</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("image")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black">
                <label>Versiyon</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("version")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black">
                <label>Teknoloji</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("technology")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black">
                <label>Stil Teknoloji</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("styleTech")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black">
                <label>Github Link</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("githubLink")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black ">
                <label>Canlı Link</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("link")}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-black ">
                <label>Duyarlılık</label>
                <select
                  className="px-4 py-2 rounded-md border text-black"
                  {...register("responsive")}
                >
                  <option value="">Seçiniz</option>
                  <option value={true}>Evet</option>
                  <option value={false}>Hayır</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-1 text-black col-span-2">
                <label>Açıklama</label>
                <textarea
                  type="text"
                  className="min-w-full  max-h-[150px] min-h-[150px] border p-2"
                  {...register("description")}
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Vazgeç
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
