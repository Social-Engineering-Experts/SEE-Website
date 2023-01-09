import {
  Button,
  Center,
  createStyles,
  Divider,
  Text,
  Title,
  Image,
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

const Rules: NextPageWithLayout = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <NextSeo title="Home" />
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.titleWrapper}>
          <Title order={1} className={classes.mainTitle}>
            Rules
          </Title>
        </div>

        <Text className={classes.paragraphText}>
          Team sizes are capped at 3. Other than that, our rules are no
          different from any other CTF competition. Please note that this list
          is non-exhaustive and any activity that compromises the integrity of
          the competition will result in disqualification.
        </Text>

        <div className={classes.listContainer}>
          <Text
            className={cx(classes.paragraphTextWithoutSpacing, {
              [classes.paragraphWithArrows]: 1,
            })}
          >
            Do not attack the competition infrastructure. NONE of our challenges
            require you to run fuzzers, scanners, or bruteforcing tools on our
            servers, so please do not waste your time on that.
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
            Strictly no discussion of solutions or hints before the CTF is over.
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
            Strictly no cross-team communication or collaboration before the CTF
            is over.
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
            Please note that this is NOT a CTF about social engineering! We do
            not condone the use of social engineering techniques during the
            competition.
          </Text>
        </div>

        <Text className={classes.paragraphText}>
          At the end of the day, it boils down to exercising common sense and
          courtesy to your fellow competitors. Please do not engage in anything
          below the &#34;Taboo CTF Tactics&#34; part of the iceberg.
        </Text>

        <div style={{ maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
          <Image
            radius="md"
            src="../CTFTactics.jpeg"
            alt="Random unsplash image"
          />
        </div>
      </SectionContainer>
    </>
  );
};

Rules.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Rules;
