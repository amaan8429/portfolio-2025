"use client";

import { aboutMe } from "@/data/aboutMe";
import { BlogsArray } from "@/data/blogs";
import { projectsData } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";
import { techStacks } from "@/data/techStacks";
import { loomVideoUrl } from "@/data/loomVideo";
import React, { useState } from "react";

const Portfolio = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const getVideoEmbedUrl = (videoUrl: string) => {
    // Handle Twitter/X video URLs
    if (videoUrl.includes('x.com') || videoUrl.includes('twitter.com')) {
      const tweetId = videoUrl.match(/status\/(\d+)/)?.[1];
      if (tweetId) {
        return `https://platform.twitter.com/embed/Tweet.html?id=${tweetId}&theme=auto&dnt=true&frame=false&hideCard=false&hideThread=false&lang=en`;
      }
    }
    // Handle YouTube URLs
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const videoId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
      }
    }
    return videoUrl;
  };

  const getLoomEmbedUrl = (loomUrl: string) => {
    // Handle Loom URLs - extract video ID and create embed URL
    const loomId = loomUrl.match(/loom\.com\/share\/([a-zA-Z0-9]+)/)?.[1];
    if (loomId) {
      return `https://www.loom.com/embed/${loomId}?sid=undefined&t=0`;
    }
    return loomUrl;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-mono">
      <header className="mb-8 text-center border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">Amaan</h1>
        <p>freelance developer</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border p-2">About Me</h2>
        <p className="mb-4">{aboutMe}</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2 border p-2">About Me Video</h3>
          <div className="relative w-full overflow-hidden rounded-lg border mx-auto" style={{ 
            paddingBottom: '56.25%',
            minHeight: '200px'
          }}>
            <iframe
              src={getLoomEmbedUrl(loomVideoUrl)}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              title="About Me - Amaan"
              style={{ 
                border: 'none',
                overflow: 'hidden',
                minHeight: '200px'
              }}
            />
          </div>
        </div>
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
        <div className="space-y-2">
          {projectsData
            .filter((project) => project.focus === true && project.hide === false)
            .map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              return (
                <div key={project.title} className="border">
                  <button
                    onClick={() => toggleProject(index)}
                    className="w-full p-3 sm:p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-xl">{project.title}</h3>
                      <span className="text-lg">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {project.description}
                    </p>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-3 sm:p-4 border-t">
                      {project.demoVideo && (
                        <div className="mb-4">
                          <h4 className="font-bold mb-2">Demo Video:</h4>
                          <div className="relative w-full overflow-hidden rounded-lg border mx-auto" style={{ 
                            paddingBottom: '56.25%',
                            minHeight: '200px'
                          }}>
                            <iframe
                              src={getVideoEmbedUrl(project.demoVideo)}
                              className="absolute top-0 left-0 w-full h-full border-0"
                              allowFullScreen
                              title={`${project.title} Demo Video`}
                              style={{ 
                                border: 'none',
                                overflow: 'hidden',
                                minHeight: '200px'
                              }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="border px-2 py-0.5 text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Features:</h4>
                        <ul className="list-disc pl-4">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="mb-1">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t flex justify-center">
                        <a 
                          href={project.demo} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          Visit Project →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
