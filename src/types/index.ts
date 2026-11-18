export type MediaType = 'audio' | 'written' | 'both';

export type SermonTopic = 
  | 'Faith & Grace'
  | 'Spiritual Growth'
  | 'Prayer & Fasting'
  | 'Leadership & Purpose'
  | 'Family & Marriage'
  | 'Financial Stewardship'
  | 'Kingdom Revival';

export interface SermonMessage {
  id: string;
  title: string;
  slug: string;
  series: string;
  preacher: string;
  datePreached: string; // YYYY-MM-DD
  mediaType: MediaType;
  scriptureReference: string;
  durationMinutes: number;
  audioUrl?: string;
  audioFileSizeMb?: number; // E.g. 14.2 MB (important for Nigerian mobile data users)
  youtubeVideoId?: string; // YouTube video ID from @bishopndubuisiobi6348
  youtubeUrl?: string;
  videoThumbnailUrl?: string;
  summary: string;
  fullContent: string; // Full written sermon transcript or study article
  topics: SermonTopic[];
  keyPoints: string[];
  featured?: boolean;
  playCount?: number;
  downloadCount?: number;
}

export interface YouTubeVideoItem {
  id: string;
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  publishedText?: string;
  viewsText?: string;
  youtubeUrl: string;
  series?: string;
}

export type BookingType = 'counseling' | 'invitation';

export type CounselingCategory = 
  | 'Spiritual Guidance & Deliverance'
  | 'Pre-Marital Counseling'
  | 'Marriage & Family Consultation'
  | 'Career & Purpose Direction'
  | 'Bereavement & Pastoral Support'
  | 'General Pastoral Discussion';

export type MeetingMode = 'in_person' | 'whatsapp_call' | 'phone_call' | 'zoom';

export type BookingStatus = 'pending' | 'confirmed' | 'rescheduled' | 'declined' | 'completed';

export interface CounselingRequest {
  id: string;
  referenceId: string; // e.g. "PST-2026-4491"
  type: 'counseling';
  fullName: string;
  phone: string;
  email: string;
  category: CounselingCategory;
  meetingMode: MeetingMode;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "10:00 AM - 10:45 AM"
  notes: string;
  status: BookingStatus;
  createdAt: string;
  adminNotes?: string;
  clashDetected?: boolean;
}

export interface SpeakingInvitationRequest {
  id: string;
  referenceId: string; // e.g. "INV-2026-8812"
  type: 'invitation';
  organizationName: string;
  contactPerson: string;
  roleInOrg: string;
  phone: string;
  email: string;
  eventTheme: string;
  eventType: 'Conference' | 'Revival Service' | 'Camp Meeting' | 'Leadership Summit' | 'Campus Fellowship' | 'Anniversary';
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "Morning Session (9:00 AM)" or "Evening (5:00 PM)"
  venueCityState: string;
  expectedAttendance: string; // e.g. "300 - 500 people"
  honorariumAndLogisticsProvided: boolean;
  notes: string;
  status: BookingStatus;
  createdAt: string;
  adminNotes?: string;
  clashDetected?: boolean;
}

export type BookingRecord = CounselingRequest | SpeakingInvitationRequest;

export interface ItineraryItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  time: string;
  location: string;
  type: 'Sunday Service' | 'Midweek Service' | 'Outreach & Speaking' | 'Counseling Hours' | 'Private Retreat' | 'Pastoral Blocked';
  isPublic: boolean;
  description?: string;
}

export interface PastorProfile {
  name: string;
  title: string;
  churchName: string;
  diocese: string;
  cathedral: string;
  location: string;
  photoUrl: string;
  spouse: string;
  episcopacyDate: string;
  enthronementDate: string;
  bioSummary: string;
  fullBio: string[];
  vision: string;
  phone: string;
  whatsappNumber: string;
  officeAddress: string;
  counselingDays: string;
  socials: {
    youtube?: string;
    telegram?: string;
    facebook?: string;
    podcast?: string;
    instagram?: string;
  };
}

