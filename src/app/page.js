import styles from "./page.module.css";
import {Container, Main, Section} from "@/components/craft"
import Hero from "@/components/home-page/hero"

export default function Home() {
  return (
  <Main>
    <Section>
    <Container>
      <Hero /> 
    </Container>
    </Section>
  </Main>
  );
}
