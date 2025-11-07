import { ReactElement } from "react";
import { QuickLinks } from "~components/quick-links";
import { GlobalStyles } from "~global-styles";
import { Container, TimeLabel } from "~newtab.styles"

const NewTab = (): ReactElement => {
  return (
    <Container>
      <GlobalStyles />
      <TimeLabel>15:20</TimeLabel>
      <QuickLinks />
    </Container>
  )
}

export default NewTab