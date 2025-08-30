"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

//------------------------------------------------------------------------

const projects = [
  {
    title: "Getaways Management",
    description:
      "Comprehensive hotel and hospitality management platform with booking systems, staff coordination, and guest services integration.",
    category: "Hospitality",
    technologies: ["React Native", "Node.js", "MongoDB"],
    status: "Live",
  },
  {
    title: "Employee Scheduling Platform",
    description:
      "Advanced workforce management system with shift planning, time tracking, and automated scheduling optimization for retail chains.",
    category: "HR Management",
    technologies: ["Vue.js", "PostgreSQL", "Python"],
    status: "In Development",
  },
  {
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking and supply chain management solution with predictive analytics and automated reordering.",
    category: "Supply Chain",
    technologies: ["Angular", "MySQL", "Java"],
    status: "Live",
  },
  {
    title: "CRM Enterprise Suite",
    description:
      "Customer relationship management platform with sales pipeline automation, lead scoring, and integrated communication tools.",
    category: "Sales & Marketing",
    technologies: ["React", "GraphQL", "Node.js"],
    status: "Live",
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Executive analytics platform providing real-time KPI monitoring, predictive forecasting, and customizable reporting interfaces.",
    category: "Analytics",
    technologies: ["D3.js", "Python", "Redis"],
    status: "Beta",
  },
];

export const ProjectsSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < maxIndex) {
        nextSlide();
      } else if (diff < 0 && currentIndex > 0) {
        prevSlide();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < maxIndex) {
        nextSlide();
      } else if (diff < 0 && currentIndex > 0) {
        prevSlide();
      }
    }
  };

  return (
    <div className="relative px-12 flex flex-col gap-6">
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-3 ${
                itemsPerView === 1
                  ? "w-full"
                  : itemsPerView === 2
                  ? "w-1/2"
                  : "w-1/3"
              }`}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/50 hover:shadow-lg select-none flex flex-col gap-4">
                {/* Project Image */}
                <div className="w-full h-45 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg flex items-center justify-center border border-gray-600/20">
                  <div className="w-12 h-12 bg-gray-600/40 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-500/60 rounded"></div>
                  </div>
                </div>

                {/* Title Row */}
                <div>
                  <h3 className="text-lg font-medium text-gray-200 line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                {/* Category and Status Row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30 whitespace-nowrap">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border whitespace-nowrap ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-300 border-green-400/30"
                        : project.status === "Beta"
                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 flex-grow">
                  {project.description}
                </p>

                <div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600/30 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800/80 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700/80 hover:text-white transition-all duration-200 z-10"
        >
          <FaChevronLeft className="text-sm" />
        </button>
      )}

      {currentIndex < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800/80 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700/80 hover:text-white transition-all duration-200 z-10"
        >
          <FaChevronRight className="text-sm" />
        </button>
      )}

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-slate-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
