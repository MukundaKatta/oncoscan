'use client'
import { useStore } from '@/lib/store'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
export default function CancerGrading() {
  const { gradings, slides } = useStore()
  return (
    <div className="space-y-6 h-[calc(100vh-120px)] overflow-auto">
      <h2 className="text-lg font-bold">Cancer Grading Results</h2>
      {gradings.map(g => {
        const slide = slides.find(s => s.id === g.slide_id)
        const radarData = Object.entries(g.components).map(([key, val]) => ({ property: key.replace(/_/g, ' '), value: val * 25 }))
        return (
          <div key={g.id} className="glass p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">{slide?.cancer_type || 'Unknown'}</h3>
                <p className="text-xs text-white/40">{slide?.case_id} | {g.system} Grading System</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-violet-300">{g.grade}</p>
                <p className="text-xs text-white/40">Score: {g.score} | Confidence: {(g.confidence * 100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-white/50 mb-2">Component Scores</h4>
                {Object.entries(g.components).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-white/50 w-40 capitalize">{key.replace(/_/g, ' ')}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-violet-500 rounded-full" style={{ width: `${(val / 3) * 100}%` }} /></div>
                    <span className="text-sm font-bold text-violet-300">{val}/3</span>
                  </div>
                ))}
              </div>
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="property" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9 }} />
                    <PolarRadiusAxis tick={false} domain={[0, 100]} />
                    <Radar dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
