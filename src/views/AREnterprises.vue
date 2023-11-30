<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'AR Enterprises',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'AR Enterprises',
					img: require('@/assets/images/ar-enterprises-1.jpg'),
				},
				{
					id: 2,
					title: 'AR Enterprises',
					img: require('@/assets/images/ar-enterprises-2.jpg'),
				},
				{
					id: 3,
					title: 'AR Enterprises',
					img: require('@/assets/images/ar-enterprises-3.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'AR Enterprises',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design & Frontend Development',
					},
					{
						id: 3,
						title: 'Website',
						details: 'arenterprisesvapi.vercel.app',
					},
					{
						id: 4,
						title: 'Phone',
						details: '+91 98241 39769',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'AR Enterprises seeks to enhance its online presence and business outreach through the development of a dynamic and user-friendly website. The website should not only showcase the company\'s products and services but also incorporate cutting-edge technologies like Vue.js or any other latest tech to ensure a modern, responsive, and engaging user experience.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'SCSS',
							'JavaScript',
							'Vue.js',
							'Figma',
							'AdobeXD',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'The primary goal of this project is to create a sophisticated and user-friendly website for AR Enterprises, emphasizing a modern design and dynamic functionality. The website will serve as a pivotal tool to enhance AR Enterprises\' online visibility and expand its business reach. Key to achieving this is the development of an intuitive and visually appealing user interface that ensures easy navigation across devices, promoting a seamless and enjoyable user experience.',
					},
					{
						id: 2,
						details:
							'To achieve the desired modernity, the website will be built using cutting-edge technology, with a strong recommendation for Vue.js or equivalent. This choice aims to create a responsive and dynamic single-page application (SPA), aligning with industry best practices for web development. The utilization of such technologies will contribute to the website\'s overall performance, ensuring it remains at the forefront of the digital landscape.',
					},
					{
						id: 3,
						details:
							'A distinctive feature of the website will be the integration of Augmented Reality (AR) elements, providing users with an immersive experience while exploring AR Enterprises\' products and services. Additionally, a robust content management system (CMS) will be implemented to empower AR Enterprises with the ability to effortlessly update and expand website content. This includes the incorporation of a blog/news section to keep visitors informed about company updates, industry news, and relevant articles.',
					},
					{
						id: 4,
						details:
							'Other essential features include optional e-commerce functionality for online transactions, SEO optimization for improved search engine visibility, and a focus on performance and security measures to ensure a safe browsing environment. The project timeline and budget are critical components, and regular communication and collaboration between the development team and AR Enterprises will be maintained to ensure the project\'s success. The final deliverables will not only encompass a fully functional website but also comprehensive documentation and potential training for in-house maintenance.',
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
