import React, { useState, useRef, useCallback } from 'react';

const COMPANY_LOGOS = {
  'Xmatiq Technologies': 'assets/imgs/xmatiq-logo.png',
  'Astute Info Solution': 'assets/imgs/astute-logo.png',
  'InfoLabz': 'assets/imgs/infolabz-logo.png',
};

function getDurationToPresent(startYear, startMonth) {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1, 1);
  let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  totalMonths = Math.max(0, totalMonths);
  if (totalMonths < 12) return `${totalMonths} mos`;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) return `${years} yr`;
  return `${years} yr ${months} mo`;
}

const experiences = [
  {
    role: 'Project Manager',
    company: 'Xmatiq Technologies',
    type: 'Full-time',
    period: 'Feb 2026 – Present',
    startYear: 2026,
    startMonth: 2,
    duration: '2 mos',
    location: 'On-site',
    notes: 'Leadership, Team Management',
    current: true,
  },
  {
    role: 'Full Stack Engineer',
    company: 'Xmatiq Technologies',
    type: 'Full-time',
    period: 'Mar 2025 – Feb 2026',
    duration: '1 yr',
    location: 'Ahmedabad, Gujarat, India',
    notes: 'Mobile Payments, Payment Card Processing, +4 skills',
    current: false,
  },
  {
    role: 'Full Stack Engineer',
    company: 'Xmatiq Technologies',
    type: 'Trainee',
    period: 'Jan 2025 – Mar 2025',
    duration: '3 mos',
    location: 'Ahmedabad, Gujarat, India',
    notes: 'Architectural Design, Redux.js, +4 skills',
    current: false,
  },
  {
    role: 'Frontend Developer',
    company: 'Astute Info Solution',
    type: 'Internship',
    period: 'Jul 2024 – Dec 2024',
    duration: '6 mos',
    location: 'Ahmedabad, Gujarat, India · On-site',
    notes: 'React JS, API integration; styled-components, Next.js, +5 skills',
    current: false,
  },
  {
    role: 'Project Intern',
    company: 'InfoLabz',
    type: 'Trainee',
    period: 'May 2023 – May 2024',
    duration: '1 yr 1 mo',
    location: 'Ahmedabad, Gujarat, India',
    notes: 'Node.js, ESP8266, +8 skills',
    current: false,
  },
];

function ExperienceCard({ exp }) {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlow({ x: 50, y: 50 });
  }, []);

  return (
    <div
      ref={cardRef}
      className="experience-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--glow-x': `${glow.x}%`,
        '--glow-y': `${glow.y}%`,
      }}
    >
      <div className="experience-card__glow" aria-hidden="true" />
      <div className="experience-card__logo-wrap">
        <img
          src={COMPANY_LOGOS[exp.company]}
          alt={exp.company}
          className="experience-card__logo"
        />
      </div>
      <div className="experience-card__body">
        <div className="experience-card__header">
          <h6 className="experience-card__role">
            {exp.role}
            {exp.current && <span className="experience-card__badge">Current</span>}
          </h6>
          <span className="experience-card__dates">
            {exp.period} · {exp.current && exp.startYear != null ? getDurationToPresent(exp.startYear, exp.startMonth) : exp.duration}
          </span>
        </div>
        <p className="experience-card__company">
          <strong>{exp.company}</strong>
          {exp.type && <span className="experience-card__type"> · {exp.type}</span>}
        </p>
        <p className="experience-card__location">{exp.location}</p>
        {exp.notes && (
          <p className="experience-card__notes">{exp.notes}</p>
        )}
      </div>
    </div>
  );
}

function Experience({ experienceRef }) {
  return (
    <div ref={experienceRef}>
      <section className="section experience-section grid-bg" id="experience">
        <div className="container text-center">
          <p className="section-subtitle">Where I've worked</p>
          <h6 className="section-title mb-6">Experience</h6>
          <p className="experience-tagline mb-5">From intern to Project Manager — building products, leading teams, and growing with every step.</p>
          <div className="experience-timeline">
            <div className="experience-timeline__line" aria-hidden="true" />
            {experiences.map((exp, index) => (
              <div key={index} className="experience-timeline__item">
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
