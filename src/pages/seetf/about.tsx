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




export function DiscordButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"a">
) {
  return (
    <Button
      component="a"
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

const About: NextPageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <>
      <NextSeo title="About" />
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.titleWrapper}>
          <Title order={1} className={classes.mainTitle}>
            SEETF 2023
          </Title>
        </div>
        <Title order={2} className={classes.secondaryTitle}>
          Birds Aren't Real.
        </Title>
        <Text className={classes.paragraphText}>
          They are actually drones used by the government to spy on you.
          The Super Evil Elite Intelligence Agency (SEE-IA) desperately wants to keep this a secret,
          but hacker and whistleblower rainbowpigeon is determined to expose them.
        </Text>
        <Text className={classes.paragraphText}>
          Will you help rainbowpigeon expose the truth? Or will you help SEE-IA cover up their crimes?
          The choice is yours.
        </Text>
        <Title order={2} className={classes.secondaryTitle}>
          Details Coming Soon.
        </Title>
        <Text className={classes.paragraphText}>
          The competition will run from Sat, 03 June 2023, 10:00 SGT — Sun, 04 June 2023, 18:00 SGT.
          Please check back later for more details.
        </Text>
        <Title order={2} className={classes.secondaryTitle}>
          Sponsorship
        </Title>
        <Text className={classes.paragraphText}>
          <Text fw={700}>If you or your company is interested in sponsoring us, please contact us at sponsor [AT] seetf.sg.</Text>
        </Text>
        <Group position="center" mt="xl">
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ctftime.org/team/151372"
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
          <TwitterButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/seetf_sg">
            Twitter
          </TwitterButton>
          <DiscordButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/seetf_sg">
            Join our Discord
          </DiscordButton>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/social-engineering-experts/"
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

About.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default About;
