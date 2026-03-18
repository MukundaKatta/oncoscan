import type { Slide, AIDetection, GradingResult, ROI, ClinicalDecision, PeerReview } from './supabase'

export const mockSlides: Slide[] = [
  { id: '1', case_id: 'C001', patient: 'Patient A', cancer_type: 'Breast Carcinoma', organ: 'Breast', stain: 'H&E', magnification: '40x', status: 'analyzed', created_at: '2026-02-01T10:00:00Z' },
  { id: '2', case_id: 'C002', patient: 'Patient B', cancer_type: 'Lung Adenocarcinoma', organ: 'Lung', stain: 'H&E', magnification: '20x', status: 'analyzed', created_at: '2026-02-05T10:00:00Z' },
  { id: '3', case_id: 'C003', patient: 'Patient C', cancer_type: 'Prostate Adenocarcinoma', organ: 'Prostate', stain: 'H&E', magnification: '40x', status: 'reviewing', created_at: '2026-02-10T10:00:00Z' },
  { id: '4', case_id: 'C004', patient: 'Patient D', cancer_type: 'Colorectal Carcinoma', organ: 'Colon', stain: 'H&E', magnification: '20x', status: 'uploaded', created_at: '2026-02-15T10:00:00Z' },
]

export const mockDetections: AIDetection[] = [
  { id: '1', slide_id: '1', label: 'Invasive Ductal Carcinoma', confidence: 0.96, grade: 'Grade 2', location: { x: 120, y: 80, w: 200, h: 150 }, classification: 'malignant', created_at: '2026-02-01T10:00:00Z' },
  { id: '2', slide_id: '1', label: 'DCIS', confidence: 0.89, grade: null, location: { x: 400, y: 200, w: 120, h: 100 }, classification: 'pre-malignant', created_at: '2026-02-01T10:00:00Z' },
  { id: '3', slide_id: '1', label: 'Lymphovascular Invasion', confidence: 0.78, grade: null, location: { x: 300, y: 300, w: 60, h: 50 }, classification: 'feature', created_at: '2026-02-01T10:00:00Z' },
  { id: '4', slide_id: '2', label: 'Adenocarcinoma', confidence: 0.93, grade: 'Moderately Diff.', location: { x: 150, y: 100, w: 250, h: 200 }, classification: 'malignant', created_at: '2026-02-05T10:00:00Z' },
  { id: '5', slide_id: '3', label: 'Gleason Pattern 4', confidence: 0.88, grade: 'Gleason 4+3=7', location: { x: 200, y: 150, w: 180, h: 160 }, classification: 'malignant', created_at: '2026-02-10T10:00:00Z' },
]

export const mockGradings: GradingResult[] = [
  { id: '1', slide_id: '1', system: 'Nottingham', grade: 'Grade 2 (Moderately Differentiated)', score: 6, components: { tubule_formation: 2, nuclear_pleomorphism: 2, mitotic_count: 2 }, confidence: 0.92, created_at: '2026-02-01T10:00:00Z' },
  { id: '2', slide_id: '2', system: 'WHO Lung', grade: 'Moderately Differentiated', score: 2, components: { architecture: 2, cytology: 1 }, confidence: 0.88, created_at: '2026-02-05T10:00:00Z' },
  { id: '3', slide_id: '3', system: 'Gleason', grade: 'Gleason 4+3=7 (Grade Group 3)', score: 7, components: { primary_pattern: 4, secondary_pattern: 3 }, confidence: 0.85, created_at: '2026-02-10T10:00:00Z' },
]

export const mockROIs: ROI[] = [
  { id: '1', slide_id: '1', name: 'Tumor Core', x: 100, y: 60, width: 240, height: 180, features: ['High cellularity', 'Necrosis present', 'Mitotic figures'], priority: 'high', created_at: '2026-02-01T10:00:00Z' },
  { id: '2', slide_id: '1', name: 'Invasive Front', x: 350, y: 200, width: 150, height: 120, features: ['Infiltrative border', 'Stromal reaction'], priority: 'high', created_at: '2026-02-01T10:00:00Z' },
  { id: '3', slide_id: '1', name: 'Normal Margin', x: 550, y: 100, width: 100, height: 100, features: ['Normal ducts', 'No atypia'], priority: 'low', created_at: '2026-02-01T10:00:00Z' },
]

export const mockDecisions: ClinicalDecision[] = [
  { id: '1', slide_id: '1', recommendation: 'Recommend ER/PR/HER2 testing. Consider Oncotype DX for treatment planning.', confidence: 0.94, evidence: ['Grade 2 IDC confirmed', 'LVI positive', 'Margin status needed'], urgency: 'expedited', created_at: '2026-02-01T10:00:00Z' },
  { id: '2', slide_id: '2', recommendation: 'Recommend PD-L1 testing and molecular profiling for targeted therapy assessment.', confidence: 0.90, evidence: ['Adenocarcinoma confirmed', 'Moderate differentiation'], urgency: 'routine', created_at: '2026-02-05T10:00:00Z' },
  { id: '3', slide_id: '3', recommendation: 'Consider active surveillance vs treatment. Recommend MRI for staging.', confidence: 0.85, evidence: ['Gleason 4+3=7', 'Grade Group 3'], urgency: 'expedited', created_at: '2026-02-10T10:00:00Z' },
]

export const mockReviews: PeerReview[] = [
  { id: '1', slide_id: '1', reviewer: 'Dr. Williams', agrees_with_ai: true, grade_override: null, comments: 'Concur with AI grading. Clear Grade 2 IDC. LVI confirmed.', status: 'completed', created_at: '2026-02-02T10:00:00Z' },
  { id: '2', slide_id: '2', reviewer: 'Dr. Garcia', agrees_with_ai: true, grade_override: null, comments: 'Agree with adenocarcinoma classification. Well-characterized.', status: 'completed', created_at: '2026-02-06T10:00:00Z' },
  { id: '3', slide_id: '3', reviewer: 'Dr. Kim', agrees_with_ai: false, grade_override: 'Gleason 3+4=7', comments: 'I would classify primary pattern as 3 rather than 4. Needs discussion.', status: 'pending', created_at: '2026-02-11T10:00:00Z' },
]
