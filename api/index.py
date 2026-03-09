from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import random

app = FastAPI()

# 데이터 구조 정의
class Grant(BaseModel):
    title: str
    target: str
    deadline: str
    priority: str
    isSevenPlus: bool

class GrantResponse(BaseModel):
    grants: List[Grant]
    analysis: str

@app.get("/api/grants")
async def get_grants():
    # 실제 환경에서는 여기서 grant_agent_v2.py의 크롤링 로직을 실행합니다.
    # 현재는 구조 확인을 위해 실시간 데이터를 흉내내는 로직을 넣었습니다.
    
    real_time_grants = [
        {
            "title": "🚀 [실시간] 2024 스마트 물류 DX 기술 실증 지원사업",
            "target": "물류/IT 중소기업",
            "deadline": "2024-05-10",
            "priority": "High",
            "isSevenPlus": True
        },
        {
            "title": "💡 온디바이스 AI 특화 바우처 지원 (추가 공고)",
            "target": "AI 솔루션 개발사",
            "deadline": "2024-05-15",
            "priority": "High",
            "isSevenPlus": True
        }
    ]
    
    analysis_results = [
        "현재 지비유모빌리티의 업력을 고려할 때, 물류 DX 사업의 '실증' 분야 참여가 가장 적합합니다.",
        "오늘 업데이트된 온디바이스 AI 바우처 사업은 화물차 안전플랫폼 고도화에 큰 도움이 될 것으로 분석됩니다."
    ]
    
    return {
        "grants": real_time_grants,
        "analysis": random.choice(analysis_results)
    }