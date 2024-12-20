"use client";

import {ResponsiveModal} from "@/components/responsive-model";
<<<<<<< HEAD
import { useCreteTaskModal } from "../hooks/use-create-task-modal";

export const CreateTaskModal = () => {
    const {isOpen, setIsOpen, close} = useCreteTaskModal()
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <div className="f">
                TODO:Task Form
            </div>
=======
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModal = () => {
    const {isOpen, setIsOpen, close} = useCreateTaskModal()
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CreateTaskFormWrapper onCancel={close}/>
>>>>>>> a4d7b51 (Initial Tasks commit)
        </ResponsiveModal>
    ) 
}