import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Sphere = () => (
  <TagCloud
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: "fast",
    })}
    onClick={(tag: string, ev: MouseEvent) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
      "VSCode",
      "TypeScript",
      "React",
      "Javascript",
      "Media Queries",
      "Responsive Design",
      "Node.js",
      "HTML5",
      "React Native",
      "Expo Go",
      "Xcode",
      "CSS3",
      "Express",
      "MongoDB",
      "Git",
      "Photoshop",
      "Illustrator",
      "QuarXpress",
      "Indesign",
      "Bootstrap",
      "API",
      "Front-end",
      "Back-end",
      "Full Stack",
      "Bootcamp",
      "Le Reacteur",
    ]}
  </TagCloud>
);

export default Sphere;
