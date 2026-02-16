
export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface BranchCutoff {
  branch: string;
  estimatedRank: string;
  scoreRange: string;
}
