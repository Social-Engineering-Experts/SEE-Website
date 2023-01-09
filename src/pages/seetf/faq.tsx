import {
  Button,
  Center,
  createStyles,
  Divider,
  Text,
  Title,
} from "@mantine/core";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import HomeLayout from "src/components/layouts/HomeLayout";
import SectionContainer from "src/components/SectionContainer";
import { NextPageWithLayout } from "../_app";

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
    fontFamily: "Fira Code",
  },

  paragraphText: {
    fontSize: "1.05rem",
    marginBottom: "1.4rem",
  },
}));

const FAQ: NextPageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <>
      <NextSeo title="Home" />
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.titleWrapper}>
          <Title order={1} className={classes.mainTitle}>
            FAQs
          </Title>
        </div>

        <Title order={2} className={classes.secondaryTitle}>
          What is a CTF?
        </Title>
        <Text className={classes.paragraphText}>
          A Capture the Flag (CTF) competition is a cybersecurity competition
          where teams compete to solve a series of challenges. These challenges
          usually revolve around specific topics such as web exploitation,
          binary exploitation, reverse engineering, forensics, cryptography,
          etc.
        </Text>
        <Text style={{fontSize: "1.05rem"}}>
          The goal of each challenge is usually to find a hidden piece of text,
          which is called the flag (hence the name of the competition). The flag
          can be hidden in a file, in a database, in a web page, in a binary,
          etc.
        </Text>
        <Title className={classes.secondaryTitle}>Who are you?</Title>
        <Text className={classes.paragraphText}>
          SEETF is run by Social Engineering Experts, a CTF team based in
          Singapore. We were ranked 2nd in Singapore on CTFtime in 2021, and are
          on track to retain or advance our rank for 2022.
        </Text>
        <Text style={{fontSize: "1.05rem"}}>
          Our members come from various backgrounds in the technology industry,
          but we&#39;re all united by our passion for CTF competitions!
        </Text>
        <Title className={classes.secondaryTitle}>
          What if I&#39;ve never done something like this before?
        </Title>
        <Text style={{fontSize: "1.05rem"}}>
          It can be intimidating, but this is the perfect opportunity to get
          your feet wet. We have challenges that span across various difficulty
          levels (look out for the beginner-friendly ones!), and learning from
          writeups after the CTF is over is a great way to become a better CTF
          player.
        </Text>
        <Title className={classes.secondaryTitle}>Who can participate?</Title>
        <Text style={{fontSize: "1.05rem"}}>Anyone who is a living, breathing human being.</Text>
      </SectionContainer>
    </>
  );
};

FAQ.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default FAQ;
