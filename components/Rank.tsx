import styled from "styled-components";

export const RankTextContainer = styled.div`
  display: flex;
  margin-top: 0px;
  line-height: 1.1;
`;
export const RankText = styled.span`
  font-size: 12px;
  color: ${(props) => {
    if (props.color === "red") return "#f15e50";
    if (props.color === "blue") return "#757de8";
  }};
  margin-right: 3px;
`;

export default function Rank({ currentRank, lastRank }) {
  const last = lastRank === 0 ? "none" : lastRank;
  return (
    <RankTextContainer>
      {currentRank === 1 || currentRank === 2 || currentRank === 3 ? (
        <RankText>👑 Rank : {currentRank}</RankText>
      ) : (
        <RankText>Rank : {currentRank}</RankText>
      )}
      {last === "none" ? (
        <RankText> (New Entry) </RankText>
      ) : last < currentRank ? (
        <RankText color="red">( ▼ {currentRank - last} )</RankText>
      ) : last === currentRank ? (
        <RankText>( - )</RankText>
      ) : (
        <RankText color="blue">( ▲ {last - currentRank} )</RankText>
      )}
    </RankTextContainer>
  );
}
