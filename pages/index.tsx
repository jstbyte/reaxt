import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  insideTitle: {
    fontSize: 32,
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hire <span className={classes.highlight}>Developers</span>
              <br />
              <span className={classes.insideTitle}>Web, Mobile, IOT etc.</span>
            </Title>
            <Text color='dimmed' mt='md'>
              We Build fully functional accessible & modern web applications
              with latest technologies like – react, nextjs, tailwindcss,
              typescript, prisma, graphql etc.
            </Text>

            <List
              mt={30}
              spacing='sm'
              size='sm'
              icon={
                <ThemeIcon size={20} radius='xl'>
                  <span>✓</span>
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Modern Design</b> – Beautiful, modern, clean, accessible and
                best in class user experience.
              </List.Item>
              <List.Item>
                <b>High Performance</b> – Optimized data flow and interface for
                high performance and low operating cost.
              </List.Item>
              <List.Item>
                <b>Service Based</b> – We also provide software as a service. We
                will manage your software.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius='xl' size='md' className={classes.control}>
                Hire Us
              </Button>
              <Button
                variant='default'
                radius='xl'
                size='md'
                className={classes.control}
              >
                Explorer
              </Button>
            </Group>
          </div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src='/hero.svg' className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
