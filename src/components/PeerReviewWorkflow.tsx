'use client'
import { useStore } from '@/lib/store'
import { Users, ThumbsUp, ThumbsDown, Clock, CheckCircle } from 'lucide-react'
export default function PeerReviewWorkflow() {
  const { reviews, slides } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Peer Review Workflow</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="glass p-4"><p className="text-xs text-white/50">Total Reviews</p><p className="text-2xl font-bold text-violet-400">{reviews.length}</p></div>
        <div className="glass p-4"><p className="text-xs text-white/50">AI Agreement Rate</p><p className="text-2xl font-bold text-emerald-400">{((reviews.filter(r => r.agrees_with_ai).length / reviews.length) * 100).toFixed(0)}%</p></div>
        <div className="glass p-4"><p className="text-xs text-white/50">Pending</p><p className="text-2xl font-bold text-amber-400">{reviews.filter(r => r.status === 'pending').length}</p></div>
      </div>
      {reviews.map(r => {
        const slide = slides.find(s => s.id === r.slide_id)
        return (
          <div key={r.id} className="glass p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                <div><p className="font-medium">{r.reviewer}</p><p className="text-xs text-white/40">{slide?.case_id} - {slide?.cancer_type}</p></div>
              </div>
              <div className="flex items-center gap-2">
                {r.agrees_with_ai ? <ThumbsUp className="w-4 h-4 text-emerald-400" /> : <ThumbsDown className="w-4 h-4 text-red-400" />}
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${r.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                  {r.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-2">{r.comments}</p>
            {r.grade_override && <p className="text-sm text-amber-300">Grade Override: {r.grade_override}</p>}
          </div>
        )
      })}
    </div>
  )
}
