import { useEffect, useState } from 'react';
import {
	StyledContent,
	StyledFiltersContainer,
	StyledFlagsContainer
} from './styles';
import { v4 } from 'uuid';

const Content = () => {
	const [flags, setFlags] = useState([]);
	console.log(flags[0]);

	useEffect(() => {
		fetchCountries(setFlags);
	}, []);

	return (
		<StyledContent>
			<StyledFiltersContainer>
				<input type='text' name='search' id='search' />
				<select name='select' id='select'>
					<option value='0'>All</option>
					<option value='1'>Africa</option>
					<option value='2'>America</option>
					<option value='3'>Asia</option>
					<option value='4'>Europe</option>
					<option value='5'>Oceania</option>
				</select>
			</StyledFiltersContainer>
			<StyledFlagsContainer>
				{flags.map(country => (
					<div key={v4()}>
						<p>{country.name.common}</p>
					</div>
				))}
			</StyledFlagsContainer>
		</StyledContent>
	);
};

const fetchCountries = async setFlags => {
	const response = await fetch(`https://restcountries.com/v3.1/all`);
	const data = await response.json();
	setFlags(data);
};

export default Content;
