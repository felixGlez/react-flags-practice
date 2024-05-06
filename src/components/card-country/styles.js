import styled from 'styled-components';

const StyledCardCountry = styled.div`
	width: 16.5rem;
	height: 21rem;
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	background-color: white;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294);
	cursor: pointer;

	& > *:not(:first-child) {
		padding-left: 1.5rem; /* Aplica padding a todos los hijos excepto al primero */
	}
`;

const StyledCountryFlag = styled.img`
	width: 100%;
	border-radius: 5px 5px 0px 0px;
`;

const StyledCountryName = styled.span`
	font-size: 1.125rem;
	font-weight: 600;
`;

const StyledCountryData = styled.span`
	font-size: 0.875rem;
`;

export {
	StyledCardCountry,
	StyledCountryName,
	StyledCountryData,
	StyledCountryFlag
};
