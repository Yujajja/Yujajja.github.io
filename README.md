# Yujin Infrastructure Operations Portfolio

Linux와 클라우드 환경을 직접 구성하며 서버·클라우드 운영, 모니터링, 로그 분석, 장애 1차 대응, 자동화와 IaC 역량을 쌓아 온 주니어 인프라 운영 엔지니어의 정적 GitHub Pages 웹 포트폴리오입니다.

## 지원 직무와 핵심 역량

- 지원 직무: 인프라 운영 · 클라우드 운영 · 시스템·서버 관제 · 장애 1차 대응
- 핵심 역량: 서버 및 클라우드 인프라 운영, 모니터링과 로그 분석, 장애 1차 대응, 운영 자동화, Infrastructure as Code, 컨테이너 기반 배포와 운영

## 기술 스택

- **Cloud / Infrastructure**: AWS, NAVER Cloud Platform, EC2, Lambda, Terraform
- **Container / Deployment**: Docker / Compose, Kubernetes / EKS, ECS Fargate, ECR, GitHub Actions (OIDC), Argo CD
- **Monitoring / Logging**: CloudWatch, Prometheus, Grafana, AlertManager, ELK, OpenSearch
- **Application / Automation**: Python, FastAPI, Spring Boot, Shell Script, Ansible
- **Test / Failure Validation**: Locust, Chaos Mesh
- **OS / Network / Database**: Linux, Nginx, VPC, ALB, RDS (MySQL/PostgreSQL), Redis

## 페이지 구성

- `Yujin` — 소개, 자격증, 교육내역, 기술 스택, Contact
- `Projects` — 팀 프로젝트 1개와 클라우드 운영 실습 8개

## 파일 구조

```text
.
├─ index.html
├─ projects.html
├─ .nojekyll
├─ README.md
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  └─ images/
│     └─ projects/
│        ├─ 01-bukjeok/
│        │  └─ 01-00-bukjeok-architecture.png
│        ├─ 02-elk/
│        │  └─ 02-00-elk-log-pipeline.png
│        ├─ 03-ec2-ops/
│        │  └─ 03-00-ec2-ops-architecture.png
│        ├─ 04-aws-ops/
│        │  └─ 04-00-aws-ops-architecture.png
│        ├─ 05-serverless/
│        │  └─ 05-00-serverless-api-architecture.png
│        ├─ 06-security/
│        │  └─ 06-00-security-remediation-flow.png
│        ├─ 07-observability/
│        │  └─ 07-00-cloudops-observability-architecture.png
│        ├─ 08-ai-cloudops/
│        │  └─ 08-00-ai-cloudops-architecture.png
│        └─ 09-ncp-3tier/
│           └─ 09-00-ncp-3tier-ops-flow.png
└─ projects/
   ├─ bukjeokbukjeok.html
   ├─ elk-log-tracing.html
   ├─ ec2-linux-operations.html
   ├─ aws-operations-phase2.html
   ├─ serverless-api-operations.html
   ├─ security-auto-remediation.html
   ├─ aws-cloudops-observability.html
   ├─ ai-cloudops-readonly-assistant.html
   └─ ncp-3tier-ops-log-analysis.html
```

## 이미지 이름 규칙

```text
프로젝트번호-이미지순서-내용.png
```

- 대표 이미지: `00`
- 상세 이미지: `01`, `02`, `03` 순서

예시:

```text
02-01-elk-kibana-discover.png
02-02-elk-trace-id-search.png
```

## GitHub Pages 배포

1. GitHub에 `Yujajja.github.io` 이름의 Public 저장소를 생성합니다.
2. 이 폴더 **안의 파일과 폴더 전체**를 저장소 최상위에 업로드합니다.
3. `Settings` → `Pages`로 이동합니다.
4. `Source`를 `Deploy from a branch`로 선택합니다.
5. `main` 브랜치와 `/(root)` 폴더를 선택한 뒤 저장합니다.
6. 배포 후 `https://yujajja.github.io`에서 확인합니다.

## 공개 정보

웹 포트폴리오에는 사용자가 공개하기로 한 이메일과 전화번호가 포함되어 있습니다.
