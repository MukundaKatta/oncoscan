# OncoScan

**AI-Powered Cancer Diagnosis Platform**

OncoScan is a digital pathology platform that leverages AI to assist oncologists with cancer detection, grading, and clinical decision support. Upload whole-slide images, run AI detection algorithms, extract regions of interest, and collaborate through peer review workflows.

## Features

- **Slide Management** -- Upload, organize, and browse whole-slide pathology images
- **AI Detection** -- Automated cancer cell detection and anomaly identification
- **Cancer Grading** -- AI-assisted tumor grading with confidence scores and heatmaps
- **ROI Extraction** -- Identify and extract regions of interest for detailed analysis
- **Clinical Decision Support** -- AI-generated treatment recommendations based on findings
- **Peer Review Workflow** -- Collaborative review system for pathologist consensus

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Backend:** Supabase
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd oncoscan
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   └── page.tsx               # Main application (tabbed interface)
├── components/
│   ├── SlideManagement.tsx     # Image upload & browsing
│   ├── AIDetectionView.tsx     # Cancer detection results
│   ├── CancerGrading.tsx       # Tumor grading dashboard
│   ├── ROIExtraction.tsx       # Region of interest tools
│   ├── ClinicalSupport.tsx     # Treatment recommendations
│   └── PeerReviewWorkflow.tsx  # Collaborative review
└── lib/
    ├── store.ts                # Zustand state management
    └── mock-data.ts            # Sample pathology data
```

## License

MIT
