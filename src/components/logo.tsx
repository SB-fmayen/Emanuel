import { schoolInfo } from "@/lib/data";

export function Logo() {
  return (
    <span className="font-headline text-xl font-bold text-primary">
      {schoolInfo.shortName}
    </span>
  );
}
