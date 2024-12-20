"use client";

import { ResponsiveModal } from "@/components/responsive-model";
import { CreateProjectForm } from "./create-project-form";
<<<<<<< HEAD
import { useCreteProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen,close } = useCreteProjectModal();
=======
import { useCreateProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen,close } = useCreateProjectModal();
>>>>>>> a4d7b51 (Initial Tasks commit)
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close}/>
    </ResponsiveModal>
  );
};
 