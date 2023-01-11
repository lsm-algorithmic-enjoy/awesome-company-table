export const EMPLOYEE_LISTS = [
  {
    key: "0",
    name: "Alex",
    departure: "운영팀",
    job: "기획 및 운영",
    phone: "010-1234-1323",
    email: "prettier111111@naver.com",
    invited: true,
  },
  {
    key: "1",
    name: "Kevin",
    departure: "디자인팀",
    job: "레이아웃 디자인",
    phone: "010-1234-1422",
    email: "kevin1234@naver.com",
    invited: false,
  },
  {
    key: "2",
    name: "Min",
    departure: "개발팀",
    job: "백엔드 개발",
    phone: "010-1234-3514",
    email: "Min@naver.com",
    invited: true,
  },
  {
    key: "3",
    name: "Messi",
    departure: "개발팀",
    job: "풀스택 개발",
    phone: "010-1342-0000",
    email: "messi@naver.com",
    invited: false,
  },
  {
    key: "4",
    name: "Andy",
    departure: "개발팀",
    job: "프론트엔드 개발",
    phone: "010-4400-0000",
    email: "andy@naver.com",
    invited: true,
  },
  {
    key: "5",
    name: "승민",
    departure: "개발팀",
    job: "프론트엔드 개발",
    phone: "010-1234-1111",
    email: "seung@ace.com",
    invited: false,
  },
];

export const EMPLOYEE_TABLE_COLUMNS = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    render: (name) => <div style={{ color: "blue" }}>{name}</div>,
  },
  {
    title: "부서",
    dataIndex: "departure",
    key: "departure",
  },
  {
    title: "업무",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "연락처",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "이메일",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "정보 입력 여부",
    dataIndex: "invited",
    key: "invited",
    render: (invited) =>
      invited ? (
        <a style={{ color: "blue", textDecorationLine: "underline" }}>
          정보입력요청
        </a>
      ) : (
        <div style={{ color: "gray", opacity: "0.3" }}>입력완료</div>
      ),
  },
];

export const MOBILE_EMPLOYEE_TABLE_COLUMNS = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    render: (name) => <div style={{ color: "blue" }}>{name}</div>,
  },
  {
    title: "부서",
    dataIndex: "departure",
    key: "departure",
  },
  {
    title: "전화번호",
    dataIndex: "phone",
    key: "phone",
  },
];
// 모바일 전용 columns 생성
