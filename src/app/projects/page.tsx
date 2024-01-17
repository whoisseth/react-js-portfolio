/** @format */

import React from "react";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";

type Props = {};

export default function ProjectsPage({}: Props) {
  const frontendProjects = [
    {
      imageSrc:
        "https://i.ytimg.com/vi/u3V8Zi3vK4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSnur-dasmYr_ilD2DcZyxiJYPpQ",
      title: "Create Skeleton Loading Component In ReactJS ",
      description: "Next JS and Tailwind Project Next JS and Tailwind Project",
      liveDemoLink: "https://youtu.be/u3V8Zi3vK4Q?si=2hMMAqA-MsETiG7F"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/qoqcG5XFsYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFCzfi8dvfKCwY2Cyj7xJw5okyYA",
      title:
        "Build GitHub User Search App With Next.js | Dark Mode #reactjs #nextjs #github",
      description: "React SPA with Redux React SPA with Redux",
      liveDemoLink: "https://example.com/project2"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/l_I9CewUMRg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYe5q3ZS6y67zfk83VPArSREN_Rg",
      title:
        "Build and Deploy Responsive Dashboard with Next.js and Shadcn UI Components",
      description: "Vue.js Todo App Vue.js Todo App",
      liveDemoLink: "https://example.com/project3"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/qoqcG5XFsYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFCzfi8dvfKCwY2Cyj7xJw5okyYA",
      title:
        "Build GitHub User Search App With Next.js | Dark Mode #reactjs #nextjs #github",
      description: "React SPA with Redux React SPA with Redux",
      liveDemoLink: "https://example.com/project2"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/u3V8Zi3vK4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSnur-dasmYr_ilD2DcZyxiJYPpQ",
      title: "Create Skeleton Loading Component In ReactJS ",
      description: "Next JS and Tailwind Project Next JS and Tailwind Project",
      liveDemoLink: "https://youtu.be/u3V8Zi3vK4Q?si=2hMMAqA-MsETiG7F"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/qoqcG5XFsYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFCzfi8dvfKCwY2Cyj7xJw5okyYA",
      title:
        "Build GitHub User Search App With Next.js | Dark Mode #reactjs #nextjs #github",
      description: "React SPA with Redux React SPA with Redux",
      liveDemoLink: "https://example.com/project2"
    },
    {
      imageSrc:
        "https://i.ytimg.com/vi/l_I9CewUMRg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYe5q3ZS6y67zfk83VPArSREN_Rg",
      title:
        "Build and Deploy Responsive Dashboard with Next.js and Shadcn UI Components",
      description: "Vue.js Todo App Vue.js Todo App",
      liveDemoLink: "https://example.com/project3"
    }
    // Add more Frontend projects as needed
  ];

  return (
    <div>
      <PageTitle title="Projects" />
      <div className="flex flex-wrap gap-3 p-5 justify-between">
        {frontendProjects.map((d, i) => (
          <Card
            key={i}
            discription={d.description}
            imageSrc={d.imageSrc}
            liveDemoLink={d.liveDemoLink}
            title={d.title}
          />
        ))}
      </div>
    </div>
  );
}
