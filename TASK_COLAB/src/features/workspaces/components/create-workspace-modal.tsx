"use client";

import { ResponsiveModal } from "@/components/responsive-model";
import { CreateWorkspaceForm } from "./create-workspace-form";
<<<<<<< HEAD
import { useCreteWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen,close } = useCreteWorkspaceModal();
=======
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen,close } = useCreateWorkspaceModal();
>>>>>>> a4d7b51 (Initial Tasks commit)
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close}/>
    </ResponsiveModal>
  );
};
