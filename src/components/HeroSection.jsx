/* import { ArrowDown } from "lucide-react"; */

import { ArrowBigDown, ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-yellow-400 opacity-0 animate-fade-in-delay-1">{" "}Marinela</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Rajković</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I love design that speaks through color. Whether it's bright, energetic tones or the sophisticated elegance of pastel shades, I build each website with attention to detail and visual harmony.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-8 flex-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-yellow-400" />
            </div>
        </section>
    )
}
