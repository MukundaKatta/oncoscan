'use client'
import { useStore } from '@/lib/store'
import { Crosshair } from 'lucide-react'
const priorityColors: Record<string, string> = { high: 'bg-red-500/20 text-red-300', medium: 'bg-amber-500/20 text-amber-300', low: 'bg-emerald-500/20 text-emerald-300' }
export default function ROIExtraction() {
  const { rois, slides } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Regions of Interest</h2>
      <div className="grid grid-cols-3 gap-4">
        {rois.map(roi => (
          <div key={roi.id} className="glass p-4 hover:bg-white/8 transition-all cursor-pointer">
            <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 flex items-center justify-center mb-3 relative">
              <Crosshair className="w-8 h-8 text-violet-300/30" />
              <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] ${priorityColors[roi.priority]}`}>{roi.priority}</span>
            </div>
            <h4 className="font-medium">{roi.name}</h4>
            <p className="text-xs text-white/40 font-mono mt-1">({roi.x}, {roi.y}) {roi.width}x{roi.height}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {roi.features.map(f => <span key={f} className="px-2 py-0.5 rounded text-[10px] bg-violet-500/10 text-violet-300">{f}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
