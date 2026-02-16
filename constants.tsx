
import { FAQItem, StatItem, BranchCutoff } from './types.ts';

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Is KIITEE mandatory for admission to B.Tech at KIIT?",
    answer: "Yes, KIITEE (KIIT Entrance Examination) is the primary gateway for B.Tech admissions. However, the university also considers JEE Main scores for specific categories and special circumstances. It is highly recommended to appear for KIITEE as most scholarships are linked to KIITEE ranks."
  },
  {
    question: "Can I get KIIT through JEE Main scores?",
    answer: "Yes, KIIT reserves a percentage of seats for JEE Main qualifiers. However, the competition is significantly higher, and the fee structure or scholarship benefits might differ from those admitted via KIITEE."
  },
  {
    question: "What rank is required for CSE in KIITEE 2026?",
    answer: "Historically, Computer Science & Engineering (CSE) seats at KIIT fill up within the top 2,000 to 5,000 ranks. For specialized branches like AI/ML or Data Science, ranks up to 7,000-8,000 are often acceptable in later rounds."
  },
  {
    question: "Is KIIT worth the fees for a B.Tech degree?",
    answer: "With its NAAC A++ accreditation, 100% placement track record for eligible students, and a massive 25,000+ student ecosystem, KIIT offers a high ROI. The infrastructure, global exchange programs, and industry-aligned curriculum justify the investment for serious engineering aspirants."
  },
  {
    question: "Does KIIT provide good placements for core branches like Mechanical or Civil?",
    answer: "While CSE and IT see the highest packages, KIIT maintains a dedicated training and placement cell for core branches. Companies like L&T, Tata Steel, and JSW are regular recruiters. Core students often get placed in high-end consulting or IT firms as well."
  }
];

export const PLACEMENT_STATS: StatItem[] = [
  { label: "Highest Package", value: "₹63 LPA", subtext: "International/Domestic Peak" },
  { label: "Average CSE Package", value: "₹12.5 LPA", subtext: "For Top 20% Students" },
  { label: "Overall Average", value: "₹8.2 LPA", subtext: "Across All B.Tech Branches" },
  { label: "Placement %", value: "95%+", subtext: "Eligible Students 2024-25" }
];

export const CUTOFF_DATA: BranchCutoff[] = [
  { branch: "Computer Science & Engineering (CSE)", estimatedRank: "Top 4,500", scoreRange: "120+ / 160" },
  { branch: "CS - AI & Machine Learning", estimatedRank: "Top 6,000", scoreRange: "115+ / 160" },
  { branch: "Information Technology (IT)", estimatedRank: "Top 8,500", scoreRange: "105+ / 160" },
  { branch: "Electronics & Communication (ETC)", estimatedRank: "Top 12,000", scoreRange: "95+ / 160" },
  { branch: "Core Branches (Mech/Civil/EE)", estimatedRank: "Top 25,000+", scoreRange: "75+ / 160" }
];
