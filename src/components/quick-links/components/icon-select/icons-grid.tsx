import { Icon } from '@components/icon';
import Grid from '@mui/material/Grid';
import { memo, ReactElement } from 'react';
import { IconType } from 'react-icons';

import { StyledIconButton } from './styles';

interface IGridProps {
  icons: [string, IconType][];
  onClick: (name: string) => Promise<void>;
}

const IconsGrid = ({ icons, onClick }: IGridProps): ReactElement => {
  return (
    <Grid container spacing={1}>
      {icons.map(([name]) => (
        <Grid key={name}>
          <StyledIconButton
            onClick={() => onClick(name)}
          >
            <Icon.FaIcon iconName={name}/>
          </StyledIconButton>
        </Grid>
      ))}
    </Grid>
  );
};

export const MemoizedIconsGrid = memo(IconsGrid);