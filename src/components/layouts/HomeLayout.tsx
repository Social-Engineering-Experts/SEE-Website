import { createStyles } from "@mantine/core";
import SectionContainer from "src/components/SectionContainer";
import TopHeader from "../TopHeader/TopHeader";

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
  },
}));

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { classes } = useStyles();
  return (
    <>
      <TopHeader />
      <SectionContainer>
        {children}
      </SectionContainer>
    </>
  );
};

export default HomeLayout;
