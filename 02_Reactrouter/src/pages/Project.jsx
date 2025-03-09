import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Description of project 1. This project is designed to showcase the best practices in web development.",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Project 2",
      description:
        "Description of project 2. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2020/08/03/10/00/money-5459709_640.png",
    },
    {
      title: "Project 3",
      description:
        "Description of project 3. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2019/11/14/08/44/earth-4625649_640.png",
    },
    {
      title: "Project 4",
      description:
        "Description of project 4. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2019/11/14/08/44/earth-4625649_640.png",
    },
    {
      title: "Project 5",
      description:
        "Description of project 5. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2020/08/03/10/00/money-5459709_640.png",
    },
    {
      title: "Project 6",
      description:
        "Description of project 6. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/30/17/56/network-5113947_640.jpg",
    },
    {
      title: "Project 7",
      description:
        "Description of project 7. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/30/17/56/network-5113947_640.jpg",
    },
    {
      title: "Project 8",
      description:
        "Description of project 8. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2017/03/21/08/34/joint-project-2161493_640.jpg",
    },
    {
      title: "Project 9",
      description:
        "Description of project 9. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/30/17/56/network-5113947_640.jpg",
    },
    {
      title: "Project 10",
      description:
        "Description of project 10. This project is designed to showcase the best practices in web development.",
      image:
        "https://cdn.pixabay.com/photo/2017/03/21/08/34/joint-project-2161493_640.jpg",
    },
  ];

  return (
    <div className="container flex-col justify-center mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">My Awesome Project</h1>
        <p className="text-lg text-gray-600 p-5">
          Building the future, one line of code at a time.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="bg-white shadow-md rounded-lg p-6" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
