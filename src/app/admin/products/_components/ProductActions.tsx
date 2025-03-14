import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";

export const ActiveToggleDropdownItem = ({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  return <DropdownMenu onclick={() => startTransition}></DropdownMenu>;
};

export const DeleteDropdownItem = () => {
  return <div>ActiveToggleDropdownItem</div>;
};
