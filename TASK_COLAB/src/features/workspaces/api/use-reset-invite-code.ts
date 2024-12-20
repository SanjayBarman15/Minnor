import {toast} from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
=======

>>>>>>> a4d7b51 (Initial Tasks commit)

type ResponseType = InferResponseType<typeof client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"],200>;
type RequestType = InferRequestType<typeof client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"]>;

export const useResetInviteCode = () => {
<<<<<<< HEAD
  const router = useRouter();
=======

>>>>>>> a4d7b51 (Initial Tasks commit)
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"]({ param });

      if (!response.ok) {
        throw new Error("Failed to reset invite code");
      }

      return await response.json();
    },
    onSuccess: ({data}) => {
      toast.success("Invite code reset");
<<<<<<< HEAD
      router.refresh();
=======
>>>>>>> a4d7b51 (Initial Tasks commit)
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      queryClient.invalidateQueries({ queryKey: ["workspaces", data.$id] });
    },
    onError: () => {
      toast.error("Failed to reset invite code");
    }
  });
  return mutation;
};
