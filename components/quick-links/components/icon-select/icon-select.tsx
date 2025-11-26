import { ReactElement, useEffect, useState, useTransition } from "react";
import { useFormikContext } from "formik";
import * as icons from "react-icons/fa6";
import { RadioGroup, VisuallyHidden } from "radix-ui";
import {
  IconDialogContent,
  IconDialogHeader,
  RadioIndicator,
  RadioItem,
} from "./styles";
import { IQuickLink } from "@shared/interfaces";
import { IconType } from "react-icons";
import { useDebounce } from "@shared/hooks";
import { Dialog, DialogTitle } from "@components/dialog";
import { Icon } from "@components/icon/icon";
import { GenericButton } from "@components/button";

const iconsList = Object.entries(icons);

interface IProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const IconSelect = ({ isOpen, onOpenChange }: IProps): ReactElement => {
  const [filteredIcons, setFilteredIcons] =
    useState<[string, IconType][]>(iconsList);
  const [searchString, setSearchString] = useState<string>("");
  const [iconColor, setIconColor] = useState("aliceblue");
  const formik = useFormikContext<IQuickLink>();

  const [isTransitioning, startTransition] = useTransition();

  const debouncedSearchString = useDebounce<string>(searchString, 300);

  const handleColorValueChange = async (value: string) => {
    setIconColor(value);
    await formik.setFieldValue("iconColor", value);
  };

  useEffect(() => {
    if (!debouncedSearchString) {
      setFilteredIcons(iconsList);

      return;
    }

    startTransition(() => {
      const filtered = iconsList.filter(([iconName]) =>
        iconName.toLowerCase().includes(debouncedSearchString.toLowerCase()),
      );
      setFilteredIcons(filtered);
    });
  }, [debouncedSearchString]);

  return (
    <Dialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <IconDialogContent>
        <IconDialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Select icon</DialogTitle>
          </VisuallyHidden.Root>
          <label>
            search
            <input
              type="text"
              value={searchString}
              onInput={(e) => {
                setSearchString(e.currentTarget.value);
              }}
            />
          </label>
          <div>
            <span>Choose color</span>
            <RadioGroup.Root onValueChange={handleColorValueChange}>
              <RadioItem value="aliceblue">
                <RadioIndicator />
              </RadioItem>
              <RadioItem value="red">
                <RadioIndicator />
              </RadioItem>
              <RadioItem value="blue">
                <RadioIndicator />
              </RadioItem>
            </RadioGroup.Root>
          </div>
        </IconDialogHeader>
        {isTransitioning ? (
          <span>Loading ...</span>
        ) : (
          <ul>
            {filteredIcons.map(([name]) => (
              <li key={name}>
                <GenericButton
                  type="button"
                  style={{ color: iconColor }}
                  onClick={async () => {
                    await formik.setFieldValue("iconName", name);
                    onOpenChange(false);
                  }}
                >
                  <Icon.FaIcon iconName={name} />
                  <span>{name.slice(2)}</span>
                </GenericButton>
              </li>
            ))}
          </ul>
        )}
      </IconDialogContent>
    </Dialog>
  );
};
