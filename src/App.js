import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  RefreshCw,
  Cpu,
  Truck
} from 'lucide-react';

// --- 초기 설정 및 Mock 데이터 ---
const COMPANY_INFO = {
  name: "지비유모빌리티 (GBU Mobility)",
  status: "창업 7년차 (4월 17일 이후 7년 초과)",
  focus: "화물안전업무 플랫폼 / 온디바이스 AI"
};

const MOCK_GRANTS = [
  {
    id: 1,
    title: "🚀 [신사업/7년+] 스마트 물류 DX 기술 실증 사업",
    target: "물류 SW 기업 (업력 무관)",
    deadline: "2024-04-30",
    priority: "High",
    isSevenPlus: true,
    link: "#"
  },
  {
    id: 2,
    title: "📅 [7년 이내] 고성장 SW 기업 스케일업 지원",
    target: "SW 혁신기업 (업력 7년 이내)",
    deadline: "2024-05-15",
    priority: "Medium",
    isSevenPlus: false,
    link: "#"
  },
  {
    id: 3,
    title: "🚀 [신사업/7년+] 온디바이스 AI 특화 바우처",
    target: "AI 솔루션 개발 중견/중소기업",
    deadline: "2024-04-25",
    priority: "High",
    isSevenPlus: true,
    link: "#"
  }
];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [grants, setGrants] = useState(MOCK_GRANTS);
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [activeTab, setActiveTab] = useState('all');

  const simulateUpdate = () => {
    setLoading(true);
    // 실제 환경에서는 여기서 Python 백엔드 API를 호출합니다.
    setTimeout(() => {
      setAiAnalysis("지비유모빌리티의 7년 초과 시점을 고려할 때, '스마트 물류 DX 실증' 사업이 가장 유망합니다. 특히 온디바이스 AI 기술을 화물차 안전플랫폼에 결합한 형태로 제안할 것을 권장합니다.");
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    simulateUpdate();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mobile Header */}
      <header className="sticky top-0 z-10 bg-indigo-600 text-white p-4 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6" />
          <h1 className="font-bold text-lg leading-tight">GBU AI Agent</h1>
        </div>
        <button 
          onClick={simulateUpdate}
          className="p-2 hover:bg-indigo-500 rounded-full transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24 max-w-md mx-auto">
        
        {/* Company Info Card */}
        <section className="bg-white rounded-2xl p-4 shadow-sm mb-6 border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm text-slate-500 font-medium">현재 기업 상태</h2>
              <p className="font-bold text-slate-800">{COMPANY_INFO.status}</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            * 4월 17일 이후 '7년 초과' 맞춤형 필터링 활성화 중
          </p>
        </section>

        {/* AI Insight Section */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-6 relative overflow-hidden">
          <div className="absolute right-[-10px] top-[-10px] text-indigo-200">
            <Cpu size={80} opacity={0.3} />
          </div>
          <h3 className="flex items-center gap-2 text-indigo-800 font-bold mb-3">
            <TrendingUp className="w-5 h-5" />
            AI 수석 컨설턴트 분석
          </h3>
          {loading ? (
            <div className="space-y-2">
              <div className="h-4 bg-indigo-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-indigo-200 rounded animate-pulse w-full"></div>
            </div>
          ) : (
            <p className="text-indigo-900 text-sm leading-relaxed">
              {aiAnalysis}
            </p>
          )}
        </section>

        {/* Grant List Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">탐색된 신사업 공고</h3>
            <span className="text-xs font-semibold bg-slate-200 px-2 py-1 rounded-full text-slate-600">
              {grants.length}건 발견
            </span>
          </div>

          <div className="space-y-4">
            {grants.map((grant) => (
              <div 
                key={grant.id} 
                className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${grant.isSevenPlus ? 'border-l-emerald-500' : 'border-l-amber-500'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    grant.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {grant.priority} Priority
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    ~{grant.deadline}
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
                  {grant.title}
                </h4>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                  <span className="text-xs text-slate-500 truncate max-w-[180px]">
                    📍 {grant.target}
                  </span>
                  <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:underline">
                    상세보기 <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-around items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center gap-1 text-indigo-600">
          <Smartphone className="w-6 h-6" />
          <span className="text-[10px] font-bold">홈</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold">검색</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          <span className="text-[10px] font-bold">알림</span>
        </button>
      </nav>
    </div>
  );
};

export default App;