import {Container, Section } from "@/components/craft"
import Bar from "@/components/sorting/bar"
export default function BubbleSort() {

  return(
    <Section>
      <Container>
        <h1>Bubble Sort</h1>
        <div className="h-screen  justify-center flex flex-row gap-2 h-500 ">
          <Bar height="20" />
          <Bar height="60"/>
        </div>
      </Container>
    </Section>
  )
}