import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const DATA = {
  name: "Daniel Bail",
  initials: "DB",
  url: "https://danielbail.com", // Gültige URL hinzugefügt
  location: "Berlin, Deutschland",
  locationLink: "https://www.google.com/maps/place/berlin",
  description:
    "Wirtschaftsinformatik-Student mit Schwerpunkt IT-Projektmanagement und Finanzdienstleistungen",
  summary:
    "Aktuell bin ich Wirtschaftsinformatikstudent an der Hochschule für Technik und Wirtschaft Berlin mit praktischer Erfahrung in IT, Audit und Finanzen.",
  avatarUrl: `${basePath}/me.png`,
  skills: [
    "Java",
    "SQL", 
    "HTML",
    "JavaScript",
    "SAP ERP",
    "n8n",
    "Camunda",
    "Signavio",
    "Jira",
    "Alteryx"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "bail.daniel@aol.com",
    tel: "+491743929777",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dan1elBa1l",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-bail-431268198/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Scalable Capital GmbH",
      href: "https://scalable.capital",
      badges: [],
      location: "Berlin",
      title: "Werkstudent Internal Audit",
      logoUrl: `${basePath}/scalable.png`,
      start: "November 2024",
      end: "Bis Heute",
      description: [
        "Unterstützung und Durchführung einer Qualitätsprüfung der Internen Revision im Rahmen der Global Internal Audit Standards (GIAS) des Institute of Internal Auditors (IIA)",
        "Mitwirkung bei der strategischen Planung und Konzeption zur Einführung eines Systems zur kontinuierlichen Prüfung (Continuous Audit)",
        "Unterstützung bei diversen Prüfungen in unterschiedlichen Prüffeldern und Unternehmensbereichen",
        "Recherche und Analyse zur Prüfung neuer Prüffelder unter Berücksichtigung regulatorischer Anforderungen und potenzieller Risiken",
        "Dokumentation von Arbeitsergebnissen zur Sicherstellung von Transparenz und Nachvollziehbarkeit der durchgeführten Aufgaben",
        "Erstellung und Gestaltung von Präsentationen für wiederkehrende Reportings der Internal Audit Funktion an interne Komitees"
      ],
    },
    {
      company: "PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft",
      href: "https://www.pwc.de",
      badges: [],
      location: "Berlin",
      title: "Praktikant - IT-gestützte Geschäftsprozesse",
      logoUrl: `${basePath}/pwc.png`,
      start: "Mai 2024",
      end: "September 2024",
      description: [
        "Überprüfung der Wirksamkeit von IT-Kontrollsystemen anhand festgelegter Prüfungsanforderungen",
        "Analyse und Bewertung von IT-gestützten Geschäftsprozessen, einschließlich Risikobewertung",
        "Überprüfung der Einhaltung von IT-Richtlinien im Rahmen von Jahresabschlussprüfungen, einschließlich den Anforderungen gemäß BAIT und MaRisk",
        "Erstellung von Prüfungsdokumenten zur Gewährleistung der Nachvollziehbarkeit",
        "Teilnahme an Interviews mit Mandanten, Anforderung und Prüfung relevanter Dokumente und Nachweise",
        "Anforderung von Stichproben und Prüfung ihrer Nachvollziehbarkeit"
      ],
    },
    {
      company: "DKB Service GmbH",
      href: "https://www.dkb.de",
      badges: [],
      location: "Berlin",
      title: "Werkstudent IT-Projektmanagement",
      logoUrl: `${basePath}/dkb.png`,
      start: "September 2022",
      end: "April 2024",
      description: [
        "Onboarding, Berechtigungsmanagement und Einführung von internen Mitarbeiter*innen in neue Systeme und Prozesse",
        "Onboarding und Berechtigungsmanagement von externen Berater*innen",
        "Dokumentation von Prozessen und Arbeitsabläufen für interne sowie externe Mitarbeiter*innen",
        "Durchführung von Tests neuer Anwendungsversionen zur Qualitätssicherung und Fehleranalyse",
        "Erstellung und Pflege von Dashboards, Tickets und Seiten in Confluence, ITSM und Jira zur Unterstützung des Projektmanagements",
        "Beantragung und Verwaltung von Berechtigungen in IGI (Identitäts- und Berechtigungsmanagement)"
      ],
    },
  ],
  education: [
    {
      school: "Hochschule für Technik und Wirtschaft Berlin",
      href: "https://www.htw-berlin.de",
      degree: "B.Sc. Wirtschaftsinformatik",
      logoUrl: `${basePath}/htw.png`,
      start: "Oktober 2021",
      end: "Bis Heute",
    },
    {
      school: "Presse-Grosso Südwest GmbH & Co. KG",
      href: "https://www.pgsw.de",
      degree: "Ausbildung zum Kaufmann für Groß- & Außenhandel",
      logoUrl: `${basePath}/pgsw.png`,
      start: "September 2019",
      end: "Mai 2021",
    },
    {
      school: "Julius-Springer-Schule Heidelberg",
      href: "https://www.jss-heidelberg.de",
      degree: "Kaufmännische Fachhochschulreife",
      logoUrl: `${basePath}/jss.png`,
      start: "September 2017",
      end: "Juli 2018",
    },
  ],
  projects: [
    {
      title: "HTW Berlin Projektarbeit",
      href: "",
      dates: "März 2023 - Juli 2023",
      active: false,
      description:
        "Entwicklung einer Webanwendung zur Verwaltung von Studienprojekten mit Java Spring Boot und React.",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL"
      ],
      links: [],
      image: "",
      video: ""
    },
    {
      title: "DKB Prozessdigitalisierung",
      href: "",
      dates: "Januar 2023 - April 2023",
      active: false,
      description:
        "Mitwirkung bei der Digitalisierung von Kreditprozessen mit Camunda und n8n.",
      technologies: [
        "Camunda",
        "n8n",
        "Signavio",
        "Jira"
      ],
      links: [],
      image: "",
      video: ""
    }
  ],
} as const;
