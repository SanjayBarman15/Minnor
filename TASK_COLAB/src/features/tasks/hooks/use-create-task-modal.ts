import { useQueryState, parseAsBoolean } from "nuqs";

<<<<<<< HEAD
export const useCreteTaskModal = () => {
=======
export const useCreateTaskModal = () => {
>>>>>>> a4d7b51 (Initial Tasks commit)
  const [isOpen, setIsOpen] = useQueryState(
    "create-task",
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
