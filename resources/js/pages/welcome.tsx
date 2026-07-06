import { Head } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowUpRight,
    Braces,
    Code2,
    Cpu,
    Database,
    Download,
    Github,
    Layers3,
    Leaf,
    Mail,
    MapPin,
    MonitorSmartphone,
    Palette,
    Phone,
    Server,
    ShieldCheck,
    Sparkles,
    Workflow,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useRef } from 'react';

type ExperienceEntry = {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
};

type ExperienceGroup = {
    year: string;
    entries: ExperienceEntry[];
};

type Project = {
    name: string;
    tech: string[];
    live: string;
    dev: string;
};

type Skill = {
    name: string;
    icon: ReactNode;
};

type SocialLink = {
    label: string;
    href: string;
    icon: ReactNode;
};

const experienceTimeline: ExperienceGroup[] = [
    {
        year: '2025',
        entries: [
            {
                company: 'PT XBoss Group Asia',
                role: 'Web Developer (Full-Stack)',
                period: 'Oct 2025 - Present',
                location: 'Indonesia',
                bullets: [
                    'Deliver client projects using Laravel and React.js.',
                    'Build and integrate REST APIs with validation and authentication/authorization where needed.',
                    'Use AI-assisted development for prototyping, refactoring, and debugging.',
                ],
            },
            {
                company: 'DB Klik',
                role: 'Front-End Developer (Freelance)',
                period: 'Sep 2024 - Dec 2025',
                location: 'Surabaya, Indonesia',
                bullets: [
                    'Build responsive UI components in React.js and TypeScript.',
                    'Implement scalable styling with Tailwind CSS and reusable UI patterns.',
                    'Deliver multi-language interfaces using React state management (Context).',
                ],
            },
        ],
    },
    {
        year: '2024',
        entries: [
            {
                company: 'PT Inti Surya Laboratorium',
                role: 'IT Programmer (Contract)',
                period: 'Sep 2024 - Oct 2025',
                location: 'Tangerang, Indonesia',
                bullets: [
                    'Maintain and enhance internal web features using JavaScript, Bootstrap, and jQuery.',
                    'Support website migration and integration to newer implementations.',
                    'Develop REST APIs with Laravel Lumen and contribute to an internal React Native mobile app.',
                ],
            },
            {
                company: 'PT Hash Rekayasa Teknologi',
                role: 'Front-End Developer (Contract)',
                period: 'Jan 2024 - Jul 2024',
                location: 'Malang, Indonesia',
                bullets: [
                    'Develop admin dashboards using React Admin and Material UI.',
                    'Integrate GraphQL and REST services (Axios, Hasura) for data workflows.',
                    'Fix bugs and deliver enhancements based on QA and user feedback.',
                ],
            },
        ],
    },
    {
        year: '2023',
        entries: [
            {
                company: 'Eduwork',
                role: 'MERN Stack Internship Project',
                period: 'Aug 2023 - Nov 2023',
                location: 'Yogyakarta, Indonesia',
                bullets: [
                    'Build backend APIs using Node.js and Express with MongoDB.',
                    'Create responsive UI using React.js and integrate the UI with API endpoints.',
                ],
            },
            {
                company: 'PPIH Saudi Arabia',
                role: 'Transportation Staff (Contract)',
                period: 'May 2023 - Jul 2023',
                location: 'Mecca, Saudi Arabia',
                bullets: [
                    'Coordinate on-field transportation operations during Hajj season.',
                    'Assist elderly pilgrims to ensure safe, organized movement and service delivery.',
                ],
            },
        ],
    },
    {
        year: '2022',
        entries: [
            {
                company: 'Graha Jatim Hotel',
                role: 'Director (Contract)',
                period: 'Sep 2021 - Sep 2022',
                location: 'Cairo, Egypt',
                bullets: [
                    'Lead daily operations and coordinate staff execution through clear communication and task direction.',
                    'Work with stakeholders to maintain service quality and operational continuity.',
                ],
            },
        ],
    },
    {
        year: '2019',
        entries: [
            {
                company: 'Graha Jatim Hotel',
                role: 'Secretary (Contract)',
                period: 'Jan 2019 - Sep 2021',
                location: 'Cairo, Egypt',
                bullets: [
                    'Manage documentation, scheduling, reporting, and internal coordination for hotel operations.',
                ],
            },
        ],
    },
];

const projects: Project[] = [
    {
        name: 'PT Kevin Shipping',
        tech: ['React.js', 'Tailwind CSS', 'React Icons'],
        live: 'https://kevinshipping.com/',
        dev: 'https://pt-kevin-shipping.vercel.app/',
    },
    {
        name: 'Sri Rahayu Silver',
        tech: ['React.js', 'Tailwind CSS', 'React Icons'],
        live: 'https://www.srirahayusilver.com/',
        dev: 'https://sriraayusilver.vercel.app/',
    },
    {
        name: 'YHH',
        tech: ['React.js', 'Tailwind CSS', 'React Icons'],
        live: 'https://yhh.co.id/',
        dev: 'https://yhh-red.vercel.app/',
    },
    {
        name: 'KYP Bali Trans',
        tech: ['React.js', 'Tailwind CSS', 'React Icons'],
        live: 'https://www.kypbalitrans.com/',
        dev: 'https://kyp-bali-trans.vercel.app/',
    },
    {
        name: 'Salam Pesona Bahari',
        tech: ['React.js', 'Tailwind CSS', 'React Icons'],
        live: 'https://salampesonabahari.com/',
        dev: 'https://salam-pesona-bahari-x51l.vercel.app/',
    },
    {
        name: 'Nabina Travel',
        tech: ['React.js', 'Tailwind CSS', 'React Icons', 'Framer Motion'],
        live: 'https://www.muhammadnabina.com/',
        dev: 'https://nabina-travel2.vercel.app/',
    },
];

const skills: Skill[] = [
    { name: 'React.js', icon: <Code2 className="h-5 w-5" /> },
    { name: 'TypeScript', icon: <Braces className="h-5 w-5" /> },
    { name: 'JavaScript', icon: <Code2 className="h-5 w-5" /> },
    { name: 'Tailwind CSS', icon: <Palette className="h-5 w-5" /> },
    { name: 'Material UI', icon: <Layers3 className="h-5 w-5" /> },
    { name: 'React Admin', icon: <Layers3 className="h-5 w-5" /> },
    { name: 'Redux Toolkit', icon: <Workflow className="h-5 w-5" /> },
    { name: 'Zustand', icon: <Layers3 className="h-5 w-5" /> },
    { name: 'Laravel', icon: <Leaf className="h-5 w-5" /> },
    { name: 'Laravel Lumen', icon: <Server className="h-5 w-5" /> },
    { name: 'Node.js', icon: <Cpu className="h-5 w-5" /> },
    { name: 'Express.js', icon: <Server className="h-5 w-5" /> },
    { name: 'REST APIs', icon: <Workflow className="h-5 w-5" /> },
    { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
    { name: 'MongoDB', icon: <Database className="h-5 w-5" /> },
    { name: 'React Native', icon: <MonitorSmartphone className="h-5 w-5" /> },
    { name: 'Git', icon: <ShieldCheck className="h-5 w-5" /> },
    { name: 'GitHub', icon: <Github className="h-5 w-5" /> },
];

const certifications = [
    'HackerRank - Problem Solving (Basic)',
    'CODEPOLITAN - Go Language for Beginners',
    'HackerRank - React (Basic)',
    'HackerRank - Frontend Developer (React)',
    'Eduwork - ReactJS & NodeJS Bootcamp',
];

const languages = [
    'Indonesian (Native)',
    'Arabic (Intermediate)',
    'English (Intermediate)',
];

const socialLinks: SocialLink[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/Firosmalik000',
        icon: <Github className="h-4 w-4" />,
    },
    {
        label: 'LinkedIn',
        href: 'https://id.linkedin.com/in/firos-malik-abdillah',
        icon: <ArrowUpRight className="h-4 w-4" />,
    },
];

export default function Welcome() {
    const shouldReduceMotion = useReducedMotion();
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const profileUrl = new URL('../../../docs/profile.jpg', import.meta.url)
        .href;
    const logoUrl = new URL('../../../docs/logo.svg', import.meta.url).href;
    const resumeUrl = new URL(
        '../../../docs/Firos Malik Abdillah - RESUME_v2.pdf',
        import.meta.url,
    ).href;

    function scrollProjects(direction: number): void {
        const element = projectsRef.current;

        if (!element) {
            return;
        }

        element.scrollBy({ left: direction * 360, behavior: 'smooth' });
    }

    return (
        <>
            <Head title="Firos Malik Abdillah | Portfolio" />
            <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-[#0f172a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.12),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(15,23,42,0.05),_transparent_28%),radial-gradient(circle_at_20%_80%,_rgba(14,165,233,0.08),_transparent_28%),radial-gradient(circle_at_85%_75%,_rgba(249,115,22,0.08),_transparent_26%)]" />

                <motion.div
                    aria-hidden="true"
                    className="absolute top-[-7rem] left-[-7rem] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { x: [0, 18, 0], y: [0, 12, 0] }
                    }
                    transition={{
                        duration: 9,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    aria-hidden="true"
                    className="absolute top-[20%] right-[-6rem] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { x: [0, -14, 0], y: [0, 10, 0] }
                    }
                    transition={{
                        duration: 11,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    aria-hidden="true"
                    className="absolute bottom-[-6rem] left-[18%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { x: [0, 12, 0], y: [0, -12, 0] }
                    }
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                    }}
                />

                <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-6 lg:px-10">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <motion.div
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12"
                            animate={
                                shouldReduceMotion
                                    ? undefined
                                    : { y: [0, -3, 0] }
                            }
                            transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                className="h-7 w-7 sm:h-8 sm:w-8"
                            />
                        </motion.div>
                        <div className="min-w-0">
                            <p className="text-[10px] tracking-[0.24em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.32em]">
                                Portfolio
                            </p>
                            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                                Firos Malik Abdillah
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                        >
                            Contact
                        </a>
                    </div>
                </header>

                <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 sm:px-8 sm:pb-16 lg:px-10">
                    <section className="grid gap-8 pt-4 sm:pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="space-y-5 sm:space-y-7"
                        >
                            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm sm:px-4 sm:text-sm">
                                <Sparkles className="h-4 w-4 text-blue-600" />
                                Full-Stack Web Developer | Laravel | React.js
                                (TypeScript) | Node.js
                            </div>

                            <div className="max-w-3xl">
                                <h1 className="max-w-2xl text-4xl leading-[0.96] font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-7xl">
                                    Firos Malik Abdillah
                                    <span className="block text-blue-700">
                                        Professional portfolio for job
                                        applications
                                    </span>
                                </h1>
                                {/* <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                                    Full-Stack Web Developer experienced in
                                    shipping client projects using Laravel and
                                    React.js (TypeScript). Comfortable owning
                                    features end-to-end: UI implementation, API
                                    development and integration, database
                                    workflows, debugging, and production
                                    support.
                                </p> */}
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                                    Based in Ciputat Timur, South Tangerang.
                                    Available for product-focused web
                                    development work.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 sm:px-6"
                                >
                                    <Download className="h-4 w-4" />
                                    Open Resume
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:px-6"
                                >
                                    <MapPin className="h-4 w-4" />
                                    View Contact
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.75,
                                ease: 'easeOut',
                                delay: 0.05,
                            }}
                            className="relative mx-auto w-full max-w-xl lg:max-w-none"
                        >
                            <motion.div
                                className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-5"
                                animate={
                                    shouldReduceMotion
                                        ? undefined
                                        : { y: [0, -6, 0] }
                                }
                                transition={{
                                    duration: 6.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: 'easeInOut',
                                }}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.28em]">
                                            Profile
                                        </p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                                            Open to new opportunities
                                        </p>
                                    </div>
                                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 sm:px-3 sm:text-xs">
                                        Available
                                    </div>
                                </div>

                                <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 sm:mt-5 sm:rounded-[1.75rem]">
                                    <img
                                        src={profileUrl}
                                        alt="Profile photo of Firos Malik Abdillah"
                                        className="aspect-[4/5] w-full object-cover object-center"
                                    />
                                </div>

                                <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2">
                                    <motion.div
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                        animate={
                                            shouldReduceMotion
                                                ? undefined
                                                : { y: [0, -3, 0] }
                                        }
                                        transition={{
                                            duration: 4.8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.28em]">
                                            Focus
                                        </p>
                                        <p className="mt-2 text-sm leading-6 font-semibold text-slate-800">
                                            Laravel, React, TypeScript, Node.js
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                        animate={
                                            shouldReduceMotion
                                                ? undefined
                                                : { y: [0, 3, 0] }
                                        }
                                        transition={{
                                            duration: 5.2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.28em]">
                                            Availability
                                        </p>
                                        <p className="mt-2 text-sm leading-6 font-semibold text-slate-800">
                                            Available for freelance and
                                            full-time roles
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    <section className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:mt-10 sm:p-6">
                        <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    About
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">
                                    Summary and skills
                                </h2>
                            </div>
                            <p className="max-w-2xl text-sm leading-7 text-slate-600">
                                Full-Stack Web Developer experienced in shipping
                                client projects using Laravel and React.js
                                (TypeScript). Comfortable owning features
                                end-to-end with readable and maintainable code.
                            </p>
                        </div>

                        <div className="mt-5 grid gap-4">
                            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 sm:rounded-[1.5rem] sm:p-6">
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.3em]">
                                    Skills
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-slate-900 via-blue-700 to-cyan-500 text-white">
                                                    {skill.icon}
                                                </span>
                                                <span className="text-sm leading-5 font-medium text-slate-700">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-4 lg:grid-cols-2">
                            <div className="rounded-[1.25rem] border border-slate-200 bg-white p-5 sm:rounded-[1.5rem] sm:p-6">
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    Certifications
                                </p>
                                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                                    {certifications.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-[1.25rem] border border-slate-200 bg-white p-5 sm:rounded-[1.5rem] sm:p-6">
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    Languages
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {languages.map((language) => (
                                        <span
                                            key={language}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm"
                                        >
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-8 sm:mt-10">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                            <div>
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    Experience
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">
                                    Year-by-year history
                                </h2>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-slate-600">
                                All experience entries from the resume are
                                grouped by year for easier reading.
                            </p>
                        </div>

                        <div className="mt-4 space-y-4 sm:mt-5">
                            {experienceTimeline.map((group, groupIndex) => (
                                <motion.article
                                    key={group.year}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: groupIndex * 0.06,
                                    }}
                                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
                                >
                                    <div className="border-b border-slate-100 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,64,175,0.88),_rgba(56,189,248,0.72))] px-4 py-5 text-white sm:px-6">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <p className="text-[10px] tracking-[0.28em] text-white/55 uppercase sm:text-xs sm:tracking-[0.34em]">
                                                    Career timeline
                                                </p>
                                                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                                                    {group.year}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                                                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                                                {group.entries.length} role
                                                {group.entries.length > 1
                                                    ? 's'
                                                    : ''}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative px-4 py-5 sm:px-6 sm:py-6">
                                        <div className="absolute top-6 bottom-6 left-6 hidden w-px bg-gradient-to-b from-sky-200 via-slate-200 to-amber-200 sm:block" />
                                        <div className="space-y-4">
                                            {group.entries.map((entry) => (
                                                <div
                                                    key={`${entry.company}-${entry.role}`}
                                                    className="relative grid gap-4 rounded-[1.35rem] border border-slate-200 bg-[linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(248,250,252,0.98))] p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition group-hover:shadow-[0_14px_34px_rgba(15,23,42,0.06)] sm:grid-cols-[0.34fr_1fr] sm:p-5"
                                                >
                                                    <div className="absolute top-5 left-0 hidden -translate-x-1/2 sm:block">
                                                        <span className="block h-3.5 w-3.5 rounded-full border-4 border-white bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 shadow-sm" />
                                                    </div>
                                                    <div className="rounded-[1.15rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/5">
                                                        <p className="text-[10px] tracking-[0.24em] text-white/45 uppercase sm:text-xs sm:tracking-[0.28em]">
                                                            Period
                                                        </p>
                                                        <p className="mt-2 text-sm font-semibold text-white sm:text-base">
                                                            {entry.period}
                                                        </p>
                                                        <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75">
                                                            {entry.location}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col justify-between gap-4">
                                                        <div>
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                <p className="text-base font-semibold tracking-[-0.02em] text-slate-950 sm:text-lg">
                                                                    {
                                                                        entry.company
                                                                    }
                                                                </p>
                                                                <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-blue-700 uppercase">
                                                                    Role
                                                                </span>
                                                            </div>
                                                            <p className="mt-2 text-sm font-medium text-blue-700">
                                                                {entry.role}
                                                            </p>
                                                            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                                                                {entry.bullets.map(
                                                                    (
                                                                        bullet,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                bullet
                                                                            }
                                                                            className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-3"
                                                                        >
                                                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400" />
                                                                            <span className="flex-1">
                                                                                {
                                                                                    bullet
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:mt-10 sm:p-6">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                            <div>
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    Projects
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-slate-950 sm:text-2xl">
                                    Client websites
                                </h2>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-slate-600">
                                All project entries are taken from the resume,
                                including live and development links.
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
                            <p className="text-xs tracking-[0.26em] text-slate-400 uppercase">
                                Carousel
                            </p>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => scrollProjects(-1)}
                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollProjects(1)}
                                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div
                            ref={projectsRef}
                            className="mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto overscroll-x-contain pr-1 pb-2 [-ms-overflow-style:none] sm:mt-5 [&::-webkit-scrollbar]:hidden"
                        >
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.name}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_16px_48px_rgba(15,23,42,0.12)] transition sm:w-[340px] sm:rounded-[1.5rem] sm:p-5"
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.2),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.12),_transparent_25%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                                    <div className="relative">
                                        <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-white/75 uppercase sm:text-[11px] sm:tracking-[0.24em]">
                                            Featured Project
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <p className="text-base font-semibold sm:text-lg">
                                                    {project.name}
                                                </p>
                                            </div>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                                                aria-label={`Open ${project.name} live site`}
                                            >
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tech.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/80 sm:text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 text-sm">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 transition hover:bg-white/10"
                                            >
                                                <span>Live</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href={project.dev}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 transition hover:bg-white/10"
                                            >
                                                <span>Dev</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    <section
                        id="contact"
                        className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:mt-10 sm:p-6"
                    >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                    Contact
                                </p>
                                <p className="mt-2 text-base font-semibold text-slate-950 sm:text-lg">
                                    Get in touch
                                </p>
                                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                                    Email, phone, location, and social links are
                                    listed below for quick contact.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                                <a
                                    href="mailto:firosmalik.job@gmail.com"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300"
                                >
                                    <Mail className="h-4 w-4" />
                                    firosmalik.job@gmail.com
                                </a>
                                <a
                                    href="tel:+6285236446961"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300"
                                >
                                    <Phone className="h-4 w-4" />
                                    +62 852-3644-6961
                                </a>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
                                    <MapPin className="h-4 w-4" />
                                    Ciputat Timur, South Tangerang
                                </span>
                            </div>
                        </div>

                        <div className="mt-5 border-t border-slate-200 pt-5">
                            <p className="text-[10px] tracking-[0.24em] text-slate-400 uppercase sm:text-xs sm:tracking-[0.32em]">
                                Social Media
                            </p>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                    >
                                        {link.icon}
                                        {link.label}
                                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <footer className="mt-8 flex flex-col gap-3 border-t border-slate-200 py-6 text-sm text-slate-500 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
                        <p>Firos Malik Abdillah portfolio.</p>
                        <p>
                            Built with React, Framer Motion, and Tailwind CSS.
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}
