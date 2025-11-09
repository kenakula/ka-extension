import { ReactElement, useLayoutEffect } from "react";
import { QuickLinks } from "~components/quick-links";
import { GlobalStyles } from "~global-styles";
import { Container } from "~newtab.styles";
import { Clock } from "~components/clock";

const NewTab = (): ReactElement => {
  useLayoutEffect(() => {
    document.title = "New Tab";
  }, []);

  return (
    <Container>
      <GlobalStyles />
      <Clock />
      <QuickLinks />
    </Container>
  );
};

export default NewTab;
