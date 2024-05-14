import styled from 'styled-components'
export const StyleCard = styled.div`
width: 20%;
height: 360px;
border: 1px solid #e8e8e8;
border-radius: 5px;
padding: 16px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`
export const StyleName = styled.div`
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  height: 19%;
  margin: 0;
`
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
export const StyleDis = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 50%;
`
export const StrikeThrough = styled.p`
  text-decoration: line-through;
  margin: 0;
`;

export const DiscountPrice = styled.p`
  color: red;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const DiscountPercent = styled.p`
  color: red;
  margin: 0;
`;