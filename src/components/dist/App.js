"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var Header_1 = require("./Header");
var Background_1 = require("./Background");
var Logo_1 = require("./Logo");
function Portfolio() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Background_1["default"], null),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("main", { className: "container mx-auto px-6" },
            react_1["default"].createElement("section", { id: "about", className: "py-20" },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("div", { className: "w-1/2" },
                        react_1["default"].createElement("h1", { className: "text-4xl font-bold mb-4" }, "AI Software Developer & ML Enthusiast"),
                        react_1["default"].createElement("p", { className: "text-xl" }, "University student with a passion for AI, machine learning, and entrepreneurship.")),
                    react_1["default"].createElement("div", { className: "w-1/2 flex justify-center" },
                        react_1["default"].createElement(Logo_1["default"], { className: "w-48 h-48" })))),
            react_1["default"].createElement("section", { id: "experience", className: "py-20" },
                react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-8" }, "Experience"),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
                    react_1["default"].createElement("div", { className: "bg-white bg-opacity-10 p-6 rounded-lg" },
                        react_1["default"].createElement(lucide_react_1.Briefcase, { className: "mb-4" }),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-2" }, "AI Research Intern"),
                        react_1["default"].createElement("p", { className: "text-gray-300" }, "Company Name \u2022 Summer 2023"),
                        react_1["default"].createElement("ul", { className: "list-disc list-inside mt-4" },
                            react_1["default"].createElement("li", null, "Developed novel machine learning algorithms"),
                            react_1["default"].createElement("li", null, "Collaborated on cutting-edge AI projects"))),
                    react_1["default"].createElement("div", { className: "bg-white bg-opacity-10 p-6 rounded-lg" },
                        react_1["default"].createElement(lucide_react_1.Code, { className: "mb-4" }),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-2" }, "Software Developer"),
                        react_1["default"].createElement("p", { className: "text-gray-300" }, "Tech Startup \u2022 2022 - Present"),
                        react_1["default"].createElement("ul", { className: "list-disc list-inside mt-4" },
                            react_1["default"].createElement("li", null, "Built scalable web applications using React"),
                            react_1["default"].createElement("li", null, "Implemented machine learning models in production"))))),
            react_1["default"].createElement("section", { id: "projects", className: "py-20" },
                react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-8" }, "Projects"),
                react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                    react_1["default"].createElement("div", { className: "bg-white bg-opacity-10 p-6 rounded-lg" },
                        react_1["default"].createElement(lucide_react_1.Cpu, { className: "mb-4" }),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-2" }, "AI-Powered Chess Engine"),
                        react_1["default"].createElement("p", null, "Developed a chess AI using deep reinforcement learning.")),
                    react_1["default"].createElement("div", { className: "bg-white bg-opacity-10 p-6 rounded-lg" },
                        react_1["default"].createElement(lucide_react_1.Camera, { className: "mb-4" }),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-2" }, "Computer Vision App"),
                        react_1["default"].createElement("p", null, "Created an app for real-time object detection on mobile devices.")),
                    react_1["default"].createElement("div", { className: "bg-white bg-opacity-10 p-6 rounded-lg" },
                        react_1["default"].createElement(lucide_react_1.BookOpen, { className: "mb-4" }),
                        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-2" }, "ML Research Paper"),
                        react_1["default"].createElement("p", null, "Published a paper on novel optimization techniques for neural networks.")))),
            react_1["default"].createElement("section", { id: "contact", className: "py-20" },
                react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-8 text-center" }, "Get in Touch"),
                react_1["default"].createElement("div", { className: "max-w-lg mx-auto" },
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-6" },
                        react_1["default"].createElement("div", { className: "flex items-center" },
                            react_1["default"].createElement(lucide_react_1.Mail, { className: "mr-4", size: 24 }),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "font-bold" }, "Personal Email"),
                                react_1["default"].createElement("a", { href: "mailto:your.personal@email.com", className: "text-blue-400 hover:underline" }, "hsefzxuejoey@email.com"))),
                        react_1["default"].createElement("div", { className: "flex items-center" },
                            react_1["default"].createElement(lucide_react_1.BookOpen, { className: "mr-4", size: 24 }),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "font-bold" }, "Educational Email"),
                                react_1["default"].createElement("a", { href: "mailto:your.edu@university.edu", className: "text-blue-400 hover:underline" }, "xuejiayu@ad.unc.edu"))),
                        react_1["default"].createElement("div", { className: "flex items-center" },
                            react_1["default"].createElement(lucide_react_1.Linkedin, { className: "mr-4", size: 24 }),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "font-bold" }, "LinkedIn"),
                                react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/yourprofile", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline" }, "linkedin.com/in/yourprofile"))),
                        react_1["default"].createElement("div", { className: "flex items-center" },
                            react_1["default"].createElement(lucide_react_1.Instagram, { className: "mr-4", size: 24 }),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("p", { className: "font-bold" }, "Instagram"),
                                react_1["default"].createElement("a", { href: "https://www.instagram.com/yourusername", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline" }, "@yourusername"))))))),
        react_1["default"].createElement("footer", { className: "bg-white bg-opacity-10 py-6 text-center" },
            react_1["default"].createElement("p", null, "\u00A9 2024 Jiayu Xue. All rights reserved."))));
}
;
exports["default"] = Portfolio;
