import { Container } from "@mantine/core";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <Container size="md" px="md" className={className}>
      {children}
    </Container>
  );
};

export default SectionContainer;
