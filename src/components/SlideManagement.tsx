'use client'
import { useStore } from '@/lib/store'
import { Image, Upload } from 'lucide-react'
const statusColors: Record<string, string> = { uploaded: 'bg-gray-500/20 text-gray-300', analyzing: 'bg-amber-500/20 text-amber-300', analyzed: 'bg-blue-500/20 text-blue-300', reviewed: 'bg-emerald-500/20 text-emerald-300' }
export default function SlideManagement() {
  const { slides, detections } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Slide Management</h2>
        <button className="px-4 py-2 rounded-lg bg-violet-500/20 text-violet-300 text-sm flex items-center gap-1"><Upload className="w-4 h-4" /> Upload Slides</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(statusColors).map(s => (
          <div key={s} className="glass p-4"><p className="text-xs text-white/50 capitalize">{s}</p><p className="text-2xl font-bold text-violet-400">{slides.filter(sl => sl.status === s).length}</p></div>
        ))}
      </div>
      <div className="glass p-4">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-white/10">
            <th className="text-left py-2 px-3 text-white/50 text-xs">Case</th><th className="text-left py-2 px-3 text-white/50 text-xs">Patient</th>
            <th className="text-left py-2 px-3 text-white/50 text-xs">Cancer Type</th><th className="text-left py-2 px-3 text-white/50 text-xs">Organ</th>
            <th className="text-center py-2 px-3 text-white/50 text-xs">Stain</th><th className="text-center py-2 px-3 text-white/50 text-xs">Detections</th>
            <th className="text-center py-2 px-3 text-white/50 text-xs">Status</th>
          </tr></thead>
          <tbody>
            {slides.map(s => (
              <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 cursor-pointer">
                <td className="py-2 px-3 font-medium text-violet-300">{s.case_id}</td>
                <td className="py-2 px-3">{s.patient}</td>
                <td className="py-2 px-3 text-xs">{s.cancer_type}</td>
                <td className="py-2 px-3 text-xs">{s.organ}</td>
                <td className="py-2 px-3 text-center text-xs">{s.stain}</td>
                <td className="py-2 px-3 text-center">{detections.filter(d => d.slide_id === s.id).length}</td>
                <td className="py-2 px-3 text-center"><span className={`px-2 py-0.5 rounded-full text-[10px] ${statusColors[s.status]}`}>{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
