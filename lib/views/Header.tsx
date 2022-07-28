import { createStyles, Group, Header as MHeader } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    right: 0,
    left: 0,
    // Other Styles
    paddingLeft: 30,
    paddingRight: 20,
  },
  group: {
    alignItems: 'center',
    height: '100%',
  },
  title: {
    flex: 1,
    color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    margin: 0,
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return (
    <MHeader height={40} className={classes.root}>
      <Group className={classes.group}>
        <h2 className={classes.title}>JstByte</h2>
      </Group>
    </MHeader>
  );
}
