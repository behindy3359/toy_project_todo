let backendHost ;
const hostname = window && window.location && window.location.hostname;

if(hostname ==='localhost'){
  backendHost = 'http://localhost:8080';
}else{
  backendHost = '실제 배포 서버의 주소';
}

export const API_BASE_URL = `${backendHost}`;

// window가 존재하지 않는 경우
// - 서버측 코드에서 실행되는 경우 = window객체는 존재하지 않음
// window.location 이 존재하지 않는 경우
// 브라우저 환경이 아닌경우 
// hostname 이 존재하지 않는 경우
// - 브라우저 환경이지만 window.location객체에 hostname 속성이 없는 경우
// - 이렇게 단계적으로 확인하면 안전하게 호스트 이름을 가져올 수 있음.

