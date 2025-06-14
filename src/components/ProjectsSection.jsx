

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
          "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "E-commerce Platform",
        description:
          "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
      },
]


export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-yellow-400"> Projects</span></h2>

                
            </div>
        </section>
    );
};