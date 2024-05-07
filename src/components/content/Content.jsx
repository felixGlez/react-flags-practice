import { useEffect, useState } from 'react';
import { StyledContent } from './styles';
import Filters from '../filters/Filters';
import Countries from '../countries/Countries';

const Content = () => {
	const [region, setRegion] = useState(0);
	const [searchBy, setSearchBy] = useState('');
	const [countries, setCountries] = useState([]);

	let filteredCountries = filterByRegion(region, countries);
	filteredCountries = searchByName(searchBy, filteredCountries);

	useEffect(() => {
		fetchCountries(setCountries);
	}, []);

	return (
		<StyledContent>
			<Filters setSearchBy={setSearchBy} setRegion={setRegion} />
			<Countries filteredCountries={filteredCountries} />
		</StyledContent>
	);
};

const fetchCountries = async setCountries => {
	const response = await fetch(`https://restcountries.com/v3.1/all`);
	const data = await response.json();
	setCountries(data);
};

const filterByRegion = (region, countries) => {
	switch (region) {
		case 0:
			return [...countries];
		case 1:
			return countries.filter(country => country.region === 'Africa');
		case 2:
			return countries.filter(country => country.region === 'Americas');
		case 3:
			return countries.filter(country => country.region === 'Asia');
		case 4:
			return countries.filter(country => country.region === 'Europe');
		case 5:
			return countries.filter(country => country.region === 'Oceania');
	}
};

const searchByName = (searchBy, countries) => {
	const searchTerm = searchBy.toLowerCase();

	if (searchTerm) {
		const filteredCountries = countries.filter(country =>
			country.name.common.toLowerCase().includes(searchTerm)
		);
		return filteredCountries;
	}
	return [...countries];
};

export default Content;
