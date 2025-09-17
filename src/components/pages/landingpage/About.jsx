const techStack = [
  "Flutter",
  "Dart",
  "Riverpod",
  "GetX",
  "Flutter Animations",
  "Flutter Widgets",
  "Flutter Packages",
  "React Native",
  "Expo",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Firebase",
  "Firestore",
  "Cloud Functions",
  "Authentication",
  "Push Notifications",
  "Android",
  "iOS",
  "VS Code",
  "Figma",
  "Git",
  "GitHub",
  "CI/CD (GitHub Actions, Codemagic)",
  "REST & GraphQL APIs",
  "JSON",
  "SQLite",
  "SharedPreferences",
  "Secure Storage",
];

const About = () => {
  return (
    <div
      id="about"
      className={"section-inline mt-20 md:mt-40 scroll-mt-12 text-center"}
    >
      <h2 className={"mb-4"}>About Me</h2>
      <p className={"max-w-220 mx-auto"}>
        Hi,I am Blessing a mobile app developer with 1+ year of hands-on
        experience in Flutter and React Native, specializing in building
        cross-platform Android and iOS applications. I have experience in
        integrating real-time APIs, Firebase services, and state management
        solutions like Riverpod and Redux to create responsive and scalable
        apps. I am passionate about crafting intuitive, user-friendly interfaces
        and optimizing performance to deliver seamless experiences. I also have
        a strong understanding of version control (Git), clean architecture, and
        modular code organization, which ensures maintainable and efficient
        projects. I enjoy learning new technologies, staying up-to-date with
        trends in mobile development, and contributing to projects that have a
        tangible impact.
      </p>

      <div className={"mt-10"}>
        <h3 className={"mb-8"}>My Tech Stack</h3>
        <ul className="flex gap-2 items-center justify-center flex-wrap">
          {techStack.map((item, index) => {
            // Generate a random light color with some transparency
            const r = Math.floor(200 + Math.random() * 55); // 200-255
            const g = Math.floor(200 + Math.random() * 55);
            const b = Math.floor(200 + Math.random() * 55);
            const bgColor = `rgba(${r}, ${g}, ${b}, 0.2)`; // 0.2 for semi-transparency

            return (
              <li
                key={index}
                style={{ backgroundColor: bgColor }}
                className="rounded-sm  py-1 px-4"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
