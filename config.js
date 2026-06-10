/**
 * Luxury Gold Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김준성",
    nameEn: "Groom",
    father: "김기용",
    mother: "이영희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "윤채현",
    nameEn: "Bride",
    father: "윤태식",
    mother: "김영미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-22",
    time: "16:00",
    venue: "에스가든웨딩 청주",
    hall: "3층 르씨엘홀",
    address: "충북 청주시 서원구 1순환로 854",
    tel: "043-292-8525",
    mapLinks: {
      kakao: "https://place.map.kakao.com/2127460543",
      naver: "https://naver.me/5l7kwvZZ"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "나의 사랑, 내 어여쁜 자야. 일어나서 함께 가자.\n\n서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김준성", bank: "기업은행", number: "150-094494-01-012" },
      { role: "아버지", name: "김기용", bank: "", number: "" },
      { role: "어머니", name: "이영희", bank: "농협은행", number: "864-12-026353" }
    ],
    bride: [
      { role: "신부", name: "윤채현", bank: "하나은행", number: "647-910686-30107" },
      { role: "아버지", name: "윤태식", bank: "국민은행", number: "712401-01-302744" },
      { role: "어머니", name: "김영미", bank: "농협은행", number: "401061-56-009146" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김준성 ♥ 윤채현 결혼합니다",
    description: "2026년 8월 22일, 소중한 분들을 초대합니다."
  }
};
