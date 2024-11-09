import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
    name: z.string().min(1, "Required"),
    status: z.nativeEnum(TaskStatus,{required_error: "Required"}),
    workspaceId: z.string().min(1, "Required").trim(),
    projectId: z.string().min(1, "Required").trim(),
    dueDate: z.coerce.date(),
    assigneeId:z.string().min(1, "Required").trim(),
    description: z.string().optional(),
})