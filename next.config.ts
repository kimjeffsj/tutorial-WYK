import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Next.js의 실험 옵션
    /*
    동적으로 I/O(입출력)를 사용하는 방식을 활성화함
    - 서버 사이드에서 파일 읽기/쓰기, 데이터 페칭 등 I/O 관련 작업을 더 
    효율적이고 동적으로 관리할 수 있도록 개선하는 실험적 기능
    */
    dynamicIO: true,
    /* 
    인증 관련 흐름에서 인터럽트를 사용할 수 있도록 하는 기능
    - 인증 미들웨어나 라우트 핸들러에서 요청이나 특정 조건이 맞을 때,
    기존 로직을 중단(interrupt)하고 다른 처리를 실행
    - 이를 통해 인증 관련 에러 처리나 리다이렉션, 등 특수한 시나리오에서
    유연한 대처 가능
    */
    authInterrupts: true,
  },
};

export default nextConfig;
