import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export type Slide = { id: string; case_id: string; patient: string; cancer_type: string; organ: string; stain: string; magnification: string; status: 'uploaded' | 'analyzing' | 'analyzed' | 'reviewed'; created_at: string }
export type AIDetection = { id: string; slide_id: string; label: string; confidence: number; grade: string | null; location: { x: number; y: number; w: number; h: number }; classification: string; created_at: string }
export type GradingResult = { id: string; slide_id: string; system: string; grade: string; score: number; components: Record<string, number>; confidence: number; created_at: string }
export type ROI = { id: string; slide_id: string; name: string; x: number; y: number; width: number; height: number; features: string[]; priority: 'high' | 'medium' | 'low'; created_at: string }
export type ClinicalDecision = { id: string; slide_id: string; recommendation: string; confidence: number; evidence: string[]; urgency: 'routine' | 'expedited' | 'urgent'; created_at: string }
export type PeerReview = { id: string; slide_id: string; reviewer: string; agrees_with_ai: boolean; grade_override: string | null; comments: string; status: 'pending' | 'completed'; created_at: string }
