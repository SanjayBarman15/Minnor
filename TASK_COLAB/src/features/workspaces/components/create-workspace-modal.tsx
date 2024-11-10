"use client";

import { ResponsiveModal } from "@/components/responsive-model";
import { CreateWorkspaceForm } from "./create-workspace-form";
import { useCreteWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen,close } = useCreteWorkspaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close}/>
    </ResponsiveModal>
  );
};