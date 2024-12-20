import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { CreateProjectModal } from "@/features/projects/components/create-project-modal";
import { CreateTaskModal } from "@/features/tasks/components/create-task-modal";
<<<<<<< HEAD
=======
import { EditTaskModal } from "@/features/tasks/components/edit-task-modal";
>>>>>>> a4d7b51 (Initial Tasks commit)
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayoutProps = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen ">
      <CreateWorkspaceModal />
      <CreateProjectModal />
      <CreateTaskModal />
<<<<<<< HEAD
=======
      <EditTaskModal/>
>>>>>>> a4d7b51 (Initial Tasks commit)
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-auto">
            <Sidebar/>
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="flex h-full py-8 px-6 flex-col">
                {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutProps;
