import * as React from "react"
import {Introduction} from "@/components/Introduction"
import {Content} from "@/components/Content"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16">
      <Carousel className="w-full max-w-screen-lg">
        <CarouselContent>
        <CarouselItem key={1}>
          <Introduction/>
        </CarouselItem>
        <CarouselItem key={2}>
          <Content/>
        </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
