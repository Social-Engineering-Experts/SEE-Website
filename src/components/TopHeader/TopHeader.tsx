import {
  Anchor,
  Avatar,
  Burger,
  Code,
  Drawer,
  Group,
  Header,
  Title,
  UnstyledButton,
  Text,
} from "@mantine/core";
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

  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.headerWrapper}>
      <SectionContainer className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <div className={classes.contentMobile}>
          <div className="burger-button">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              size="sm"
            />
          </div>

          <Drawer
            transition="slide-left"
            transitionDuration={250}
            transitionTimingFunction="ease"
            overlayOpacity={0.55}
            position="right"
            closeButtonLabel="Close drawer"
            padding="xl"
            opened={opened}
            onClose={() => setOpened(false)}
          >
            <div className="menu">
              <Group spacing={5} className={classes.mobileLinks}>
                {items}
              </Group>
            </div>
          </Drawer>
        </div>
      </SectionContainer>
    </header>
  );
};

export default TopHeader;
