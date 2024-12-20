import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProjectAvatarProps {
  image?: string;
<<<<<<< HEAD
  name: string;
=======
  name?: string;
>>>>>>> a4d7b51 (Initial Tasks commit)
  className?: string;
  fallbackClassName?: string;
}

export const ProjectAvatar = ({
  image,
  name,
  className,
  fallbackClassName,
}: ProjectAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("size-5 relative rounded-md overflow-hidden", className)}
      >
<<<<<<< HEAD
        <Image src={image} alt={name} fill className="object-cover" />
=======
        <Image src={image} alt={name || "Project"} fill className="object-cover" />
>>>>>>> a4d7b51 (Initial Tasks commit)
      </div>
    );
  }
  return (
    <Avatar className={cn("size-5 rounded-md", className)}>
      <AvatarFallback
        className={cn(
          "text-white bg-blue-600 font-semibold text-sm uppercase rounded-md",
          fallbackClassName
        )}
      >
<<<<<<< HEAD
        {name[0]}
=======
        {name?.charAt(0).toUpperCase() || "?"}
>>>>>>> a4d7b51 (Initial Tasks commit)
      </AvatarFallback>
    </Avatar>
  );
};
