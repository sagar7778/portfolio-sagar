"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, Code, Heart, User } from "lucide-react"

const About = () => {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
  ]

  const renderAboutContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold mb-6 text-slate-800">Passionate Frontend Developer</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          I'm Sagar Koshti, a creative Frontend Developer who transforms ideas into exceptional digital experiences.
          With expertise in React.js, Next.js, and modern web technologies, I craft intuitive and performant
          applications that users love to interact with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
          <div className="bg-gradient-to-br from-violet-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">Passionate Developer</h4>
          <p className="text-slate-600">
            Dedicated to creating clean, efficient, and maintainable code that makes a difference.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
          <div className="bg-gradient-to-br from-violet-500 to-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">Tech Enthusiast</h4>
          <p className="text-slate-600">Always exploring and mastering new technologies to stay ahead of the curve.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h4 className="text-2xl font-bold text-slate-800 mb-4">Core Skills & Expertise</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "GitHub"].map((skill) => (
            <div key={skill} className="bg-gradient-to-r from-violet-50 to-indigo-50 px-4 py-2 rounded-lg text-center">
              <span className="text-slate-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderExperienceContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">Professional Journey</h3>
        <p className="text-lg text-slate-600">Building exceptional digital experiences for over 4 years</p>
      </div>

      <div className="space-y-8">
        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:to-indigo-500">
          <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-violet-500"></div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h4 className="text-2xl font-bold text-slate-800">Senior Frontend Developer</h4>
              <span className="bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                2021 - Present
              </span>
            </div>
            <p className="text-violet-600 font-medium mb-4 text-lg">Quickint Solutions</p>
            <ul className="text-slate-600 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Lead development of enterprise web applications serving 10,000+ users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Mentor junior developers and establish coding standards across the team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Architect scalable frontend solutions using React.js and Next.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Improved application performance by 40% through optimization techniques</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:to-indigo-500">
          <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-violet-500"></div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h4 className="text-2xl font-bold text-slate-800">Frontend Developer</h4>
              <span className="bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                2019 - 2021
              </span>
            </div>
            <p className="text-violet-600 font-medium mb-4 text-lg">Quickint Solutions</p>
            <ul className="text-slate-600 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Developed responsive and interactive web interfaces for various clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Implemented modern frontend technologies and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Collaborated with design and backend teams to deliver pixel-perfect solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Reduced development time by 30% through component reusability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderEducationContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">Educational Background</h3>
        <p className="text-lg text-slate-600">Building a strong foundation in technology and innovation</p>
      </div>

      <div className="space-y-8">
        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:to-indigo-500">
          <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-violet-500"></div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h4 className="text-2xl font-bold text-slate-800">B.Tech in Information Technology</h4>
              <span className="bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                2016 - 2020
              </span>
            </div>
            <p className="text-violet-600 font-medium mb-4 text-lg">Silver Oak University</p>
            <div className="space-y-3">
              <p className="text-slate-600">
                Focused on web technologies and software development with hands-on experience in:
              </p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Web Development Technologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Software Engineering Principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:to-indigo-500">
          <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-violet-500"></div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h4 className="text-2xl font-bold text-slate-800">Diploma in Information Technology</h4>
              <span className="bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                2013 - 2016
              </span>
            </div>
            <p className="text-violet-600 font-medium mb-4 text-lg">R.C. Technical Institute</p>
            <div className="space-y-3">
              <p className="text-slate-600">Foundation in programming and computer science fundamentals including:</p>
              <ul className="text-slate-600 space-y-2 ml-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Programming Fundamentals (C, C++, Java)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Computer Networks and Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Web Design and Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></span>
                  <span>Digital Electronics and Logic Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-8 rounded-2xl border border-violet-100">
        <h4 className="text-xl font-bold text-slate-800 mb-4">Continuous Learning</h4>
        <p className="text-slate-600 mb-4">
          Beyond formal education, I'm committed to continuous learning and staying updated with the latest
          technologies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            <span className="text-slate-600">Online courses and certifications</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            <span className="text-slate-600">Tech conferences and workshops</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            <span className="text-slate-600">Open source contributions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            <span className="text-slate-600">Industry best practices</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return renderAboutContent()
      case "experience":
        return renderExperienceContent()
      case "education":
        return renderEducationContent()
      default:
        return renderAboutContent()
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover my journey, experience, and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-200 inline-flex flex-col sm:flex-row gap-2 mx-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-violet-600 hover:bg-violet-50"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="min-h-[600px] transition-all duration-500 ease-in-out">{renderContent()}</div>
        </div>
      </div>
    </section>
  )
}

export default About
