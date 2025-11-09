import { PropsWithChildren, ReactElement } from "react";
import { Tooltip as LibTooltip } from "radix-ui";
import { TooltipContent } from "./styles";

interface IProps extends PropsWithChildren {
  text: string;
}

export const Tooltip = ({ text, children }: IProps): ReactElement => {
  return (
    <LibTooltip.Provider>
      <LibTooltip.Root>
        <LibTooltip.Trigger asChild>{children}</LibTooltip.Trigger>
        <LibTooltip.Portal>
          <TooltipContent>{text}</TooltipContent>
        </LibTooltip.Portal>
      </LibTooltip.Root>
    </LibTooltip.Provider>
  );
};
