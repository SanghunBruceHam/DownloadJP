# Formspree 설정 가이드

이 프로젝트는 Formspree를 사용하여 문의 폼 기능을 제공합니다. 다음 단계에 따라 설정하세요.

## 1. Formspree 계정 생성

1. [Formspree](https://formspree.io)에서 무료 계정을 생성하세요
2. 새 양식(Form)을 만들고 Form ID를 받으세요

## 2. 코드 업데이트

`client/src/pages/Contact.tsx` 파일에서 다음 줄을 수정하세요:

```typescript
// 변경 전:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// 변경 후 (YOUR_FORM_ID를 실제 ID로 교체):
const response = await fetch('https://formspree.io/f/xdkokwpz', {
```

## 3. Formspree 설정 권장사항

### 기본 설정
- **Reply-To**: 자동으로 사용자 이메일로 설정됨
- **Subject**: "LINE ガイドサイトからのお問い合わせ - [이름]様"
- **Language**: 일본어 (ja)

### 스팸 방지 설정
- **Honeypot**: 이미 구현됨 (`_gotcha` 필드)
- **Rate Limiting**: Formspree에서 기본 제공
- **reCAPTCHA**: 필요시 Formspree 대시보드에서 활성화

### 알림 설정
- **Email Notifications**: 새 문의 시 이메일 알림
- **Slack/Discord**: 팀 채널로 알림 (옵션)

## 4. 월간 제한

무료 Formspree 플랜:
- 월 50개 문의까지 무료
- 초과 시 유료 플랜으로 업그레이드 필요

## 5. 보안 권장사항

1. **이메일 검증**: Formspree에서 자동으로 처리
2. **CORS 설정**: 도메인 화이트리스트 설정
3. **Webhook**: 고급 처리를 위한 webhook 설정 (옵션)

## 6. 테스트

설정 완료 후:
1. 로컬에서 폼 테스트
2. 실제 이메일로 테스트 전송
3. 스팸 필터 확인

## 7. 문의 대응 워크플로

1. **자동 응답**: Formspree에서 설정 가능
2. **수동 응답**: 3영업일 이내 답변
3. **분류**: 문의 유형별 라벨링

---

## 환경변수 사용 (권장)

보안을 위해 환경변수를 사용하세요:

```typescript
// .env.local
VITE_FORMSPREE_FORM_ID=xdkokwpz

// Contact.tsx
const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
const response = await fetch(`https://formspree.io/f/${formId}`, {
```

이렇게 하면 Form ID가 코드에 노출되지 않습니다.