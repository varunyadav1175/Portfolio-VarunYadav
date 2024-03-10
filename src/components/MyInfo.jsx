import React from "react";

const MyInfo = () => {
  const HelloWorld = {
    _id: "127.0.0.1",
    name: "Varun Yadav",
    developer: true,
    technologies: ["js", "react", "node", "express", "..."],
    interests: ["MERN", "AI", "DevOps", "Aws", "..."],
  };

  return (
    <div className="relative p-4 rounded-lg bg-custom">
      <div className="absolute top-6 left-12 blinking-rectangle"></div>
      <pre className="font-mono text-sm text-gray-400 md:text-lg">
        <span className="text-yellow-300">const HelloWorld = </span>
        {`{\n  `}
        <span className="text-green-300">"_id": </span>
        <span className="text-white">"{HelloWorld._id}",</span>
        {`\n  `}
        <span className="text-green-300">"name": </span>
        <span className="text-white">"{HelloWorld.name}",</span>
        {`\n  `}
        <span className="text-green-300">"developer": </span>
        <span className="text-yellow-300">
          {HelloWorld.developer.toString()},
        </span>
        {`\n  `}
        <span className="text-green-300">"technologies": </span>
        <span className="flex lg:inline-block">
          <span className="text-white">[</span>
          {HelloWorld.technologies.map((tech, index) => (
            <span key={index} className="text-white">
              "{tech}"{index === HelloWorld.technologies.length - 1 ? "" : ","}
            </span>
          ))}
          <span className="text-white">],</span>
        </span>
        <span className="hidden lg:inline">{`\n`}</span>
        <span>{`  `}</span>
        <span className="text-green-300">"interests": </span>
        <span className="flex lg:inline-block">
          <span className="text-white">[</span>
          {HelloWorld.interests.map((interest, index) => (
            <span key={index} className="text-white">
              "{interest}"{index === HelloWorld.interests.length - 1 ? "" : ","}
            </span>
          ))}
          <span className="text-white">],</span>
        </span>
        <span className="hidden lg:inline">{`\n  `}</span>
        <span>{`}`}</span>
      </pre>
    </div>
  );
};

export default MyInfo;
