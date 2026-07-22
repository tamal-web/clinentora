import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Linkedin } from "lucide-react";

const team = [
  {
    img: "/images/common/members/sukhman.webp",
    name: "Sukhmanjeet Singh",
    title: "CEO & Co-Founder",
    bio: "Leads product vision, firm relationships, and go-to-market. Shapes the platform through direct conversations with IP attorneys and docketing specialists.",
    linkedin: "https://linkedin.com/in/sukhmanjeet-singh-642a63258",
  },
  {
    img: "/images/common/members/tamal.webp",
    name: "Tamal Krishna Chhabra",
    title: "CTO & Co-Founder",
    bio: "Leads engineering across document intelligence, jurisdiction rules, and security. Focused on making automation reliable enough for consequential deadlines.",
    linkedin: "https://linkedin.com/in/tamalkrish",
  },
  // {
  //   img: "/images/common/members/abhinandan.webp",
  //   name: "Abhinandan Sambyal",
  //   title: "CMO & Marketing Director",
  //   bio: "Leads marketing strategy, brand development, and go-to-market execution.",
  //   linkedin: "https://linkedin.com/in/abhinandan-sambyal",
  // },
  // {
  //   img: "/images/common/members/rojal.webp",
  //   name: "Rojal",
  //   title: "Project Manager",
  //   bio: "Manages product delivery, cross-team coordination, and operational execution.",
  //   linkedin: "https://linkedin.com/in/rojal-2006-",
  // },
];

const Team = () => {
  return (
    <section className="md:py-[60px] py-12">
      <Container className="md:space-y-20 space-y-8">
        <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
          <AnimateOnView blur>
            <h2 className="h2 md:mb-5 mb-3">Team</h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.1}>
            <p className="text-muted-foreground">
              Practitioners, engineers, and operators building Clinentora
              alongside the firms that rely on it.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-6 gap-4 lg:m-[14rem]">
          {team.map((member, index) => (
            <AnimateOnView
              key={index}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4 transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex flex-col gap-1">
                <img
                  src={member.img}
                  className="w-full h-[17rem] mb-2 rounded-[13px] overflow-hidden object-cover border-2"
                />
                <span className="text-white font-medium">{member.name}</span>
                <span className="text-xs text-muted-foreground">
                  {member.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 opacity-60">
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
