// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            {/* <Link className="not-prose" href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link> */}
          </Button>
          <h1>
            <Balancer>
              Welcome to DataVision: Your Interactive Data Structures & Algorithms Visualizer
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
       Unlock the power of learning with DataVision, the ultimate tool for visualizing and mastering data structures and algorithms. Whether you're a student, developer, or tech enthusiast, our interactive platform brings complex concepts to life with engaging visuals and intuitive simulations. Dive into a world where algorithms come alive and data structures are no longer abstract ideas but dynamic, interactive experiences. Start exploring today and transform the way you understand and apply essential computer science principles.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            /> 
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
