import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Skeleton,
} from "@/shared/ui";

import { LuLogOut as LogOut } from "react-icons/lu";

export function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar>
          <AvatarImage src={""} />
          <AvatarFallback>IA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem className="cursor-pointer">
          <LogOut />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function UserButtonLoading() {
  return <Skeleton className="h-10 w-10 rounded-full" />;
}
