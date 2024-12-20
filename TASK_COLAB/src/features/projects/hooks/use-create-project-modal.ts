import { set } from "date-fns";
import { useQueryState, parseAsBoolean } from "nuqs";

<<<<<<< HEAD
export const useCreteProjectModal = () => {
=======
export const useCreateProjectModal = () => {
>>>>>>> a4d7b51 (Initial Tasks commit)
  const [isOpen, setIsOpen] = useQueryState(
    "create-project",
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
