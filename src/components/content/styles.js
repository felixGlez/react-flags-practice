import styled from 'styled-components';

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 5rem;
	background-color: #fafafa;
`;
const StyledFiltersContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledFlagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4.66rem;
`;

export { StyledContent, StyledFiltersContainer, StyledFlagsContainer };
