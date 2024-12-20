import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
<<<<<<< HEAD
import { getWorkspace } from "@/features/workspaces/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";

interface WorkspaceSettingPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceSettingPage = async ({ params }: WorkspaceSettingPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
=======
import { WorkspaceSettingClient } from "./client";

const WorkspaceSettingPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <WorkspaceSettingClient/>
>>>>>>> a4d7b51 (Initial Tasks commit)
  );
};

export default WorkspaceSettingPage;
