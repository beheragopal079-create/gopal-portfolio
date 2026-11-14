/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Compass,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Menu,
  X,
} from 'lucide-react';

import heroAerospaceImg from './assets/images/hero_aerospace_studio_1794661317314.jpg';
import freshoraWebImg from './assets/images/project_freshora_web_1794661317407.jpg';
import nexoraAppImg from './assets/images/project_nexora_app_1794661317727.jpg';
import aquaBeetleImg from './assets/images/project_aqua_beetle_1794661318060.jpg';
import astravoraxGeoImg from './assets/images/project_astravorax_geo_1794661319124.jpg';

type ProjectCategory = 'all' | 'web' | 'science' | 'media';

interface ProjectItem {
  id: string;
  title: string;
  categoryLabel: string;
  categoryKey: Exclude<ProjectCategory, 'all'>;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel: string;
  details: {
    summary: string;
    highlights: string[];
    disciplines: string[];
  };
}

interface SkillItem {
  name: string;
  focus: string;
  appliedIn: string;
  description: string;
}

const CONTACT_EMAIL_PLACEHOLDER = 'beheragopal079@gmail.com';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const PROJECTS: ProjectItem[] = [
  {
    id: 'freshora-market',
    title: 'Freshora Market',
    categoryLabel: 'Web Design · Responsive Storefront',
    categoryKey: 'web',
    description:
      'A responsive sample website built focusing on clean design and user experience.',
    image: freshoraWebImg,
    imageAlt: 'Freshora Market responsive web design shown on a modern laptop',
    ctaLabel: 'View Live Website',
    ctaHref: 'https://freshora-market.netlify.app/',
    secondaryLabel: 'Design Notes',
    details: {
      summary:
        'A clean storefront concept engineered for effortless product discovery across desktop, tablet, and mobile viewports with clear visual hierarchy and crisp whitespace.',
      highlights: [
        'Mobile-first grid system with fluid card proportions and balanced spacing.',
        'High-contrast product typography and straightforward shopping navigation.',
        'Deployed live on Netlify for cross-device testing and review.',
      ],
      disciplines: ['Web Development (HTML/CSS)', 'UI Optimization'],
    },
  },
  {
    id: 'nexora-focus',
    title: 'Nexora Focus',
    categoryLabel: 'App Interface · Mobile UX Prototype',
    categoryKey: 'web',
    description:
      'A sample application prototype showcasing UI optimization and intuitive mobile navigation.',
    image: nexoraAppImg,
    imageAlt: 'Nexora Focus mobile application prototype displayed on a smartphone',
    ctaLabel: 'View Live App',
    ctaHref: 'https://nexora-focus.netlify.app/',
    secondaryLabel: 'UX Notes',
    details: {
      summary:
        'An application interface prototype built to reduce cognitive friction during study and deep-work sessions through purposeful typography and thumb-friendly controls.',
      highlights: [
        'Streamlined mobile navigation designed for rapid one-handed interaction.',
        'Clear session states with distraction-free visual contrast.',
        'Deployed live on Netlify as an interactive frontend prototype.',
      ],
      disciplines: ['UI Optimization', 'Web Development (HTML/CSS)'],
    },
  },
  {
    id: 'scientific-innovations',
    title: 'Scientific Innovations',
    categoryLabel: 'NCSC Research · Biomimetic & Mechanical',
    categoryKey: 'science',
    description:
      'Developed the "Aqua-Beetle: Zero-Electricity Biomimetic Atmospheric Fog Harvester" for the NCSC and a "Passive Mechanical Water-Leak Detector" focusing on biomimetic and mechanical engineering principles.',
    image: aquaBeetleImg,
    imageAlt: 'Biomimetic atmospheric fog harvester prototype with stainless mesh and water droplets',
    secondaryLabel: 'View Research Brief',
    details: {
      summary:
        'Applied scientific research prototypes created to solve real-world water conservation and sustainability challenges without relying on external electrical power.',
      highlights: [
        'Aqua-Beetle: Inspired by the Namib Desert beetle shell, combining hydrophobic and hydrophilic micro-patterns to capture atmospheric fog passively for NCSC.',
        'Passive Mechanical Water-Leak Detector: Uses purely mechanical buoyancy and pressure principles to trigger an immediate physical alert when water leaks occur.',
        'Structured around testable hypotheses, material prototyping, and conservation impact.',
      ],
      disciplines: ['Scientific Research', 'Project Management'],
    },
  },
  {
    id: 'astravorax-youtube',
    title: 'AstravoraX YouTube Channel',
    categoryLabel: 'Educational Media · Geography',
    categoryKey: 'media',
    description:
      'Produce, edit, and manage an educational YouTube channel focused on detailed geographical concepts.',
    image: astravoraxGeoImg,
    imageAlt: 'Illuminated deep-space blue topographic globe representing AstravoraX geography content',
    secondaryLabel: 'Explore Workflow',
    details: {
      summary:
        'An independent educational media channel dedicated to breaking down complex physical and human geography topics into clear, visually engaging episodes.',
      highlights: [
        'End-to-end production pipeline: topic research, scripting, visual pacing, and editing.',
        'Focus on accurate cartography, planetary systems, and accessible explanations for students.',
        'Consistent channel management and audience-focused content planning.',
      ],
      disciplines: ['Video Editing', 'Project Management', 'Scientific Research'],
    },
  },
];

const SKILLS: SkillItem[] = [
  {
    name: 'Web Development (HTML/CSS)',
    focus: 'Semantic structure, responsive CSS grids, and accessible cross-device layouts.',
    appliedIn: 'Freshora Market & Personal Portfolio Architecture',
    description:
      'Building clean, fast-loading web pages from scratch with structured HTML5, responsive Flexbox/Grid layouts, and attention to typography.',
  },
  {
    name: 'UI Optimization',
    focus: 'Visual hierarchy, mobile navigation clarity, and streamlined user flows.',
    appliedIn: 'Nexora Focus & Freshora Market',
    description:
      'Refining interface spacing, contrast, and touch targets so users can navigate web and mobile interfaces comfortably without clutter.',
  },
  {
    name: 'Video Editing',
    focus: 'Narrative pacing, educational motion graphics, and audio-visual clarity.',
    appliedIn: 'AstravoraX YouTube Channel',
    description:
      'Transforming detailed geography research into crisp, engaging video lessons through structured editing, visual cues, and clean storytelling.',
  },
  {
    name: 'Scientific Research',
    focus: 'Biomimicry, mechanical problem-solving, and NCSC experimental documentation.',
    appliedIn: 'Aqua-Beetle Fog Harvester & Passive Mechanical Water-Leak Detector',
    description:
      'Investigating natural systems and physical engineering principles to design zero-electricity solutions tested for science congresses.',
  },
  {
    name: 'Project Management',
    focus: 'Milestone planning, iterative prototyping, and multi-disciplinary execution.',
    appliedIn: 'NCSC Submissions, AstravoraX Production & Freelance Web Builds',
    description:
      'Balancing academics, International Chess Festival preparation, YouTube publishing schedules, and web design deliverables with disciplined execution.',
  },
];

function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#071124] via-[#0F2142] to-[#1E3A8A] p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="mb-2 h-7 w-7 text-blue-300" strokeWidth={1.5} />
        <span className="font-display text-sm font-semibold tracking-tight text-slate-100">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);
  const [emailCopied, setEmailCopied] = useState(false);
  const [splashPhase, setSplashPhase] = useState<'visible' | 'fading' | 'done'>('visible');

  // Opening Splash Screen (2.5 seconds visible, then smooth CSS fade-out)
  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setSplashPhase('fading');
    }, 2500);

    const removeTimer = window.setTimeout(() => {
      setSplashPhase('done');
    }, 3050);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => navObserver.observe(sec));
    return () => navObserver.disconnect();
  }, []);

  // Scroll-Reveal Animation for Sections
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll('.reveal-section'));
    if (revealEls.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.categoryKey === projectFilter);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL_PLACEHOLDER);
      } else {
        throw new Error('Clipboard API unavailable');
      }
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = CONTACT_EMAIL_PLACEHOLDER;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (copied) {
        setEmailCopied(true);
        window.setTimeout(() => setEmailCopied(false), 2400);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-700 selection:text-white">
      {/* Aerospace Opening Splash Screen (2.5s) */}
      {splashPhase !== 'done' && (
        <div
          aria-label="Opening aerospace intro"
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060E1F] px-6 text-white transition-opacity duration-500 ease-out ${
            splashPhase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 42%, rgba(37, 99, 235, 0.32), transparent 55%), linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 56px 56px, 56px 56px',
            }}
          />

          <div className="relative flex w-full max-w-md flex-col items-center text-center">
            {/* Minimalist Rocket, Orbital Trajectory & Pulsing Stars */}
            <svg
              viewBox="0 0 220 130"
              className="h-28 w-48"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="34"
                cy="34"
                r="2"
                fill="#93C5FD"
                className="splash-star"
                style={{ animationDelay: '0ms' }}
              />
              <circle
                cx="184"
                cy="28"
                r="2.2"
                fill="#FFFFFF"
                className="splash-star"
                style={{ animationDelay: '350ms' }}
              />
              <circle
                cx="166"
                cy="96"
                r="1.8"
                fill="#60A5FA"
                className="splash-star"
                style={{ animationDelay: '700ms' }}
              />
              <circle
                cx="52"
                cy="94"
                r="1.8"
                fill="#93C5FD"
                className="splash-star"
                style={{ animationDelay: '500ms' }}
              />

              {/* Orbital Arc */}
              <path
                d="M 30 102 Q 108 18 190 36"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="splash-orbit-path"
              />

              {/* Minimalist Geometric Aerospace Craft */}
              <g className="splash-rocket">
                <g transform="translate(102, 54) rotate(42)">
                  <path
                    d="M0 -18 C5 -8 6 4 5 12 L-5 12 C-6 4 -5 -8 0 -18 Z"
                    fill="#FFFFFF"
                  />
                  <path d="M-5 6 L-10 13 L-4 12 Z" fill="#60A5FA" />
                  <path d="M5 6 L10 13 L4 12 Z" fill="#60A5FA" />
                  <circle cx="0" cy="-3" r="2.2" fill="#071124" />
                  <path d="M-2.5 13 L0 21 L2.5 13 Z" fill="#3B82F6" />
                </g>
              </g>
            </svg>

            <h2 className="splash-name mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Gopal Krishna Behera
            </h2>
            <p className="splash-subtitle mt-2 text-xs font-medium tracking-wide text-blue-300 sm:text-sm">
              Aspiring Aerospace Engineer · Creator of AstravoraX
            </p>

            {/* 2.5s Trajectory Progress Bar */}
            <div className="mt-7 h-0.5 w-48 overflow-hidden rounded-full bg-slate-800">
              <div className="splash-progress-bar h-full w-full bg-blue-500" />
            </div>
          </div>
        </div>
      )}

      {/* Sticky Top Navigation Bar (3-Zone Contract) */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-[#071124] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
          >
            Gopal Krishna Behera
          </a>

          {/* Zone 2: 5 Concise Single-Line Text Nav Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#071124] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded ${
                    isActive ? 'text-[#071124] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-blue-600 transition-transform duration-150 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#071124] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Contact Me
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-slate-100 text-[#071124] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* 1. Hero Section (Deep Space Blue Atmospheric Split) */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#071124] text-white border-b border-slate-800/80"
        >
          {/* Subtle architectural grid lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 18% 20%, rgba(37, 99, 235, 0.35), transparent 48%), linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 64px 64px, 64px 64px',
            }}
          />

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Typographic Hierarchy & Primary CTA */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-sm font-medium tracking-wide text-blue-300">
                  Class 9 Student <span aria-hidden="true" className="mx-1.5 text-slate-500">|</span>{' '}
                  Aspiring Aerospace Engineer{' '}
                  <span aria-hidden="true" className="mx-1.5 text-slate-500">|</span> Creator of
                  AstravoraX
                </p>

                <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  Gopal Krishna Behera
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Building clean web experiences, biomimetic science prototypes for NCSC, and
                  educational geography media—combining analytical discipline with practical design.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071124]"
                  >
                    <span>View My Work</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Matching Height Aerospace Studio Visual */}
              <div className="lg:col-span-5">
                <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-700/70 bg-[#0B172E] sm:h-80 lg:h-full lg:min-h-[340px]">
                  <ResilientImage
                    src={heroAerospaceImg}
                    alt="Aerospace wind-tunnel wing model and brushed aluminum telemetry ring"
                    fallbackTitle="Aerospace & Engineering Portfolio"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Highlights Strip Below Split */}
            <div className="mt-12 grid grid-cols-1 gap-6 border-t border-slate-800 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-mono-tabular text-xs font-medium text-blue-300">01 / Academics</p>
                <p className="mt-1.5 font-display text-base font-semibold text-white">
                  Siddhivinayak Public School
                </p>
                <p className="mt-0.5 text-sm text-slate-400">Class 9 Student</p>
              </div>
              <div>
                <p className="font-mono-tabular text-xs font-medium text-blue-300">02 / Science</p>
                <p className="mt-1.5 font-display text-base font-semibold text-white">
                  NCSC Science Congress
                </p>
                <p className="mt-0.5 text-sm text-slate-400">Biomimetic &amp; Mechanical Research</p>
              </div>
              <div>
                <p className="font-mono-tabular text-xs font-medium text-blue-300">03 / Strategy</p>
                <p className="mt-1.5 font-display text-base font-semibold text-white">
                  International Chess Festival
                </p>
                <p className="mt-0.5 text-sm text-slate-400">Competitive Player</p>
              </div>
              <div>
                <p className="font-mono-tabular text-xs font-medium text-blue-300">04 / Media</p>
                <p className="mt-1.5 font-display text-base font-semibold text-white">
                  AstravoraX Channel
                </p>
                <p className="mt-0.5 text-sm text-slate-400">Educational Geography Creator</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Me Section (Clean White Canvas) */}
        <section id="about" className="reveal-section bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
                  About Me
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#071124] sm:text-4xl">
                  Curious mind, structured builder.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="max-w-2xl text-base leading-[1.75] text-slate-700 sm:text-lg">
                  I am a Class 9 student at Siddhivinayak Public School with a deep passion for
                  science, technology, and geography. Whether I am competing in NCSC science
                  congresses, playing at the International Chess Festival, or creating geography
                  content for my YouTube channel, AstravoraX, I am always eager to learn and build
                  new things. My ultimate goal is to become an aerospace engineer, and I am
                  currently building my skills in web development, UI design, and research.
                </p>

                {/* Clean Hairline Milestones (Zero Cards-Within-Cards, Zero Left Accent Borders) */}
                <div className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#071124]">
                      Aerospace Trajectory
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Developing strong foundations in physics, geography, and applied mechanical
                      problem-solving toward aerospace engineering.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#071124]">
                      Web &amp; UI Craft
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Building responsive websites and mobile interface prototypes as a dedicated
                      teenlancer focused on clarity and usability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#071124]">
                      Analytical Discipline
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Honed through competitive play at the International Chess Festival and
                      hypothesis-driven NCSC research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Projects Section (Cool Off-White Canvas, 2-Column Clean Grid) */}
        <section
          id="projects"
          className="reveal-section border-y border-slate-200 bg-slate-50/80 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
                  Selected Work
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#071124] sm:text-4xl">
                  Projects &amp; Research
                </h2>
              </div>

              {/* Interactive Filter Controls */}
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
              >
                {(
                  [
                    { key: 'all', label: 'All Projects' },
                    { key: 'web', label: 'Web & UI' },
                    { key: 'science', label: 'Science' },
                    { key: 'media', label: 'Media' },
                  ] as const
                ).map((tab) => {
                  const active = projectFilter === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setProjectFilter(tab.key)}
                      className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        active
                          ? 'bg-[#071124] text-white'
                          : 'text-slate-600 hover:text-[#071124] hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="project-img h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-medium text-slate-500">{project.categoryLabel}</p>

                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-[#071124]">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                      {project.ctaHref && project.ctaLabel && (
                        <a
                          href={project.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#071124] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                        >
                          <span>{project.ctaLabel}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className={`inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                          project.ctaHref
                            ? 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                            : 'bg-[#071124] text-white hover:bg-blue-700'
                        }`}
                      >
                        <span>{project.secondaryLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Skills Section (Crisp White Canvas, Interactive Architectural Tags) */}
        <section id="skills" className="reveal-section bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
                Capabilities
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#071124] sm:text-4xl">
                Core Skills
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Select any skill tag to see how it connects to my engineering, web design, and
                media projects.
              </p>
            </div>

            {/* Stylish Interactive Skill Tags */}
            <div
              className="mt-8 flex flex-wrap gap-3"
              role="tablist"
              aria-label="Core skills explorer"
            >
              {SKILLS.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSkill(skill)}
                    className={`min-h-[44px] rounded-lg border px-4 py-2.5 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                      isSelected
                        ? 'border-[#071124] bg-[#071124] text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-300 hover:bg-blue-50/60 hover:text-[#071124]'
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>

            {/* Clean Contextual Skill Breakdown */}
            <div
              role="tabpanel"
              aria-label={selectedSkill.name}
              className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <p className="text-xs font-medium text-blue-700">Selected Capability</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-[#071124]">
                    {selectedSkill.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    Applied in: <span className="text-slate-700">{selectedSkill.appliedIn}</span>
                  </p>
                </div>
                <div className="md:col-span-7 md:border-l md:border-slate-200 md:pl-8">
                  <p className="text-sm font-medium text-[#071124]">{selectedSkill.focus}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {selectedSkill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Contact Section & Footer (Deep Space Blue) */}
      <footer id="contact" className="reveal-section bg-[#071124] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                Contact &amp; Opportunities
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Open to internships, collaborations &amp; freelance web projects.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                Looking for a motivated teenlancer to build a clean responsive website, optimize an
                interface, or collaborate on STEM &amp; educational initiatives? Reach out directly.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-[#0C1B38] p-6">
                <p className="text-xs font-medium text-slate-400">
                  Direct Email
                </p>
                <p className="mt-1.5 font-mono-tabular text-sm font-medium text-white break-all sm:text-base">
                  {CONTACT_EMAIL_PLACEHOLDER}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL_PLACEHOLDER}`}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#071124] px-4 py-2 text-xs font-semibold text-slate-200 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-5 border-t border-slate-800 pt-4">
                  <a
                    href="/gopal-portfolio.html"
                    download="gopal-krishna-behera-portfolio.html"
                    className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Single-File HTML Version</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-800/90 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} Gopal Krishna Behera. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="transition-colors hover:text-white whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-6">
              <div>
                <p className="text-xs font-medium text-blue-700">{selectedProject.categoryLabel}</p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl font-bold text-[#071124]"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#071124] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-700">
                {selectedProject.details.summary}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <h4 className="font-display text-sm font-semibold text-[#071124]">
                  Key Highlights
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {selectedProject.details.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <div className="text-xs text-slate-500">
                  Disciplines: {selectedProject.details.disciplines.join(' · ')}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.ctaHref && selectedProject.ctaLabel && (
                    <a
                      href={selectedProject.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#071124] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-700"
                    >
                      <span>{selectedProject.ctaLabel}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
