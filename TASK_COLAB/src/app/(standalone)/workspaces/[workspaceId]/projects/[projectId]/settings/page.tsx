import { getCurrent } from "@/features/auth/queries";
<<<<<<< HEAD
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";

interface ProjectIdSettingsPageProps {
    params: {
        projectId: string;
    }
}

const ProjectIdSettingsPage = async ({ params }: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId, });

  return (
  <div className="w-full lg:max-w-xl ">
    <EditProjectForm initialValues={initialValues} /> 
  </div>
  )
=======
import { redirect } from "next/navigation";
import { ProjectIdSettingClient } from "./client";
interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  
  return <ProjectIdSettingClient />;
>>>>>>> a4d7b51 (Initial Tasks commit)
};

export default ProjectIdSettingsPage;
