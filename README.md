# 2018 Kosslab Mini hHckathon - Team6 스노우보이

## 명령어 모음

Enact
- node패키지 설치: npm install
- 설치 확인: npm run serve
- node 패키징: npm run pack(webos-meta폴더 붙여넣고 설정 한 뒤)
- dist폴더로 이동: cd dist
- node 패키징 확인: ares-server . -o
- webOS 앱 패키징 부터 시작!

webOS
- 디바이스설치: ares-setup-device
- 디바이스리스트: ares-setup-device -list
- webOS 패키징: ares-package . (dist폴더에 appinfo 파일 존재 확인)
- 앱설지: ares-install -d rp ./com.domain.app_0.0.1_all.ipk
- 앱시작: ares-launch -d rp com.domain.app
- 앱종료: ares-launch -d rp -c com.domain.app
