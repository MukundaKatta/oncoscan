'use client'
import { useStore } from '@/lib/store'
import { Cpu, AlertTriangle } from 'lucide-react'
export default function AIDetectionView() {
  const { detections, slides, selectedSlide, setSelectedSlide } = useStore()
  const active = selectedSlide || slides[0]
  const slideDetections = active ? detections.filter(d => d.slide_id === active.id) : []
  const classColors: Record<string, string> = { malignant: 'bg-red-500/20 text-red-300', 'pre-malignant': 'bg-orange-500/20 text-orange-300', feature: 'bg-blue-500/20 text-blue-300' }
  return (
    <div className="grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
      <div className="glass p-4 overflow-auto">
        <h3 className="text-sm font-semibold text-white/70 mb-3">SLIDES</h3>
        {slides.map(s => (
          <button key={s.id} onClick={() => setSelectedSlide(s)} className={`w-full text-left p-3 rounded-xl mb-2 ${active?.id === s.id ? 'bg-violet-500/20 border border-violet-500/30' : 'hover:bg-white/5'}`}>
            <p className="font-medium text-sm">{s.case_id} - {s.cancer_type}</p>
            <p className="text-xs text-white/40">{detections.filter(d => d.slide_id === s.id).length} detections</p>
          </button>
        ))}
      </div>
      <div className="col-span-2 space-y-4 overflow-auto">
        <h2 className="text-lg font-bold">AI Detections - {active?.case_id}</h2>
        {slideDetections.map(d => (
          <div key={d.id} className="glass p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-violet-400" />
                <p className="font-bold">{d.label}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${classColors[d.classification] || 'bg-gray-500/20 text-gray-300'}`}>{d.classification}</span>
                <span className={`text-sm font-bold ${d.confidence >= 0.9 ? 'text-emerald-400' : d.confidence >= 0.8 ? 'text-amber-400' : 'text-red-400'}`}>{(d.confidence * 100).toFixed(0)}%</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2 rounded-lg bg-white/5"><p className="text-[10px] text-white/40">Grade</p><p className="text-sm font-medium">{d.grade || 'N/A'}</p></div>
              <div className="p-2 rounded-lg bg-white/5"><p className="text-[10px] text-white/40">Location</p><p className="text-xs font-mono">({d.location.x}, {d.location.y})</p></div>
              <div className="p-2 rounded-lg bg-white/5"><p className="text-[10px] text-white/40">Size</p><p className="text-xs font-mono">{d.location.w}x{d.location.h}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
