import type { ArtistType } from './types';
import Lana from '$lib/assets/images/artists/lana/profile.png';
import Milly from '$lib/assets/images/artists/milly/profile.png';
import Tilen from '$lib/assets/images/artists/tilen/profile.png';

export const artists: ArtistType[] = [
	{
		name: 'Lana',
		image: Lana,
		styles: 'Linework, illustrative, blackwork',
		gallery: 'lana',
	},
	{
		name: 'Milly',
		image: Milly,
		styles: 'Realizem, linework',
		gallery: 'milly',
	},
	{
		name: 'Tilen',
		image: Tilen,
		styles: 'Realizem, abstraktni realizem',
		gallery: 'tilen',
	},
];
