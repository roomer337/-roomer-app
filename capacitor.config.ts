import type { CapacitorConfig } from '@capacitor/cli';

// 신규(사용자요청 — Capacitor 앱 패키징 1단계): "방식 B" 채택
// 앱이 서버(백엔드가 제공하는 /app 경로)를 실시간으로 불러오도록 설정
// → 루머03.html을 수정하면, 앱을 다시 빌드/재설치할 필요 없이
//   다음에 앱을 열 때 자동으로 최신 화면이 반영됨(웹에서 라이브리로드와 동일한 원리)
//
// 결함개선(실배포 대응): 예전엔 "IP:포트"만 입력받았는데, 이러면 나중에 실제 배포주소
// (https://roomer-backend.onrender.com 같은 형태, 포트번호 없음)를 못 넣었음
// → 전체 URL을 그대로 받는 방식으로 변경(로컬 IP 테스트든 실배포 주소든 둘 다 지원)
//
// ⚠️ 팀장님이 꼭 하실 일: 아래 값을 실제 서버 주소로 교체하세요.
//    - 로컬 PC 테스트: http://192.168.x.x:4000/app/ (server.js 콘솔에 뜨는 그 주소)
//    - 실제 배포(Render 등): https://실제도메인.onrender.com/app/
const SERVER_BASE_URL = 'https://roomer-backend.onrender.com/app/';

const config: CapacitorConfig = {
  appId: 'com.roomer.app',
  appName: '루머 ROOMER',
  webDir: 'www',
  server: {
    url: SERVER_BASE_URL,
    cleartext: true
  }
};

export default config;
