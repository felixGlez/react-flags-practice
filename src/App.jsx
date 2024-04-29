import Content from './components/content/Content';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/global-styles';

// https://restcountries.com/v3.1/name/{name}
// const country = [
// 	{
// 		name: {
// 			common: 'Spain',
// 			official: 'Kingdom of Spain',
// 			nativeName: { spa: { official: 'Reino de España', common: 'España' } }
// 		},
// 		tld: ['.es'],
// 		cca2: 'ES',
// 		ccn3: '724',
// 		cca3: 'ESP',
// 		cioc: 'ESP',
// 		independent: true,
// 		status: 'officially-assigned',
// 		unMember: true,
// 		currencies: { EUR: { name: 'Euro', symbol: '€' } },
// 		idd: { root: '+3', suffixes: ['4'] },
// 		capital: ['Madrid'],
// 		altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
// 		region: 'Europe',
// 		subregion: 'Southern Europe',
// 		languages: {
// 			spa: 'Spanish',
// 			cat: 'Catalan',
// 			eus: 'Basque',
// 			glc: 'Galician'
// 		},
// 		translations: {
// 			ara: { official: 'مملكة إسبانيا', common: 'إسبانيا' },
// 			bre: { official: 'Rouantelezh Spagn', common: 'Spagn' },
// 			ces: { official: 'Španělské království', common: 'Španělsko' },
// 			cym: { official: 'Kingdom of Spain', common: 'Spain' },
// 			deu: { official: 'Königreich Spanien', common: 'Spanien' },
// 			est: { official: 'Hispaania Kuningriik', common: 'Hispaania' },
// 			fin: { official: 'Espanjan kuningaskunta', common: 'Espanja' },
// 			fra: { official: "Royaume d'Espagne", common: 'Espagne' },
// 			hrv: { official: 'Kraljevina Španjolska', common: 'Španjolska' },
// 			hun: { official: 'Spanyol Királyság', common: 'Spanyolország' },
// 			ita: { official: 'Regno di Spagna', common: 'Spagna' },
// 			jpn: { official: 'スペイン王国', common: 'スペイン' },
// 			kor: { official: '에스파냐 왕국', common: '스페인' },
// 			nld: { official: 'Koninkrijk Spanje', common: 'Spanje' },
// 			per: { official: 'پادشاهی اسپانیا', common: 'اسپانیا' },
// 			pol: { official: 'Królestwo Hiszpanii ', common: 'Hiszpania' },
// 			por: { official: 'Reino de Espanha', common: 'Espanha' },
// 			rus: { official: 'Королевство Испания', common: 'Испания' },
// 			slk: { official: 'Španielske kráľovstvo', common: 'Španielsko' },
// 			spa: { official: 'Reino de España', common: 'España' },
// 			srp: { official: 'Краљевина Шпанија', common: 'Шпанија' },
// 			swe: { official: 'Konungariket Spanien', common: 'Spanien' },
// 			tur: { official: 'İspanya Krallığı', common: 'İspanya' },
// 			urd: { official: 'مملکتِ ہسپانیہ', common: 'ہسپانیہ' },
// 			zho: { official: '西班牙王国', common: '西班牙' }
// 		},
// 		latlng: [40.0, -4.0],
// 		landlocked: false,
// 		borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
// 		area: 505992.0,
// 		demonyms: {
// 			eng: { f: 'Spanish', m: 'Spanish' },
// 			fra: { f: 'Espagnole', m: 'Espagnol' }
// 		},
// 		flag: '\uD83C\uDDEA\uD83C\uDDF8',
// 		maps: {
// 			googleMaps: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
// 			openStreetMaps: 'https://www.openstreetmap.org/relation/1311341'
// 		},
// 		population: 47351567,
// 		gini: { 2018: 34.7 },
// 		fifa: 'ESP',
// 		car: { signs: ['E'], side: 'right' },
// 		timezones: ['UTC', 'UTC+01:00'],
// 		continents: ['Europe'],
// 		flags: {
// 			png: 'https://flagcdn.com/w320/es.png',
// 			svg: 'https://flagcdn.com/es.svg',
// 			alt: 'The flag of Spain is composed of three horizontal bands of red, yellow and red, with the yellow band twice the height of the red bands. In the yellow band is the national coat of arms offset slightly towards the hoist side of center.'
// 		},
// 		coatOfArms: {
// 			png: 'https://mainfacts.com/media/images/coats_of_arms/es.png',
// 			svg: 'https://mainfacts.com/media/images/coats_of_arms/es.svg'
// 		},
// 		startOfWeek: 'monday',
// 		capitalInfo: { latlng: [40.4, -3.68] },
// 		postalCode: { format: '#####', regex: '^(\\d{5})$' }
// 	}
// ];

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				<Header />
				<Content />
			</Main>
		</>
	);
};

export default App;
