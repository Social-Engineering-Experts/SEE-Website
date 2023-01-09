import {
  Button,
  ButtonProps,
  Center,
  createStyles,
  Divider,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { DiscordIcon, TwitterIcon } from "@mantine/ds";
import { IconBrandTwitter } from "@tabler/icons";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import HomeLayout from "src/components/layouts/HomeLayout";
import SectionContainer from "src/components/SectionContainer";
import { NextPageWithLayout } from "../_app";




export function DiscordButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<DiscordIcon size={16} />}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? "#5865F2" : "#5865F2",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.fn.lighten("#5865F2", 0.05)
              : theme.fn.darken("#5865F2", 0.05),
        },
      })}
      {...props}
    />
  );
}

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"a">
) {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size={16} />}
      {...props}
    />
  );
}

const useStyles = createStyles((theme) => ({
  sectionContainer: {
    // marginBlockStart: "2.5rem",
    marginBlockEnd: "5rem",
  },

  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    // padding
    paddingTop: "2.5rem",
    paddingBottom: "1.2rem",
  },

  mainTitle: {
    fontSize: "clamp(2rem, 1.6rem + 2vw, 4rem)",
    fontFamily: "Fira Code",
    color: theme.colorScheme === "dark" ? "#B5E853" : theme.colors.gray[9],
  },

  secondaryTitle: {
    fontSize: "1.6875rem",
    marginTop: "2.5625rem",
    marginBottom: "0.8125rem",
    color: theme.colorScheme === "dark" ? "#B5E853" : theme.colors.gray[9],
  },


  paragraphText: {
    fontSize: "1.05rem",
    marginBottom: "1.4rem",
  },
}));

const Prizes: NextPageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <>
      <NextSeo title="Home" />
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.titleWrapper}>
          <Title order={1} className={classes.mainTitle}>
            Prizes
          </Title>
        </div>

        <Title order={2} className={classes.secondaryTitle}>
          To Be Announced. Stay tuned!
        </Title>
        <Text className={classes.paragraphText}>
          Stay tuned for updates on our amazing prizes! We are currently
          finalizing all the details and can&#39;t wait to share them with you.
          Also, be sure to follow us on social media to stay in the loop and be
          the first to know when we announce the prizes. Trust us. You won&#39;t
          want to miss out on these exciting rewards!
        </Text>
        <Group position="center" mt="xl">
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/seetf_sg"
            styles={(theme) => ({
              root: {
                backgroundColor: "#D02C22",
                border: 0,
                // height: 42,
                // paddingLeft: 20,
                // paddingRight: 20,

                "&:hover": {
                  backgroundColor: theme.fn.darken("#D02C22", 0.1),
                },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            CTFTime
          </Button>
          <TwitterButton>Twitter</TwitterButton>
          <DiscordButton>Join our Discord</DiscordButton>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/seetf_sg"
            // leftIcon={<IconBrandTwitter size={16} />}
            styles={(theme) => ({
              root: {
                backgroundColor: "#0072b1",
                border: 0,
                // height: 42,
                // paddingLeft: 20,
                // paddingRight: 20,

                // "&:hover": {
                //   backgroundColor: theme.fn.darken("#00acee", 0.05),
                // },
              },

              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            LinkedIn
          </Button>
        </Group>
      </SectionContainer>
    </>
  );
};

Prizes.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Prizes;
