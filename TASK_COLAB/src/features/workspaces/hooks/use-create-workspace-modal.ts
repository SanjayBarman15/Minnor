import { set } from "date-fns";
import { useQueryState, parseAsBoolean } from "nuqs";

<<<<<<< HEAD
export const useCreteWorkspaceModal = () => {
=======
export const useCreateWorkspaceModal = () => {
>>>>>>> a4d7b51 (Initial Tasks commit)
  const [isOpen, setIsOpen] = useQueryState(
    "create-workspace",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
};
