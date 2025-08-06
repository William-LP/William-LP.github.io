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
    subTitle?: string,
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
    description: string[],
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
    academicAchievement?: string[]
}


type AboutMe = {
    name: string,
    occupation: string,
    introText: string,
    contact: {
        email?: string,
        phone?: string,
        location?: string,
        website?: string
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


export type AppData = {
    header: Header,
    aboutMe: AboutMe,
    experience: Experience[],
    education: Education[],
    skills: Skill[]
    projects: Project[],
    hobbies: Hobby[]
}