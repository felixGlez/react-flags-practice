import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 5rem;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.0562);
`;

const StyledLogo = styled.span`
	font-size: 1rem;
	font-weight: 700;
`;

const StyledModeContainer = styled.div`
	width: 15%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.2rem;
`;

const StyledModeIcon = styled.img`
	width: 1rem;
`;

const StyledModeText = styled.span`
	font-size: 1rem;
`;

export {
	StyledHeader,
	StyledLogo,
	StyledModeContainer,
	StyledModeIcon,
	StyledModeText
};
