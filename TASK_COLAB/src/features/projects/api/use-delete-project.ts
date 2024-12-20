import {toast} from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
=======

>>>>>>> a4d7b51 (Initial Tasks commit)

type ResponseType = InferResponseType<typeof client.api.projects[":projectId"]["$delete"],200>;
type RequestType = InferRequestType<typeof client.api.projects[":projectId"]["$delete"]>;

export const useDeleteProject = () => {
<<<<<<< HEAD
  const router = useRouter();
=======
>>>>>>> a4d7b51 (Initial Tasks commit)
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.projects[":projectId"]["$delete"]({ param });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      return await response.json();
    },
    onSuccess: ({data}) => {
      toast.success("Project deleted");
<<<<<<< HEAD
      router.refresh();
=======
>>>>>>> a4d7b51 (Initial Tasks commit)
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
    },
    onError: () => {
      toast.error("Failed to deleted project");
    }
  });
  return mutation;
};
