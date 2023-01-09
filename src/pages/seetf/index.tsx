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
      color: theme.colorScheme === "dark" ? "#B5E853" : theme.colors.gray[9],
    },
  
    secondaryTitle: {
      fontSize: "1.6875rem",
      marginTop: "2.5625rem",
      marginBottom: "0.8125rem",
      color: theme.colorScheme === "dark" ? "#B5E853" : theme.colors.gray[9],
    },
  
    paragraphText: {
      // fontSize: "1.1rem",
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
              Work In Progress
            </Title>
          </div>
  
          {/* <Title order={2} className={classes.secondaryTitle}>
              Work in Progress
            </Title> */}
        </SectionContainer>
      </>
    );
  };
  
  About.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;
  
  export default About;
  