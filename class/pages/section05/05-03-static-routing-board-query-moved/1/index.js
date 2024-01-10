import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRountingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      <div>작성자 : {data && data.fetchBoard.writer}</div>
      <div>제목 : {data?.data.fetchBoard.title}</div>
      <div>내용 : {data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div>
    </div>
  );
}
