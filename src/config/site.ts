export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Future Tech',
	description: 'Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'News',
			href: '/news',
		},
		{
			label: 'Podcasts',
			href: '/podcasts',
		},
		{
			label: 'Resources',
			href: '/resources',
		},
	],
	navMenuItems: [
		{
			label: 'Contact us',
			href: '/contacts',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
	},
}
