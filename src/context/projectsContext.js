import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext();

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

export const ProjectsContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [editPressed, setEditPressed] = useState(false);

  const initialData = {
    title: "",
    desc: "",
    link: "",
    category: "",
    mainImage: "",
    hoverImage: "",
  };

  const [formData, setFormData] = useState(initialData);

  const [droppedImage, setDroppedImage] = useState("");
  const [droppedHoverImage, setDroppedHoverImage] = useState("");

  function clearFormData() {
    setFormData(initialData);
  }
  
  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDroppedImage("");
    setDroppedHoverImage("");
    clearFormData();
    setEditPressed(false);
  };

  return (
    <ProjectsContext.Provider
      value={{
        open,
        setOpen,
        editPressed,
        setEditPressed,
        openModal,
        handleClose,
        formData,
        setFormData,
        clearFormData,
        droppedImage,
        setDroppedImage,
        droppedHoverImage,
        setDroppedHoverImage,
        initialData
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
