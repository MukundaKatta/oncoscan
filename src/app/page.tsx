'use client'

import { useEffect } from 'react'
import { useStore } from '@/lib/store'
import { mockSlides, mockDetections, mockGradings, mockROIs, mockDecisions, mockReviews } from '@/lib/mock-data'
import SlideManagement from '@/components/SlideManagement'
import AIDetectionView from '@/components/AIDetectionView'
import CancerGrading from '@/components/CancerGrading'
import ROIExtraction from '@/components/ROIExtraction'
import ClinicalSupport from '@/components/ClinicalSupport'
import PeerReviewWorkflow from '@/components/PeerReviewWorkflow'
import { Scan, Image, Cpu, BarChart3, Crosshair, Stethoscope, Users } from 'lucide-react'

const tabs = [
  { id: 'slides' as const, label: 'Slides', icon: Image },
  { id: 'detection' as const, label: 'AI Detection', icon: Cpu },
  { id: 'grading' as const, label: 'Grading', icon: BarChart3 },
  { id: 'roi' as const, label: 'ROI', icon: Crosshair },
  { id: 'clinical' as const, label: 'Clinical', icon: Stethoscope },
  { id: 'peer' as const, label: 'Peer Review', icon: Users },
]

export default function Home() {
  const { activeTab, setActiveTab, setSlides, setDetections, setGradings, setRois, setDecisions, setReviews } = useStore()

  useEffect(() => {
    setSlides(mockSlides); setDetections(mockDetections); setGradings(mockGradings)
    setRois(mockROIs); setDecisions(mockDecisions); setReviews(mockReviews)
  }, [setSlides, setDetections, setGradings, setRois, setDecisions, setReviews])

  const renderTab = () => {
    switch (activeTab) {
      case 'slides': return <SlideManagement />
      case 'detection': return <AIDetectionView />
      case 'grading': return <CancerGrading />
      case 'roi': return <ROIExtraction />
      case 'clinical': return <ClinicalSupport />
      case 'peer': return <PeerReviewWorkflow />
    }
  }

  return (
    <div className="min-h-screen">
      <header className="glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
            <Scan className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">OncoScan</h1>
            <p className="text-[10px] text-white/40">AI Cancer Diagnosis Platform</p>
          </div>
        </div>
        <nav className="flex gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === id ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : 'text-white/50 hover:bg-white/5'
              }`}>
              <Icon className="w-4 h-4" /><span className="hidden lg:inline">{label}</span>
            </button>
          ))}
        </nav>
      </header>
      <main className="p-6">{renderTab()}</main>
    </div>
  )
}
