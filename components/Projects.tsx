import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import Wave from "react-wavify";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props) => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderWave = () => {
    if (!mounted) {
      return null;
    }
    if (currentTheme === "dark") {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e293b"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    } else {
      return (
        <Wave
          className="h-[85vh] m-0 rotate-180 z-10"
          // #F8F0E3
          // @ts-ignore
          fill="#1e40af"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            soints: 5,
          }}
        />
      );
    }
  };
  return (
    <div id="projects" className="w-full h-screen">
      {renderWave()}
    </div>
  );
};
export default Projects;
