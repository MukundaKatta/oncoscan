'use client'
import { useStore } from '@/lib/store'
import { Stethoscope, AlertTriangle, CheckCircle } from 'lucide-react'
const urgencyColors: Record<string, string> = { routine: 'bg-blue-500/20 text-blue-300', expedited: 'bg-amber-500/20 text-amber-300', urgent: 'bg-red-500/20 text-red-300' }
export default function ClinicalSupport() {
  const { decisions, slides } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Clinical Decision Support</h2>
      {decisions.map(d => {
        const slide = slides.find(s => s.id === d.slide_id)
        return (
          <div key={d.id} className="glass p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2"><Stethoscope className="w-5 h-5 text-violet-400" /><div><p className="font-bold">{slide?.case_id} - {slide?.cancer_type}</p><p className="text-xs text-white/40">{slide?.patient}</p></div></div>
              <span className={`px-3 py-1 rounded-full text-xs ${urgencyColors[d.urgency]}`}>{d.urgency}</span>
            </div>
            <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 mb-4">
              <p className="text-sm font-medium">{d.recommendation}</p>
              <p className="text-xs text-white/40 mt-1">AI Confidence: {(d.confidence * 100).toFixed(0)}%</p>
            </div>
            <div>
              <p className="text-xs text-white/50 mb-2">Supporting Evidence</p>
              <div className="space-y-1">{d.evidence.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-xs"><CheckCircle className="w-3 h-3 text-emerald-400" /><span className="text-white/70">{e}</span></div>
              ))}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
