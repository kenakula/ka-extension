import { ReactElement, useLayoutEffect } from "react";
import { QuickLinks } from "@components/quick-links";
import { Clock } from "@components/clock";
import { NewTabContainer, GlobalStyles } from "@shared/styles";

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = "New Tab";
  }, []);

  return (
    <NewTabContainer>
      <GlobalStyles />
      <Clock />
      <QuickLinks />
    </NewTabContainer>
  );
};

export default NewTab;
