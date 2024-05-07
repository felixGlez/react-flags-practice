import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCountryDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 5rem;

	@media (max-width: 769px) {
		padding: 0rem;
	}
`;

const StyledBackButton = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8.5rem;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294);
`;

const StyledInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 769px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledFlag = styled.img`
	width: 45%;
	display: flex;
	justify-content: center;
	@media (max-width: 769px) {
		width: 90%;
	}
`;

const StyledInfo = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (max-width: 769px) {
		width: 90%;
	}
`;

const StyledCountryName = styled.h1`
	font-size: 2rem;
`;

const StyledCountryData = styled.span`
	font-size: 1rem;
`;

const StyledBorderCountry = styled.div`
	display: flex;
	justify-content: center;
	width: 80px;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294);
`;

export {
	StyledCountryDetails,
	StyledBackButton,
	StyledInfoContainer,
	StyledFlag,
	StyledInfo,
	StyledCountryName,
	StyledCountryData,
	StyledBorderCountry
};
