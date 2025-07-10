import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
    { name: "HTML", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png" },
    { name: "CSS", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png" },
    { name: "JavaScript", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png" },
    { name: "React Js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png" },
    { name: "Node Js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/1012818_code_development_logo_nodejs_icon_bfggzj.png" },
    { name: "Git", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png" },
    { name: "Tailwind CSS", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png" },
    { name: "Bootstrap", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png" },
    { name: "PostgreSQL", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png" },
    { name: "SQLite", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526643/SQLite_rlulf4.png" },
    { name: "Java", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png" },
    { name: "Spring Boot", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png" },
];

const Skills = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize(); // set on load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="bg-muted/30 py-16 px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">My Skills</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => {
                    const aosAnimation = isMobile
                        ? index % 2 === 0
                            ? "fade-right"
                            : "fade-left"
                        : "zoom-in";

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-card rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-card/80 transition duration-300 transform hover:-translate-y-2 border border-border"
                            data-aos={aosAnimation}
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <p className="text-card-foreground text-base font-medium text-center">{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
