import { Github, Linkedin } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

type Hobby = {
    name: string,
    description: string
}

type Skill = {
    Category: string,
    tech: {
        name: string,
        skilliconsShortCode: string
    }[]
}

type Project = {
    date: string,
    title: string,
    subTitle: string,
    description: string,
    logoSrc: {
        light: string,
        dark: string
    }
    link?: string,
    githubRepo?: string,
    techStack?: string[]
}

type Experience = {
    period: {
        from: string,
        to: string
    },
    title: string,
    company: string,
    description: string,
    techStack: string[]
}

type Education = {
    period: {
        from: string,
        to: string
    },
    degree: string,
    school: string,
    location: string,
    description: string,
    techStack?: string[]
}


type AboutMe = {
    name: string,
    occupation: string,
    introText: string,
    contact: {
        email?: string,
        phone?: string,
        location?: string
    },
    socials: Social[]
    pgpPublicKey?: string,

}

type Social = {
    icon: LucideIcon,
    href: string
}

type Header = {
    availableForHire: boolean,
    sections: string[]
}


type AppData = {
    header: Header,
    aboutMe: AboutMe,
    experience: Experience[],
    education: Education[],
    skills: Skill[]
    projects: Project[],
    hobbies: Hobby[]
}

const PGPPublicKey = `  -----BEGIN PGP PUBLIC KEY BLOCK-----
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
rZjAeejuv5O+
=WvL1
-----END PGP PUBLIC KEY BLOCK-----`


export const appData: AppData = {
    header: {
        availableForHire: true,
        sections: [
            "Home",
            "Experience",
            "Education",
            "Skills",
            "Projects",
            "Hobbies"
        ]
    },
    aboutMe: {
        name: "William Le Pommelet",
        occupation: "DevOps / Plateform Engineer / SRE / DevSecOps / FinOps",
        introText: "DevOps Engineer with strong infrastructure expertise and full-stack skills. I build scalable, automated systems focused on reliability and performance. I'm keen to work in cybersecurity, blockchain, or AI, where infrastructure drives innovation.",
        contact: {
            email: "william.lepommelet@gmail.com",
            phone: "+33 6 32 46 48 38",
            location: "Chambéry, France"


        },
        socials: [
            {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/williamlepommelet/"
            },
            {
                icon: Github,
                href: "https://github.com/William-LP/"
            }
        ],
        pgpPublicKey: PGPPublicKey
    },
    experience: [
        {
            company: "PowerUp",
            description: `<ul class='list-disc'><li>Joined as the second engineer to take over infra subjects and built a scalable, cost-efficient cloud infrastructure for a data SaaS product.</li>
                        <li>Setup everything : clusters, CI/CD, monitoring, tooling, documentation, Azure resources and more. </li>
                        <li>Optimized cloud resources usage and setup a partnership deal with Microsoft of $100.000 free credits.</li>
                        <li>Hired and trained the dev team on Kubernetes and cloud technologies.</li>
                        <li>Led cybersecurity efforts and contributed to product development.</li></ul>`
            ,
            period: {
                from: "Jan. 2022",
                to: "Jul. 2024"
            },
            techStack: [
                "Kubernetes",
                "Docker",
                "Azure",
                "FinOps",
                "SecOps",
                "TypeScript",
                "ReactJS",
                "Python",
                "Observability",
                "CICD",
                "OpenID Connect",
                "OAuth2",
                "Terraform",
                "Trivy",
                "Airflow",
                "Databrick"],
            title: "Senior DevOps Engineer"
        },
        {
            company: "Schneider Electric",
            description: `<ul class='list-disc'><li>Training US/EU/IN based teams on DevOps best practices</li><li>Delivery of ready-to-use infrastructure components to external teams.</li></ul>`,
            period: {
                from: "Sep. 2021",
                to: "Feb. 2022"
            },
            techStack: [
                "Kubernetes",
                "Azure",
                "Terraform",
                "Python",
                "OpenTelemetry",
                "Prometheus",
                "Grafana",
                "CICD"
            ],
            title: "DevOps Engineer"
        },
        {
            company: "Capgemini",
            description: `I build infra on Azure for a variety of clients (Michelin, Bayer, Total...)`,
            period: {
                from: "Aug. 2020",
                to: "Sep. 2021"
            },
            techStack: ["Azure", "Ansible", "Terraform", "Kubernetes"],
            title: "Cloud Engineer"
        },
        {
            company: "Capgemini",
            description: `I streamline production deployments and replace manual operations with scripts that do the job cheaper and better than humans.`,
            period: {
                from: "Sep. 2017",
                to: "Sep. 2019"
            },
            techStack: ["Ansible", "Python", "Bash", "PowerShell", "VTOM", "Autosys", "CICD"],
            title: "DevOps Engineer"
        },
        {
            company: "Aberdeenshire City Counci",
            description: `I was part of a 8 people team to design and build a unified wireless and backbone network accross Scotland. This was as fun as challenging.`,
            period: {
                from: "Jan. 2016",
                to: "Jun. 2017"
            },
            techStack: ["OSPF", "BGP", "VLAN", "Ekahau", "Cisco", "Aerohive", "Fortinet", "Bloxx", "Smoothwall", "CC4"],
            title: "Infrastructure Engineer"
        },
        {
            company: "Cap'Info",
            description: `I automated most of my day-to-day tasks which consisted of providing our customers (UK/FR) assistance on well known and recurring problems. This reduced the average intervention time by 80% within our team.`,
            period: {
                from: "Dec. 2013",
                to: "Aug. 2014"
            },
            techStack: ["E2E Testing", "Nagios", "Python", "Bash", "PowerShell", "HTA", "VBScript"],
            title: "Technical Support Specialist"
        }
    ],
    education: [
        {
            degree: "Master's Degree",
            description: "Telecommunication, Networking and Computer Science",
            location: "Chambéry",
            period: {
                from: "2017",
                to: "2019"
            },
            school: "Université Savoie Mont Blanc",
        },
        {
            degree: "Bachelor's Degree (Hns)",
            description: "Computer Network Management and Design",
            location: "Aberdeen",
            period: {
                from: "2015",
                to: "2017"
            },
            school: "Robert Gordon University",
            techStack: ["First-Class Honours"]
        },
        {
            degree: "Licence, Administration and Security of Systems and Networks",
            description: "Computer Network Management and Design",
            location: "Aberdeen",
            period: {
                from: "2014",
                to: "2015"
            },
            school: "Université Clermont Auvergne",
        }
    ],
    skills: [
        {
            Category: "Infra",
            tech: [
                {
                    name: "Kubernetes",
                    skilliconsShortCode: "k8s"
                },
                {
                    name: "Linux",
                    skilliconsShortCode: "linux",
                },
                {
                    name: "Terraform",
                    skilliconsShortCode: "terraform",
                },
                {
                    name: "Docker",
                    skilliconsShortCode: "docker",
                },
                {
                    name: "Github Actions",
                    skilliconsShortCode: "github",
                },
                {
                    name: "Azure",
                    skilliconsShortCode: "azure",
                },
                {
                    name: "Nginx",
                    skilliconsShortCode: "nginx",
                },
                {
                    name: "Prometheus",
                    skilliconsShortCode: "prometheus",
                },
                {
                    name: "Grafana",
                    skilliconsShortCode: "grafana",
                },
                {
                    name: "Ansible",
                    skilliconsShortCode: "ansible",
                },
                {
                    name: "Bash",
                    skilliconsShortCode: "bash",
                },
                {
                    name: "Postgres",
                    skilliconsShortCode: "postgres",
                },
                {
                    name: "Supabase",
                    skilliconsShortCode: "supabase",
                },
                {
                    name: "Firebase",
                    skilliconsShortCode: "firebase",
                },
                {
                    name: "MongoDB",
                    skilliconsShortCode: "mongodb"
                }

            ]
        },
        {
            Category: "Dev",
            tech: [
                {
                    name: "Go",
                    skilliconsShortCode: "go"
                },
                {
                    name: "Python",
                    skilliconsShortCode: "py"
                },
                {
                    name: "ReactJS",
                    skilliconsShortCode: "react"
                },
                {
                    name: "HTML",
                    skilliconsShortCode: "html"
                },
                {
                    name: "CSS",
                    skilliconsShortCode: "css"
                },
                {
                    name: "TypeScript",
                    skilliconsShortCode: "ts"
                },
                {
                    name: "Git",
                    skilliconsShortCode: "git"
                },
                {
                    name: "Figma",
                    skilliconsShortCode: "figma"
                },
                {
                    name: "NextJS",
                    skilliconsShortCode: "nextjs"
                },
                {
                    name: "Tailwind",
                    skilliconsShortCode: "tailwind"
                },
                {
                    name: "Bootstrap",
                    skilliconsShortCode: "bootstrap"
                }
            ]
        }
    ],
    projects: [
        {
            date: "2025",
            description: "BetterText is a lightweight ChatGPT integration I built to bring AI-powered writing assistance directly into any text field, making it instantly accessible without breaking your flow.",
            subTitle: "desd",
            title: "BetterText.",
            logoSrc: {
                light: "bettertext-light.svg",
                dark: "bettertext-dark.svg"
            },
            link: "https://www.youtube.com/watch?v=aHvwjWv97yw",
            techStack: ["Go", "ReactJS", "TypeScript", "Tailwind"]
        },
        {
            date: "2025",
            description: "Follicare is a post-op follow-up platform I developed to help clinics save time by automating patient recovery tracking, delivering care instructions, and maintaining ongoing visibility into each patient's healing process.",
            subTitle: "desd",
            title: "Follicare",
            link: "https://follica.re",
            techStack: ["ReactJS", "Supabase", "NextJS", "Kubernetes", "Docker", "Tailwind",],
            logoSrc: {
                dark: "follicare-dark.svg",
                light: "follicare-light.svg",
            }
        },
        {
            date: "2024",
            description: "Urbanlock is a real-time multiplayer digital outdoor escape game.",
            subTitle: "desd",
            title: "Urbanlock",
            link: "https://urbanlock.fr",
            techStack: ["ReactJS", "TypeScript", "Azure", "MongoDB", "Firebase", "CI/CD", "Terraform"],
            logoSrc: {
                light: "urbanlock.jpg",
                dark: "urbanlock.jpg"
            }
        }
    ],
    hobbies: [
        {
            name: "Sports",
            description: "I practice sports on a daily basis. I do CrossFit, Judo, and some mountain sports. I like staying active and trying different things."
        },
        {
            name: "Security Research",
            description: "I enjoy casual hacking and spotting security flaws in web application. I'm not the best hacker but there are plenty of bad code out there."
        },
        {
            name: "Magician",
            description: "From time to time I perform as a magician in casinos, weddings, galas, brasserie and such."
        }
    ]
}