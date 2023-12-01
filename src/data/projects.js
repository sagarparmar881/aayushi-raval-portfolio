// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'AR Enterprises Vapi',
		category: 'Website',
		img: require('@/assets/images/ar-enterprises-1.jpg'),
		link:'/projects/ar-project'
	},
	{
		id: 2,
		title: 'Web Scrapping',
		category: 'Python Application',
		img: require('@/assets/images/web-scrapping-1.jpg'),
		link:'/projects/web-scrapping'
	},
	{
		id: 3,
		title: 'Navrachana University',
		category: 'Website',
		img: require('@/assets/images/navrachana-university.jpg'),
		link:'/projects/navrachana-university'
	},
{
		id: 4,
		title: 'License Plate Detection',
		category: 'Python',
		img: require('@/assets/images/ui-project-1.jpg'),
		link:'/projects/license-plate'
	},
];

export default projects;
