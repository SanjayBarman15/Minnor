"use client";

import {ResponsiveModal} from "@/components/responsive-model";
import { useCreteTaskModal } from "../hooks/use-create-task-modal";

export const CreateTaskModal = () => {
    const {isOpen, setIsOpen, close} = useCreteTaskModal()
    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <div className="f">
                TODO:Task Form
            </div>
        </ResponsiveModal>
    ) 
}