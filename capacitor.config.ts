import type { CapacitorConfig } from '@capacitor/cli';

// 신규(사용자요청 — Capacitor 앱 패키징 1단계): "방식 B" 채택
// 앱이 서버(백엔드가 제공하는 /app 경로)를 실시간으로 불러오도록 설정
// → 루머03.html을 수정하면, 앱을 다시 빌드/재설치할 필요 없이
//   다음에 앱을 열 때 자동으로 최신 화면이 반영됨(웹에서 라이브리로드와 동일한 원리)
//
// ⚠️ 팀장님이 꼭 하실 일: 아래 IP 주소를 실제 PC의 로컬 네트워크 IP로 교체하세요.
//    (server.js 실행 시 콘솔에 "모바일에서 접속하려면: http://xxx.xxx.xxx.xxx:4000/app"라고 뜨는 그 IP)
const DEV_SERVER_IP = '192.168.0.2'; // ← 이 부분을 실제 PC IP로 바꾸세요

const config: CapacitorConfig = {
  appId: 'com.roomer.app',
  appName: '루머 ROOMER',
  webDir: 'www',
  server: {
    url: `http://${DEV_SERVER_IP}:4000/app/`,
    cleartext: true // http(https 아님) 통신을 허용(개발단계 전용, 실배포 시 https로 전환 필요)
  }
};

export default config;
