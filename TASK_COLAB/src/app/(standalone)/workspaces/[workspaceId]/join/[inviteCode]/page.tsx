import {redirect} from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

interface workspaceJoinPageProps {
    params: {
      workspaceId: string;
    };
  }

const workspaceJoinPage = async ({params}: workspaceJoinPageProps) => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    const initialValues = await getWorkspaceInfo({ 
        workspaceId: params.workspaceId 
    });

    if (!initialValues) {
        redirect("/")
    }

    return (
        <div className="w-full lg:max-w-xl">
            <JoinWorkspaceForm initialValues={initialValues} />
        </div>
    )
}

export default workspaceJoinPage;