import { Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface DialogComponentInterface {
  open: boolean;
  handleColse?: () => void;
  children: ReactNode;
}

export function DialogComponent({
  open,
  handleColse = () => {},
  children,
}: DialogComponentInterface) {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        handleColse();
      }}
    >
      {children}
    </Dialog>
  );
}
