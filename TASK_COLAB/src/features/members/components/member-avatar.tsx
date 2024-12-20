import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassName?: string;
}

export const MemberAvatar= ({
  name,
  className,
  fallbackClassName,
}: MemberAvatarProps) => {
  // if (image) {
  //   return (
  //     <div
  //       className={cn("size-10 relative rounded-md overflow-hidden", className)}
  //     >
  //       <Image src={image} alt={name} fill className="object-cover" />
  //     </div>
  //   );
  // }
  return (
    <Avatar className={cn("size-5 transition border border-neutral-300 rounded-full", className)}>
      <AvatarFallback className={cn(
        "bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center",fallbackClassName
      )}>
<<<<<<< HEAD
        {name.charAt(0).toUpperCase()}
=======
        {(name?.charAt(0) || "?").toUpperCase()}
>>>>>>> a4d7b51 (Initial Tasks commit)
      </AvatarFallback>
    </Avatar>
  );
};
