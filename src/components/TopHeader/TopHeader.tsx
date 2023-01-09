import { Group, Header, Title } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionContainer from "../SectionContainer";
import useStyles from "./TopHeader.styles";

const links = [
  { link: "/", label: "Home" },
  // { link: "/seetf/about", label: "About" },
  { link: "/seetf/faq", label: "FAQs" },
  { link: "/seetf/rules", label: "Rules" },
  { link: "/seetf/prizes", label: "Prizes" },
];

const TopHeader = () => {
  const { classes, cx } = useStyles();

  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={cx(classes.link, { [classes.linkActive]: active === link.link })} onClick={(event) => {
        setActive(link.link);
    }}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.headerWrapper}>
      <SectionContainer className={classes.header}>
        <Group spacing={5} className={classes.links}>{items}</Group>
      </SectionContainer>
    </header>
  );
};

export default TopHeader;
