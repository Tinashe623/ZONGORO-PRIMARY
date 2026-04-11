// Shared type definitions for the application

// Gallery types
export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export type GalleryCategory = 
  | 'School Activities' 
  | 'Church Events' 
  | 'Sports' 
  | 'Projects' 
  | 'Activities' 
  | 'Achievements';

// Assessment data types
export interface EnrollmentData {
  year: number;
  male: number;
  female: number;
  total: number;
}

export interface PassRateData {
  year: number;
  rate: number;
}

// Staff types
export interface StaffMember {
  id: string;
  name: string;
  title: string;
  specialisation: string;
  image: string;
  qualifications: string;
  yearsAtSchool: number;
  bio: string;
  category: 'leadership' | 'teaching' | 'support';
}

// Boarding types
export interface BoardingFacility {
  name: string;
  description: string;
  icon: string;
}

export interface DailyScheduleItem {
  time: string;
  activity: string;
}

export interface BoardingRule {
  category: string;
  rules: string[];
}

// Academics types
export interface AcademicCard {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

// Admissions types
export interface AdmissionRequirement {
  grade: string;
  ageRange: string;
  requirements: string[];
}

export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
}

export interface RequiredDocument {
  name: string;
  description: string;
}

export interface FeeItem {
  item: string;
  amount: string;
}

// Results types
export interface GradeResult {
  year: number;
  passRate: number;
  students: number;
}

// Testimonials types
export interface Testimonial {
  author: string;
  role: string;
  quote: string;
}

// Activities types
export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

// Announcements types
export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

// Navigation types
export interface DropdownItem {
  name: string;
  to: string;
}

export interface DropdownGroup {
  name: string;
  items: DropdownItem[];
}

// Common component props
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface WithIcon {
  icon?: React.ComponentType;
}

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
}