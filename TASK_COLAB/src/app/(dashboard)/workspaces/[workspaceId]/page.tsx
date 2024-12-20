import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
<<<<<<< HEAD
=======
import { WorkspaceIdClient } from "./client";
>>>>>>> a4d7b51 (Initial Tasks commit)

const WorkspaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");
<<<<<<< HEAD
  return <div className="g">WorkspaceId</div>;
=======
  return <WorkspaceIdClient/>;
>>>>>>> a4d7b51 (Initial Tasks commit)
};

export default WorkspaceIdPage;
