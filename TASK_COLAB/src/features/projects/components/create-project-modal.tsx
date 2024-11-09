"use client";

import { ResponsiveModal } from "@/components/responsive-model";
import { CreateProjectForm } from "./create-project-form";
import { useCreteProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen,close } = useCreteProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close}/>
    </ResponsiveModal>
  );
};
 