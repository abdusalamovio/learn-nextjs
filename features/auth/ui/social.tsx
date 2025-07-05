import { Button } from "@/shared/ui";
import { FaGoogle as Google, FaYandex as Yandex } from "react-icons/fa";

export function Social() {
  return (
    <div className="mb-2 grid grid-cols-2 gap-6 space-y-4">
      <Button variant={"outline"} className="cursor-pointer">
        <Google className="mr-2 size-4" />
        Google
      </Button>
      <Button variant={"outline"} className="cursor-pointer">
        <Yandex className="mr-2 size-4" />
        Яндекс
      </Button>
    </div>
  );
}
