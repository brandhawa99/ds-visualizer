import {Container, Main, Section} from "@/components/craft"
import Hero from "@/components/home-page/hero"
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import Footer from "@/components/home-page/footer";
export default function Home() {
  return (
  <Main>
    <Section>
      <Container>
        <Hero /> 
        <FeatureLeft />
        <FeatureRight />
        <Footer />
      </Container>
    </Section>

  </Main>
  );
}
