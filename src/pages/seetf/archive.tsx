import {
  Button,
  Center,
  createStyles,
  Divider,
  Text,
  Title,
  Anchor,
  Image
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

  paragraphTextWithoutSpacing: {
    fontSize: "1.05rem",
  },

  paragraphWithArrows: {
    ":before": {
      content: "'>>'",
      display: "inline-block",
      width: "1.5rem",
      height: "1.5rem",
      marginRight: "0.5rem",
      fontWeight: 500,
      color: theme.colorScheme === "dark" ? "#B5E853" : theme.colors.gray[9],
    },
  },

  listContainer: {
    marginBlockStart: "2rem",
    marginBlockEnd: "4rem",
  },

  divider: {
    marginBlock: "1rem",
  },
}));

const Archive: NextPageWithLayout = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <NextSeo title="Home" />
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.titleWrapper}>
          <Title order={1} className={classes.mainTitle}>
            Archive
          </Title>
        </div>

        <Title order={2} className={classes.secondaryTitle}>
          SEETF 2022
        </Title>
        <Text className={classes.paragraphText}>
          Our <Anchor href="https://ctftime.org/event/1543" target="_blank" underline={false}>
           inaugural run of SEETF
          </Anchor> was a huge success.
          We had 2,000+ participants from all over the world,
          who <Anchor href="https://ctftime.org/event/1543/weight" target="_blank" underline={false}>
            loved
          </Anchor> our challenges!
          This would not have been possible without the support of our sponsors and participants,
          and we are extremely grateful for your support.
        </Text>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Image
            radius="md"
            src="../scoreboard_2022.jpeg"
            alt="CTF Tactics Iceberg"
          />
        </div>
        <Title order={3} className={classes.secondaryTitle}>
          Winners
        </Title>
        <Text className={classes.paragraphText}>
          After 48 hours of intense competition, <Anchor href="https://ctftime.org/team/58979/" target="_blank" underline={false}>
            no rev/pwn no life (r3kapig)
          </Anchor>, N00b, and <Anchor href="https://ctftime.org/team/58980/" target="_blank" underline={false}>
            NUSHmallows
          </Anchor> emerged victorious and took home the top three prizes.
        </Text>
        <Title order={3} className={classes.secondaryTitle}>
          Mastery Awards
        </Title>
        <div className={classes.listContainer}>
          <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            peko hacked the interwebz and took home the Mastery Award for Web.
          </Text>
          <Divider
            variant="dashed"
            size="sm"
            color="#B5E8535A"
            className={classes.divider}
          />
          <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            willwam845 violated the official secrets act and took home the Mastery Award for Crypto.
          </Text>
          <Divider
            variant="dashed"
            size="sm"
            color="#B5E8535A"
            className={classes.divider}
          />
          <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            thehackerscrew went shell collecting at east coast park and took home the Mastery Award for Pwn.
          </Text>
          <Divider
            variant="dashed"
            size="sm"
            color="#B5E8535A"
            className={classes.divider}
          />
          <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            AuroraDawn passed their Introduction to Programming class and took home the Mastery Award for Reversing.
          </Text>
          <Divider
            variant="dashed"
            size="sm"
            color="#B5E8535A"
            className={classes.divider}
          />
                      <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            nthistle joined the <Anchor href="https://miscgang.xyz/" target="_blank" underline={false}>
              Miscgang</Anchor> and took home the Mastery Award for Misc.
          </Text>
        </div>
        <Title order={3} className={classes.secondaryTitle}>
          Writeups
        </Title>
        <Text className={classes.paragraphText}>
          Go read these <Anchor href="https://docs.google.com/spreadsheets/d/12a7onACZZQLCvL7AdhBUUDV2OOo0AEXhlsNNXVWrSJ4/edit?usp=sharing" target="_blank" underline={false}>
            awesome writeups</Anchor> by our participants!
        </Text>
      </SectionContainer>
    </>
  );
};

Archive.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Archive;
