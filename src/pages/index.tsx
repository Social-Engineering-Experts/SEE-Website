import {
  Anchor,
  Button,
  Center,
  createStyles,
  Divider,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandLinkedin, IconBrandTwitter, IconFlag, IconFlag3 } from "@tabler/icons";
import { NextSeo } from "next-seo";
import HomeLayout from "src/components/layouts/HomeLayout";
import SectionContainer from "src/components/SectionContainer";
import { NextPageWithLayout } from "./_app";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: "clamp(2rem, 1.6rem + 2vw, 4rem)",
    color: theme.colorScheme === "dark" ? "#B5E853" : theme.black,
    // fontFamily: "Fira Code",
    textAlign: "center",
  },

  secondaryTitle: {
    // fontFamily: "Fira Code",
    textAlign: "center",
  },

  primaryTextContainer: {
    marginBottom: "2.5rem",
  },

  socialsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  links: {
    fontWeight: 500,
    // fontFamily: "Fira Code",
    fontFamily: `${theme.fontFamilyMonospace}`,
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.25rem)",

    // Middle align with icon
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    "&:hover": {
      textDecoration: "none",
      transform: "scale(1.1)",
      transition: "transform 0.1s ease-in-out",
    }
  },
}));

const Home: NextPageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <>
      <NextSeo title="Home" />
      <Center style={{ width: "100vw", height: "100vh" }}>
        <div>
          <Flex
            mih={50}
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            className={classes.primaryTextContainer}
          >
            <Title order={1} className={classes.title}>
              Social Engineering Experts
            </Title>
            <Text className={classes.secondaryTitle}>Est. December 2020</Text>
          </Flex>
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Anchor href="https://ctftime.org/team/151372" target="_blank" className={classes.links}>
              <IconFlag3 color="white" />
              CTFTime
            </Anchor>
            <Anchor href="https://twitter.com/seetf_sg" target="_blank" className={classes.links}>
              <IconBrandTwitter color="white" />
              Twitter
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/company/social-engineering-experts"
              target="_blank"
              className={classes.links}
            >
              <IconBrandLinkedin color="white" />
              LinkedIn
            </Anchor>
          </Flex>
          {/* 
          <div className={classes.socialsContainer}>
            
          </div> */}

          <Divider my="sm" variant="dashed" />
        </div>
      </Center>
    </>
  );
};

Home.getLayout = (page) => <>{page}</>;

export default Home;
