import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    postion: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "end",
    }
  },

  links: {
    display: "flex",
    flexDirection: "row",

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    },
  },

  mobileLinks: {
    display: "flex",
    flexDirection: "row",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    fontFamily: "Fira Code",

    "&:hover": {
      color: "#B5E853AA",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: "#B5E853",
    },
  },

  headerWrapper: {
    paddingBlock: theme.spacing.md,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  contentMobile: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
  },
}));

export default useStyles;
