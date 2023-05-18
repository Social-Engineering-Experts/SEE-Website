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
          Open Division
        </Title>
        <Text className={classes.paragraphText}>
          <ul>
            <li>1st to 3rd place: 4x 1 year Burp Bounty Pro</li>
          </ul>
        </Text>
        <Title order={2} className={classes.secondaryTitle}>
          Singapore Students Division
        </Title>
        <Text className={classes.paragraphText}>
          <ul>
            <li>1st place: 1000 SGD</li>
            <li>2nd place: 500 SGD</li>
            <li>3rd place: 300 SGD</li>
            <li>Raffle: 1x OffSec 90 day course and 1x OffSec Learn Fundamentals</li>
          </ul>
        </Text>
      </SectionContainer>
    </>
  );
};

Prizes.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Prizes;
