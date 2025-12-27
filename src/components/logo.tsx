import { schoolInfo } from "@/lib/data";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo Instituto Emanuel"
        width={50}
        height={50}
        className="object-contain"
      />
      <span className="font-headline text-xl font-bold text-primary hidden sm:inline">
        {schoolInfo.shortName}
      </span>
    </div>
  );
}
