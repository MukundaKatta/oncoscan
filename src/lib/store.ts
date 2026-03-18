import { create } from 'zustand'
import type { Slide, AIDetection, GradingResult, ROI, ClinicalDecision, PeerReview } from './supabase'

type Tab = 'slides' | 'detection' | 'grading' | 'roi' | 'clinical' | 'peer'

interface OncoState {
  activeTab: Tab; setActiveTab: (t: Tab) => void
  slides: Slide[]; setSlides: (s: Slide[]) => void
  selectedSlide: Slide | null; setSelectedSlide: (s: Slide | null) => void
  detections: AIDetection[]; setDetections: (d: AIDetection[]) => void
  gradings: GradingResult[]; setGradings: (g: GradingResult[]) => void
  rois: ROI[]; setRois: (r: ROI[]) => void
  decisions: ClinicalDecision[]; setDecisions: (d: ClinicalDecision[]) => void
  reviews: PeerReview[]; setReviews: (r: PeerReview[]) => void
}

export const useStore = create<OncoState>((set) => ({
  activeTab: 'slides', setActiveTab: (activeTab) => set({ activeTab }),
  slides: [], setSlides: (slides) => set({ slides }),
  selectedSlide: null, setSelectedSlide: (selectedSlide) => set({ selectedSlide }),
  detections: [], setDetections: (detections) => set({ detections }),
  gradings: [], setGradings: (gradings) => set({ gradings }),
  rois: [], setRois: (rois) => set({ rois }),
  decisions: [], setDecisions: (decisions) => set({ decisions }),
  reviews: [], setReviews: (reviews) => set({ reviews }),
}))
