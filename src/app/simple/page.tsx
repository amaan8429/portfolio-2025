import { aboutMe } from "@/data/aboutMe";
import { BlogsArray } from "@/data/blogs";
import { projectsData } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";
import { techStacks } from "@/data/techStacks";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-mono">
      <header className="mb-8 text-center border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">Amaan</h1>
        <p>freelance developer</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">About Me</h2>
        <p>{aboutMe}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">Tech Stacks</h2>
        <div className="flex flex-wrap gap-2">
          {techStacks.map((tech) => (
            <span key={tech} className="border px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">Projects</h2>
        <div className="space-y-4">
          {projectsData.map((project) => (
            <div key={project.title} className="border p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>

              <div className="mb-3">
                <h4 className="font-bold mb-1">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="border px-2 py-0.5 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <h4 className="font-bold mb-1">Features:</h4>
                <ul className="list-disc pl-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2 border-t">
                <a href={project.github} className="underline mr-4">
                  GitHub
                </a>
                <a href={project.demo} className="underline">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">Blog Posts</h2>
        <ul className="list-disc pl-4">
          {BlogsArray.map((blog) => (
            <li key={blog.title} className="mb-2">
              <a href={blog.url} className="underline">
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">Contact & Social</h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a key={link.title} href={link.url} className="underline">
              {link.title}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center border-t pt-4 mt-8">
        <p>made with ❤️ by Amaan</p>
      </footer>
    </div>
  );
};

export default Portfolio;
