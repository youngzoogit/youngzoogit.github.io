export const site = {
  name: 'HEO YEONGJU',
  role: 'Manufacturing IT · Backend · Applied AI',
  tagline: '제조 현장을 이해하고, 시스템과 AI를 연결합니다.',
  email: 'heoy9445@gmail.com',
  github: 'https://github.com/youngzoogit',
  githubTeam: 'https://github.com/rhantj',
}

export const navLinks = [
  { label: '홈', href: '#home' },
  { label: '실무 경력', href: '#work-experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '기술', href: '#skills' },
  { label: '아키텍처', href: '#architecture' },
  { label: '경력', href: '#experience' },
  { label: 'GitHub', href: '#github' },
]

export const floatingTech = [
  'C#',
  'WinForms',
  'Spring Boot',
  'FastAPI',
  'React',
  'Oracle',
  'PostgreSQL',
  'Docker',
  'YOLO',
  'MES/WMS',
]

export type Screenshot = {
  title: string
  category: string
  description: string
  image: string
}

export type WorkExperienceItem = {
  title: string
  type?: string
  company?: string
  period: string
  target?: string
  tech?: string[]
  problem?: string
  role: string[]
  result?: string
}

export const workExperience: WorkExperienceItem[] = [
  {
    title: 'MES·WMS 및 제조 업무 시스템 개발·유지보수',
    company: '(주)아이디정보시스템',
    period: '2022.03 – 2024.10',
    tech: ['C#', 'WinForms', 'DevExpress', 'Oracle', 'MSSQL', 'MariaDB'],
    role: [
      'C# WinForms와 DevExpress 기반 업무 화면 개발',
      'Oracle, MSSQL, MariaDB 기반 데이터 조회 및 처리',
      '생산·재고·물류 관련 업무 시스템 유지보수',
      '현장 사용자 요청 분석 및 기능 개선',
      '제조 현장에서 발생하는 데이터와 업무 흐름을 시스템에 반영',
    ],
  },
  {
    title: 'HR 시스템 도입 및 데이터 인터페이스 지원',
    company: '주식회사 모베이스시스템',
    period: '2025.12 – 2026.02',
    role: [
      'ERM(QMS), To Do List 프로그램 유지보수',
      'HR 시스템 도입을 위한 인프라 및 수행사 관리',
      '기존 시스템과 HR 시스템 간 데이터 인터페이스 지원',
      '프로젝트 일정과 관계자 간 업무 조율',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  tagline: string
  period: string
  type: '팀' | '개인'
  memberCount?: number
  category: string
  accent: string
  features: string[]
  tech: string[]
  overview: string
  problem: string
  solution: string
  myRole: string[]
  results: string
  process: string[]
  challenges: string[]
  lessons: string[]
  links: { live?: string; github?: string; caseStudy?: boolean }
  gallery: number
  screenshots?: Screenshot[]
  video?: string
}

export const projects: Project[] = [
  {
    slug: 'workflow-ai',
    name: 'WorkFlow AI',
    tagline: '회의록과 업무 흐름을 연결하는 AI 협업 서비스.',
    period: '2026.07 – 2026.08',
    type: '팀',
    memberCount: 7,
    category: 'AI 플랫폼',
    accent: '대표작',
    features: [
      '회의록 AI 분석 (Whisper STT + LLM 요약)',
      '카테고리 기반 업무 칸반 보드',
      '지연 위험도 예측 (LightGBM)',
      'RAG + LangGraph AI 어시스턴트',
      '산출물 초안 자동 생성',
      '기여도 분석 (심사자 전용)',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Spring Boot 3.5',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'LangGraph',
      'LightGBM',
      'Docker',
      'GitHub Actions',
      'OCI',
    ],
    overview:
      '회의록에서 실행 업무를 추출하고, 칸반보드·완료 승인·알림·평가 기능으로 프로젝트 업무를 관리하는 7인 팀의 협업 서비스입니다. 회의록을 올리면 요약·결정사항·To-Do가 자동 생성되어 업무 보드에 반영되고, 그 기록이 산출물 초안과 팀원별 기여도 근거로 이어집니다. 팀장·팀원·심사자 세 가지 권한으로 나뉘며, 실제 팀 캡스톤·해커톤에서 쓸 수 있도록 설계했습니다.',
    problem:
      '팀 프로젝트에서 실제로 시간을 잡아먹는 건 개발이 아니라 기록과 기록 사이의 단절입니다. 회의에서 정한 일이 업무 보드로 넘어가지 않아 "누가 뭐 하기로 했더라"가 반복되고, 진행 상황을 한눈에 보기 어렵고, 발표자료·보고서는 제출 직전에 몰아서 쓰게 되고, 교수·심사자는 팀원별 실제 기여를 판단할 근거가 없습니다.',
    solution:
      'React(Vite, nginx)가 Spring Boot에 요청하고, 인증·RBAC·업무/회의록/산출물 도메인과 트랜잭션은 Spring Boot가 맡습니다. LLM·RAG·ML 추론이 필요한 구간만 내부 API 키로 FastAPI를 호출해 분리했습니다. FastAPI는 PostgreSQL(pgvector)에 업무·회의록·산출물 임베딩을 적재해 LangGraph 기반 RAG 어시스턴트가 출처를 붙여 답하도록 하고, LightGBM으로 업무 지연 위험도와 팀원별 업무 편중을 점수화합니다. 회의록은 faster-whisper로 음성을 텍스트로 바꾼 뒤 LLM(Ollama 로컬 / Hugging Face Inference 선택형)으로 구조화합니다.',
    myRole: [
      '업무 보드 동시성 처리 및 알림 기능 구현',
      '완료 승인 워크플로우 정합성 개선',
      '관리자(심사자 승인) 화면 개발',
      'S3/OCI Object Storage 연동',
      'XSS·경로 조작 등 보안 이슈 대응 및 코드 리뷰 반영',
    ],
    results:
      'GitHub Actions로 백엔드/프론트 테스트와 마이그레이션 가드를 통과해야 배포되는 CI/CD 파이프라인을 구축했고, 라이브 데모를 운영 중입니다. 아래 기능들은 7인 팀 전체가 함께 만든 프로젝트 전체 기능이며, 본인이 직접 담당한 영역은 위 "본인 담당" 항목입니다.',
    process: [
      '5개 화면(대시보드/보드/회의록/어시스턴트/산출물/기여도)의 도메인 모델과 권한(팀장·팀원·심사자)을 먼저 설계.',
      'Spring Boot로 인증·RBAC·업무/회의록 CRUD 코어를 구축하고 Flyway로 스키마 버전 관리.',
      'FastAPI AI 서비스를 분리해 Whisper STT, 회의록 구조화, RAG 임베딩·검색을 담당하도록 구성.',
      'LangGraph로 단순 질의응답과 "업무 만들어줘" 같은 실행형 커맨드를 분기하고, 실행형은 사용자 확인(interrupt) 후에만 반영되도록 설계.',
      'LightGBM으로 지연 위험도·업무 편중 모델을 학습해 대시보드에 연결.',
      'Docker Compose로 전 서비스를 묶고 GitHub Actions로 백엔드/프론트 테스트·마이그레이션 가드·OCI 배포를 자동화.',
    ],
    challenges: [
      '"230번 업무 어떻게 됐어?" 같은 자연어 참조를 RAG가 못 찾는 문제 — 원인은 색인 본문에 업무 id가 안 들어가는 것이었고, 본문 텍스트 매칭 대신 source_id로 직접 조회하도록 바꿔 해결.',
      '브랜드명(과거 프로젝트명) 검사가 정규식으로 앞뒤 하이픈을 모두 걸러 `TASK-01` 같은 정상 업무 코드까지 오탐하거나, 반대로 새로 추가된 파일이 빌드 시점 검사망을 빠져나가는 문제 — import.meta.glob으로 파일 목록을 매번 다시 읽게 해 해결.',
      'Spring(트랜잭션·RBAC)과 FastAPI(LLM/RAG/ML) 두 런타임 사이의 책임 경계를 내부 API 키 인증으로 명확히 나눠 결합도를 낮춤.',
    ],
    lessons: [
      '깨진 기능의 진짜 원인은 대부분 한 군데다 — 증상이 세 갈래로 보여도 뿌리를 하나로 좁혀서 고치면 재발하지 않는다.',
      'CI가 통과했다고 안전한 게 아니다 — 브랜치를 딴 시점과 머지 시점 사이에 생긴 파일은 그 브랜치의 어떤 검증도 통과하지 않는다.',
      'LLM 실행형 커맨드는 반드시 사용자 확인 단계를 거치게 해야 AI 어시스턴트를 신뢰하고 쓸 수 있다.',
    ],
    links: { live: 'https://t3-workflow-ai.site', github: 'https://github.com/rhantj/work-flow', caseStudy: true },
    gallery: 6,
    screenshots: [
      {
        title: '대시보드',
        category: '대시보드',
        description: '진행률, 마감 임박 업무, 팀원별 업무량, 지연 위험도 예측을 한 화면에 모은 프로젝트 대시보드.',
        image: '/screenshots/workflow-ai/01-dashboard.jpg',
      },
      {
        title: '업무 보드',
        category: '칸반 보드',
        description: '할 일 · 진행 중 · 보류/블로커 · 완료 4단계 칸반. 카테고리 우선으로 담당자·마감일을 관리.',
        image: '/screenshots/workflow-ai/02-board.jpg',
      },
      {
        title: '회의록 AI 분석',
        category: '회의록 AI',
        description: '문서·음성·영상을 올리면 Whisper STT와 LLM으로 요약·결정사항·To-Do를 구조화.',
        image: '/screenshots/workflow-ai/03-meeting-ai.jpg',
      },
      {
        title: '산출물 생성',
        category: '산출물',
        description: '회의록·업무 데이터를 근거로 발표자료·보고서·README 초안을 조건 지정해 생성.',
        image: '/screenshots/workflow-ai/04-deliverables.jpg',
      },
      {
        title: 'AI 어시스턴트',
        category: 'RAG 어시스턴트',
        description: 'LangGraph 기반 RAG 어시스턴트가 출처를 붙여 답하고, 실행형 커맨드는 사용자 확인 후 반영.',
        image: '/screenshots/workflow-ai/05-ai-assistant.jpg',
      },
      {
        title: '기여도 분석',
        category: '기여도',
        description: '업무 수행·회의 참여·업무 편중·GitHub 활동을 집계해 팀원별 기여 근거와 점수를 제공.',
        image: '/screenshots/workflow-ai/06-contribution.jpg',
      },
    ],
  },
  {
    slug: 'battery-defect-inspection',
    name: 'Battery Defect Classification & Detection',
    tagline: '배터리 결함 이미지 데이터로 분류·탐지 모델을 실험하고 성능을 비교한 딥러닝 프로젝트.',
    period: '2026.06',
    type: '개인',
    category: '컴퓨터 비전',
    accent: '딥러닝',
    features: [
      'Custom CNN / ResNet50 / EfficientNetB0 전이학습 비교',
      'YOLO11 기반 결함(파손·오염) 위치 탐지',
      'Grad-CAM 시각적 근거 설명',
      'Streamlit 다크 HMI 실시간 검사 대시보드',
    ],
    tech: ['TensorFlow', 'Keras', 'PyTorch', 'Ultralytics YOLO11', 'OpenCV', 'Streamlit'],
    overview:
      '배터리 결함 이미지 데이터를 활용해 EfficientNetB0 기반 이미지 분류와 YOLO 기반 객체 탐지 모델을 실험하고, 모델별 성능과 결함 판별 가능성을 비교한 딥러닝 프로젝트입니다. 정상/불량 이진 분류 모델 3종(Custom CNN, ResNet50, EfficientNetB0)을 전이학습으로 비교하고, YOLO11로 결함의 위치까지 찾아내는 실험을 진행했습니다. 실제 제조 라인에 배포된 시스템이 아니라, 모델 개발과 성능 검증까지의 프로젝트입니다.',
    problem:
      '제조 라인에서 배터리 외관 불량(파손·오염)을 사람이 육안으로 검사하면 속도와 일관성에 한계가 있습니다. 단순 정상/불량 분류만으로는 "어디가 불량인지"를 알 수 없어 실제 공정 개선에 활용하기 어렵다는 문제의식에서 출발했습니다.',
    solution:
      'ImageNet 사전학습 ResNet50과 EfficientNetB0을 2단계(헤드만 학습 → 상위 레이어 미세조정) 전이학습으로 훈련하고, 처음부터 학습한 Custom CNN과 성능을 비교했습니다. 분류 정확도가 가장 높았던 EfficientNetB0(검증 정확도 98.9%)을 최종 분류 모델로 선정하고, 결함의 위치까지 확인하기 위해 YOLO11n으로 별도의 객체 탐지 모델을 학습했습니다. tf.data 파이프라인으로 이미지를 배치 단위로 읽어 RAM 부족 없이 학습을 진행했습니다.',
    myRole: [
      '데이터 파이프라인 구성부터 Custom CNN/ResNet50/EfficientNetB0 학습',
      'YOLO11 결함 위치 탐지 모델 학습 및 검증',
      'Grad-CAM 시각화, Streamlit 대시보드 구현까지 1인 프로젝트로 수행',
    ],
    results:
      'EfficientNetB0 분류 모델 검증 정확도 98.9%, ResNet50 98.45%를 확인했고, YOLO11n 결함 위치 탐지는 mAP@0.5 22.99%로 검증했습니다(GitHub 저장소 검증 리포트 기준). 분류와 달리 위치까지 맞춰야 하는 객체 탐지의 난이도가 훨씬 높다는 점을 확인했습니다.',
    process: [
      'battery_subset_binary_train10000 데이터셋(train 7,982장 / valid 1,997장)을 tf.data 파이프라인으로 구성.',
      'Custom CNN을 처음부터 학습해 베이스라인 성능 확보.',
      'ResNet50을 1단계(분류기만 학습) → 2단계(상위 레이어 미세조정) 전이학습으로 훈련, 검증 정확도 98.45% 달성.',
      'EfficientNetB0을 동일한 2단계 전략으로 훈련, 검증 정확도 98.9%로 최종 분류 모델로 선정.',
      'YOLO11n으로 파손(Damaged)·오염(Pollution) 결함의 바운딩 박스 탐지 모델을 별도 학습·검증(이미지 4,979장, 결함 객체 37,401개).',
      'Grad-CAM으로 CNN의 판단 근거를 히트맵으로 시각화하고, Streamlit 다크 HMI 대시보드로 자동/업로드 검사 화면을 구현.',
    ],
    challenges: [
      'YOLO 검증 과정에서 Windows 멀티프로세싱 버그와 라벨 파일명 불일치로 검증 자체가 실패해, 원인을 하나씩 분리해 해결한 뒤에야 전체 검증 데이터셋에 대한 정상 평가를 완료.',
      '분류(Classification)는 98%대로 쉽게 정확도가 나오지만, 객체 탐지(YOLO)는 위치까지 맞춰야 해서 mAP@0.5가 22.99%에 그침 — "결함이 있다"는 것과 "결함이 정확히 어디 있다"는 것은 난이도가 다른 문제임을 확인.',
      'Nano 크기(YOLO11n)와 30 epoch이라는 제한된 자원 안에서 결함 탐지 성능의 한계를 정직하게 리포트하고, 더 큰 모델(YOLO11s/m)과 추가 학습을 향후 과제로 명시.',
    ],
    lessons: [
      '분류 정확도만 보고 "이미지 AI가 잘 된다"고 판단하면 안 된다 — 같은 데이터라도 태스크(분류 vs 위치 탐지)에 따라 난이도가 크게 달라진다.',
      '전이학습은 2단계(동결 → 부분 해제)로 나눠야 무작위 초기화된 분류 헤드가 사전학습 가중치를 망가뜨리지 않는다.',
      'ImageNet 파라미터 대비 EfficientNetB0이 ResNet50보다 적은 파라미터로 더 높은 정확도를 냈다 — 무조건 큰 모델이 답은 아니다.',
    ],
    links: { github: 'https://github.com/youngzoogit/BatteryDeepLearning', caseStudy: true },
    gallery: 3,
    video: '/videos/battery-defect-inspection/demo.mp4',
    screenshots: [
      {
        title: '검사 대시보드',
        category: '실시간 검사',
        description: 'CNN 기반 PASS/NG 판정과 YOLO 위치 탐지를 함께 수행하는 공장 HMI 스타일 대시보드. sample_images 폴더로 자동 검사 라인을 시뮬레이션.',
        image: '/screenshots/battery-defect-inspection/01-dashboard.jpg',
      },
      {
        title: 'AI 판정 결과',
        category: 'CNN 분류',
        description: 'NG(불량 의심) 판정과 함께 CNN NG/PASS Score, YOLO 탐지 건수를 표시하고 작업자 확인이 필요한 항목을 안내.',
        image: '/screenshots/battery-defect-inspection/02-ng-judgment.jpg',
      },
      {
        title: 'YOLO 결함 탐지',
        category: '객체 탐지',
        description: 'YOLO11이 바운딩 박스로 오염(Pollution) 위치를 탐지하고, confidence·좌표를 포함한 상세 탐지 테이블을 함께 제공.',
        image: '/screenshots/battery-defect-inspection/03-yolo-detection.jpg',
      },
      {
        title: 'Grad-CAM 시각화',
        category: '컴퓨터 비전',
        description: '투입 이미지 · CNN Heatmap · 판정 근거 Overlay를 나란히 비교하고, CNN 검증 정확도 98.45% 등 품질 검사 KPI를 표시.',
        image: '/screenshots/battery-defect-inspection/04-gradcam.jpg',
      },
    ],
  },
  {
    slug: 'tcga-explainable-ai',
    name: 'TCGA Cancer Classification & GraphRAG',
    tagline: 'TCGA 유전자 발현 데이터로 암종을 분류하고, GraphRAG로 유전자·암종·근거문서 관계를 연결한 프로젝트.',
    period: '2026.07',
    type: '개인',
    category: 'GraphRAG',
    accent: '연구',
    features: [
      '3개 모델(Logistic/RF/MLP) 암종 분류 비교',
      'Permutation Importance 기반 Top Gene 추출',
      '모델 간 합의(consensus) 유전자 하이라이트',
      'RAG 근거 문서 검색 + Neo4j GraphRAG',
      '근거 문서 기반 LLM 응답 생성',
    ],
    tech: [
      'Python',
      'scikit-learn',
      'LangChain',
      'Gemini',
      'Neo4j',
      'GraphRAG',
      'Streamlit',
      'pandas',
    ],
    overview:
      'UCSC Xena의 TCGA PANCAN 코호트에서 유방암·폐선암·폐편평세포암·신장암·대장암·갑상선암 등 6개 암종의 유전자 발현 데이터를 이용해 암종을 분류하는 프로젝트입니다. 모델 정확도를 최고로 끌어올리는 것보다, 예측에 관여한 유전자를 Permutation Importance로 추출하고 RAG·GraphRAG로 근거 문서와 연결해 답을 구성하는 데 초점을 맞췄습니다.',
    problem:
      '암 유전체 분류 모델은 정확도가 아무리 높아도 연구자가 "왜 이 유전자가 중요한지"를 알 수 없으면 신뢰하기 어렵습니다. 근거 없이 확신에 찬 설명을 만들어내는 LLM의 hallucination 문제도 임상·연구 맥락에서는 특히 위험합니다.',
    solution:
      'Logistic Regression(ElasticNet 계수), Random Forest, MLP 세 모델을 각각 학습하고, 트리 기반 모델은 상관유전자 편향이 있는 impurity 중요도 대신 Permutation Importance로 통일해 Top Gene을 추출합니다. 2개 이상 모델이 공통으로 지목한 유전자를 우선순위로 삼아 GeneCards·NCBI·UniProt 기반 근거 문서를 RAG로 연결하고, Neo4j에 유전자-암종-모델-근거문서 그래프를 적재해 GraphRAG로 관계 정보를 답변에 포함시킵니다. LLM에는 "제공된 문서에 근거해서만 답하고, 근거가 없으면 근거 제한적이라고 밝혀라"를 시스템 프롬프트로 강제했습니다.',
    myRole: [
      '데이터 전처리 및 3개 분류 모델 학습·비교',
      'RAG 코퍼스 작성 및 검색 파이프라인 구성',
      'Neo4j GraphRAG 연동, Streamlit 앱 구현까지 1인 프로젝트로 수행',
    ],
    results:
      '3개 분류 모델 모두 Macro F1 0.98 이상을 달성했고(GitHub 저장소 model_metrics.csv 기준), Neo4j GraphRAG로 유전자·암종·근거문서 관계를 연결한 답변 생성을 확인했습니다. SHAP·LIME 같은 별도의 설명가능 AI 기법은 사용하지 않았습니다.',
    process: [
      'Xena 데이터 다운로드 → 전치(유전자×샘플 → 샘플×유전자) → 임상 라벨 매칭 → 상위 분산 유전자 1,000~2,000개로 피처 축소.',
      'Random Forest 베이스라인으로 end-to-end 파이프라인을 먼저 검증.',
      'Logistic Regression·MLP를 추가 학습하고 Macro F1 기준으로 3모델 비교, Permutation Importance/계수로 Top Gene과 3-way 합의 비교표 작성.',
      'primary 유전자 18개의 RAG 코퍼스(기능/암연관/치료타겟 근거 문서)를 작성하고 검색 파이프라인 연결.',
      'Neo4j GraphRAG를 추가해 유전자-암종-모델 관계를 그래프로 적재하고 LLM 컨텍스트에 결합.',
      'Streamlit에서 샘플 선택 → 예측 → 합의 유전자 → RAG 근거 → LLM 설명까지 한 화면 흐름으로 연결.',
    ],
    challenges: [
      '1,500개 피처 전체에 대해 Permutation Importance를 구하면 연산이 급격히 느려져, 전체 피처 1차 계산 → 상위 100개로 필터링 후 클래스별 2차 계산의 2단계 구조로 해결.',
      'Neo4j Aura 연결 시 `neo4j+s://`에서 TLS 인증서 검증이 실패해, 개발 환경에서는 `neo4j+ssc://`(느슨한 인증서 검증)로 우회하되 운영 환경에서는 인증서 체인 문제 해결을 과제로 남김.',
      '20~50개 유전자 근거 문서를 신뢰도 있게 채우는 데 시간이 걸려, 우선 18개 중 8개만 curated로 완성하고 나머지는 draft 상태로 명확히 구분 표시.',
    ],
    lessons: [
      '클래스 불균형이 있는 다중분류에서는 Accuracy 단독 해석이 위험하다 — Macro F1을 주지표로 삼아야 소수 클래스 성능 저하를 놓치지 않는다.',
      '높은 모델 정확도(Macro F1 0.98 이상)는 프로젝트의 목표가 아니다 — 이 프로젝트의 가치는 예측이 아니라 근거를 연결하는 데 있다.',
      '근거 문서가 없는 상태를 LLM이 스스로 "근거 제한적"이라고 말하게 만드는 프롬프트 설계가, 사후 검증보다 훨씬 안전하다.',
    ],
    links: { github: 'https://github.com/youngzoogit/LLMProject', caseStudy: true },
    gallery: 3,
    video: '/videos/tcga-explainable-ai/demo.mp4',
    screenshots: [
      {
        title: '예측 요약',
        category: '암종 분류',
        description: '샘플을 선택하면 3개 모델의 예측 암종·모델 동의·주요 유전자 후보·근거 상태를 한 화면에 요약. Gemini API로 설명을 생성.',
        image: '/screenshots/tcga-explainable-ai/01-prediction-summary.jpg',
      },
      {
        title: 'RAG 어시스턴트',
        category: 'RAG 근거 검색',
        description: '근거 문서가 없는 유전자를 물으면 "근거 문서 없음"을 밝히고, NCBI Gene·Human Protein Atlas·GeneCards에서 외부 근거를 검색해 답변.',
        image: '/screenshots/tcga-explainable-ai/02-rag-assistant.jpg',
      },
    ],
  },
  {
    slug: 'burnout-risk-prediction',
    name: 'Burnout Data Analysis & Prediction',
    tagline: '근무환경·스트레스 데이터로 여러 회귀 모델의 번아웃 예측 성능을 비교한 프로젝트.',
    period: '2026.06',
    type: '개인',
    category: '머신러닝',
    accent: 'ML',
    features: ['회귀 모델 4종 비교', 'SHAP 기반 설명가능성', 'Streamlit 예측 대시보드'],
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    overview:
      'Kaggle의 직장인 정신건강·근무환경 공개 데이터셋을 전처리하고, 번아웃 위험 점수(burnout_risk_score)를 예측하는 여러 머신러닝 회귀 모델의 성능을 비교한 프로젝트입니다. 초과근무 시간, 워라밸 점수, 스트레스 수준, 결근일수 등을 피처로 사용하고, SHAP으로 어떤 요인이 위험도에 영향을 주는지 설명 가능한 형태로 제공합니다. 이 모델은 참고용 예측 지표이며 실제 정신건강 진단을 대체하지 않습니다.',
    problem:
      '번아웃은 대개 증상이 심해진 뒤에야 발견됩니다. 근무환경·심리 데이터로 위험 신호를 조기에 잡아내고, 그 이유를 해석 가능한 형태로 보여줄 수 있는지 확인하고자 했습니다.',
    solution:
      'Linear Regression, Elastic Net, Random Forest, XGBoost 4개 회귀 모델을 비교한 결과 XGBoost가 R² 0.82, RMSE 0.97로 가장 우수해 최종 모델로 선정했습니다. SHAP 분석으로 초과근무 시간·워라밸 점수·결근일수·스트레스 수준이 주요 기여 요인임을 확인하고, Streamlit 대시보드에서 예측과 함께 근거를 보여주도록 구성했습니다.',
    myRole: [
      '데이터 전처리 및 4개 회귀 모델 학습·비교',
      'SHAP 기반 Feature Importance 분석',
      'Streamlit 예측 대시보드 구현까지 1인 프로젝트로 수행',
    ],
    results:
      'XGBoost 모델이 R² 0.82, RMSE 0.97, MAE 0.74로 4개 모델 중 가장 우수한 성능을 보였습니다(GitHub 저장소 README 기준). 개인의 번아웃 위험을 확정하는 서비스가 아니라, 모델 성능을 비교·검증한 프로젝트입니다.',
    process: [
      '결측치 처리, 범주형 변수 원-핫 인코딩, 데이터 누수 가능성이 있는 변수(정신건강 진단·치료 이력 등) 제거.',
      '수치형 변수 상관관계 분석으로 다중공선성 확인 및 처리.',
      'Linear Regression / Elastic Net / Random Forest / XGBoost 4개 모델 학습·성능 비교.',
      'Feature Importance와 SHAP으로 예측 근거 분석.',
      'Streamlit 기반 예측 대시보드 구현.',
    ],
    challenges: [
      '초기에는 이직 의향(intention_to_leave)까지 함께 예측하려 했으나, SMOTE로 데이터 불균형을 보완해도 예측 성능이 낮아 최종 분석에서는 제외하고 번아웃 위험 점수 예측에 집중.',
      '`weekly_work_hours`와 `weekly_overtime_hours`의 상관계수가 0.95로 다중공선성이 심해, 번아웃과 더 직접적으로 관련된 초과근무 시간만 남기고 제거.',
      '정신건강 진단·치료 이력 변수는 결과성 변수(target leakage)로 판단해 독립변수에서 제외.',
    ],
    lessons: [
      '모든 타겟을 욕심내지 않고, 성능이 안 나오는 타겟은 과감히 스코프에서 빼는 것도 좋은 판단이다.',
      '상관관계가 높은 변수는 모델에 그대로 넣기보다, 도메인상 더 직접적인 변수를 남기고 제거하는 편이 해석에도 유리하다.',
      'SHAP은 예측 정확도만큼이나 "왜 이 사람이 위험한지"를 설명하는 데 중요하다.',
    ],
    links: { github: 'https://github.com/youngzoogit/burnoutMachineLearningProject', caseStudy: true },
    gallery: 2,
    video: '/videos/burnout-risk-prediction/demo.mp4',
    screenshots: [
      {
        title: '번아웃 위험도 시뮬레이터',
        category: '예측 대시보드',
        description: '경력·연봉·초과근무·결근일수 등을 입력하면 XGBoost 모델이 예상 번아웃 위험 점수와 위험군(Low/Mid/High)을 즉시 예측.',
        image: '/screenshots/burnout-risk-prediction/01-simulator.jpg',
      },
    ],
  },
]

export type ArchNode = {
  id: string
  label: string
  tech: string
  purpose: string
  responsibilities: string[]
  advantages: string[]
}

export const archNodes: ArchNode[] = [
  {
    id: 'field-devices',
    label: '현장 장비',
    tech: '바코드 스캐너 · 라벨 프린터 · PDA · 센서',
    purpose: '생산 현장에서 데이터가 처음 발생하는 지점입니다.',
    responsibilities: [
      '바코드 스캐너로 품목·사양 식별',
      '라벨 프린터로 검사 결과 라벨 발행',
      'PDA로 현장 입력 및 조회 지원',
    ],
    advantages: [
      '소켓 통신 기반 장비 연동을 직접 구현',
      '이종검사 방지·라벨 발행 시스템을 설계부터 배포까지 수행',
      '현장 사용자 교육까지 직접 진행',
    ],
  },
  {
    id: 'business-app',
    label: '업무 애플리케이션',
    tech: 'C# WinForms · DevExpress · Flutter',
    purpose: '현장 데이터를 실제 업무 화면과 기능으로 연결합니다.',
    responsibilities: [
      '생산·재고·품질 업무 화면 개발',
      '바코드·PDA 연동 기능 구현',
      '현장 사용자 요청에 따른 기능 개선',
    ],
    advantages: [
      '약 3년간 여러 제조 현장에 배포·운영',
      '이종검사·라벨 발행 등 실제 현장 문제 해결',
      'Flutter로 PDA 버전까지 확장',
    ],
  },
  {
    id: 'backend-api',
    label: '백엔드 · API',
    tech: 'Spring Boot · FastAPI · REST API',
    purpose: '업무 애플리케이션과 데이터, AI 기능 사이를 REST API로 연결합니다.',
    responsibilities: ['REST API로 프론트엔드·AI 서비스 연결', '도메인 로직과 트랜잭션 처리', '인증·권한 관리'],
    advantages: [
      'Spring Boot로 팀 프로젝트 백엔드 코어 구축',
      'FastAPI로 AI 추론 서비스 분리',
      '동시성·보안 이슈 대응 경험',
    ],
  },
  {
    id: 'data',
    label: '데이터',
    tech: 'Oracle · MSSQL · MariaDB · PostgreSQL · Redis',
    purpose: '제조 현장 데이터와 서비스 데이터를 저장하고 조회합니다.',
    responsibilities: [
      '제조 현장 데이터 저장 및 조회',
      '관계형 데이터베이스 설계·마이그레이션',
      'AI 서비스용 캐시·벡터 데이터 관리',
    ],
    advantages: [
      'Oracle → PostgreSQL 마이그레이션 수행',
      'MSSQL·MariaDB 등 다양한 RDBMS 실무 경험',
      'pgvector·Redis로 AI 서비스 데이터 계층 확장',
    ],
  },
  {
    id: 'ai',
    label: 'AI 적용',
    tech: '머신러닝 예측 · 이미지 분류 · 객체 탐지 · RAG · GraphRAG',
    purpose: '데이터가 쌓인 영역에 필요한 만큼 AI 기능을 적용합니다.',
    responsibilities: [
      '제조·업무 데이터를 학습 데이터로 활용',
      '이미지 분류·객체 탐지 모델 실험',
      'RAG·GraphRAG로 근거 기반 응답 구성',
    ],
    advantages: [
      'LightGBM으로 업무 지연 위험도 예측',
      'EfficientNet·YOLO로 결함 분류·탐지 실험',
      'Neo4j GraphRAG로 근거 문서 연결 응답 생성',
    ],
  },
]

export const skillGroups = [
  { name: '실무 활용', skills: ['C#', '.NET', 'WinForms', 'DevExpress', 'Oracle', 'MSSQL', 'MariaDB', 'Flutter', 'Git', 'SVN', 'TFS', 'MES', 'WMS'] },
  { name: '프로젝트 활용', skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'] },
  { name: 'AI 프로젝트 활용', skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow/Keras', 'EfficientNet', 'YOLO', 'LangChain', 'Neo4j', 'RAG', 'GraphRAG'] },
]

export const timeline = [
  { title: '영남대학교 화학공학부', period: '2013–2018', description: '화학공학을 전공하며 문제를 정량적으로 분석하고 해결하는 기초를 다짐.' },
  { title: 'CVE Technology Group Inc.', period: '2016.01–2017.01', description: '미국 텍사스 소재 스마트폰 리퍼비시 기업에서 생산 품질관리와 공정 데이터 분석 담당.' },
  { title: '경북산업직업전문학교', period: '2021.07–2022.01', description: '스마트 공장 환경 구축 전문가 양성 과정 수료, C#·PLC·SCADA 실습과 SANTA SMART FACTORY 팀 프로젝트 수행.' },
  { title: '(주)아이디정보시스템', period: '2022.03–2024.10', description: '약 3년간 제조업 11개 이상 고객사의 MES/WMS 시스템을 설계·구축·유지보수. 이종검사 방지·라벨 발행 시스템도 개인 프로젝트로 수행.' },
  { title: '주식회사 모베이스시스템', period: '2025.12–2026.02', description: 'ERP/HR 시스템 유지보수와 신규 HR 시스템 도입 프로젝트를 지원.' },
  { title: '휴먼AI교육센터 AI 심화과정', period: '2026.06–2026.08', description: 'Spring Boot·React·FastAPI 기반 서비스 개발과 머신러닝·딥러닝·LLM 프로젝트를 수행하고, 제조 시스템 경험을 백엔드·AI로 확장하는 과정으로 WorkFlow AI를 포함한 4개 프로젝트를 완성.' },
]

export const experience = [
  {
    area: '제조 업무 시스템',
    description: 'MES·WMS 및 생산·재고·품질 업무 흐름을 이해하고 현장에서 실제로 사용할 수 있는 시스템을 개발합니다.',
  },
  {
    area: '백엔드와 데이터 연결',
    description: '업무 애플리케이션, API, 데이터베이스가 안정적으로 연결되는 구조를 설계하고 구현합니다.',
  },
  {
    area: '제조 AI 적용',
    description: '품질 검사, 예측 유지보수, 공정 최적화 등 제조 현장의 문제에 AI를 적용하는 방법을 탐구합니다.',
  },
]

export const githubStats = [
  { label: '제조 IT 실무', value: '약 3년' },
  { label: '개인 프로젝트 설계·개발·배포', value: 'End-to-End' },
  { label: 'ML·DL·LLM·AI 서비스 프로젝트', value: '4 Projects' },
  { label: '최종 팀 프로젝트 협업', value: '7 Members' },
]

export const pinnedRepos = [
  { name: 'youngzoogit/burnoutMachineLearningProject', url: 'https://github.com/youngzoogit/burnoutMachineLearningProject', description: '번아웃 위험 점수 예측 회귀 모델 비교 프로젝트', language: 'Jupyter Notebook', stars: 0, forks: 0 },
  { name: 'youngzoogit/BatteryDeepLearning', url: 'https://github.com/youngzoogit/BatteryDeepLearning', description: '배터리 결함 이미지 분류·탐지 모델 실험 프로젝트', language: 'Jupyter Notebook', stars: 0, forks: 0 },
  { name: 'youngzoogit/LLMProject', url: 'https://github.com/youngzoogit/LLMProject', description: 'TCGA 암종 분류 및 GraphRAG 프로젝트', language: 'Python', stars: 0, forks: 0 },
  { name: 'rhantj/work-flow', url: 'https://github.com/rhantj/work-flow', description: 'WorkFlow AI — 협업·평가 보조 플랫폼 (7인 팀 프로젝트)', language: 'TypeScript', stars: 0, forks: 0 },
]

export const latestCommits = [
  { repo: 'work-flow', message: '리드미에서 시연 영상을 바로 볼 수 있게 정리', time: '8월 4일' },
  { repo: 'work-flow', message: '담당자 표시 이슈 트러블슈팅 기록 추가', time: '8월 4일' },
  { repo: 'LLMProject', message: 'Neo4j GraphRAG 리포트의 인스턴스 ID 노출 마스킹', time: '7월 6일' },
  { repo: 'BatteryDeepLearning', message: 'YOLO11 결함 탐지 모델 배포용 파일 추가', time: '6월 30일' },
  { repo: 'burnoutMachineLearningProject', message: '한글 폰트 렌더링 오류 수정', time: '6월 23일' },
]

export const aboutPoints = [
  { title: '제조 IT 실무', description: '약 3년간 MES·WMS 및 제조 업무 시스템을 개발하고 유지보수했습니다.' },
  { title: '현장 시스템 개발', description: '바코드 스캐너, 라벨 프린터, PDA 등 현장 장비와 업무 시스템을 연동했습니다.' },
  { title: 'End-to-End 수행', description: '요구사항 분석부터 설계, 개발, 배포, 사용자 교육까지 직접 수행한 경험이 있습니다.' },
  { title: '백엔드·AI 확장', description: '기존 제조 시스템 경험을 Spring Boot, FastAPI, React 및 AI 프로젝트로 확장하고 있습니다.' },
]
