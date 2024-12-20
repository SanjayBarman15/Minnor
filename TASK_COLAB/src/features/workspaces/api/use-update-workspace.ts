import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
<<<<<<< HEAD

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
=======
import { client } from "@/lib/rpc";
>>>>>>> a4d7b51 (Initial Tasks commit)

type ResponseType = InferResponseType<
  (typeof client.api.workspaces)[":workspaceId"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.workspaces)[":workspaceId"]["$patch"]
>;

export const useUpdateWorkspace = () => {
<<<<<<< HEAD
  const router = useRouter();
=======

>>>>>>> a4d7b51 (Initial Tasks commit)
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form, param }) => {
      const response = await client.api.workspaces[":workspaceId"]["$patch"]({
        form,
        param,
      });

      if (!response.ok) {
        throw new Error("Failed to update workspace");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("Workspace updated");
<<<<<<< HEAD
      router.refresh();
=======
>>>>>>> a4d7b51 (Initial Tasks commit)
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      queryClient.invalidateQueries({ queryKey: ["workspaces", data.$id] });
    },
    onError: () => {
      toast.error("Failed to create workspace");
    },
  });
  return mutation;
};
