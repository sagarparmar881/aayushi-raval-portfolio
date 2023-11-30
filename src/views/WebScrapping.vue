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
				singleProjectTitle: 'Web Scrpping',
				singleProjectDate: 'Dec 23, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Web Scrpping',
					img: require('@/assets/images/web-scrapping-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Scrpping',
					img: require('@/assets/images//web-scrapping-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'N/A',
					},
					{
						id: 2,
						title: 'Services',
						details: 'N/A',
					},
					{
						id: 3,
						title: 'Website',
						details: 'N/A',
					},
					{
						id: 4,
						title: 'Phone',
						details: 'N/A',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The primary objective of the web scraping project is to systematically and efficiently gather, extract, and organize relevant data from targeted websites. Through the implementation of advanced web scraping techniques and tools, the project aims to create a robust and scalable solution that automates the extraction of specific information, providing valuable insights for analysis, research, or integration into existing systems.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Python'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'The central objective of our web scraping project is to establish a systematic and effective approach for acquiring, extracting, and organizing pertinent data from identified websites. This initiative is geared towards harnessing the power of web scraping methodologies and tools to create a resilient and scalable solution. By automating the extraction process, we aim to facilitate the efficient retrieval of targeted information, offering valuable insights that can be utilized for research, analysis, or seamless integration into existing systems.',
					},
					{
						id: 2,
						details:
							'Our project places a strong emphasis on employing advanced web scraping techniques and tools. The focus is on crafting a solution that is not only technically sophisticated but also reliable and adaptable to different sources. Through careful consideration of ethical guidelines and adherence to website terms of service, we ensure the responsible and respectful extraction of data. The ultimate aim is to maintain the accuracy and integrity of the collected information, instilling confidence in the reliability of our web scraping system.',
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
						url: 'https://www.youtube.com/',
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
