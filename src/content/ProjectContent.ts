import ProjectContent from '$src/lib/Project/ProjectContent.svelte';

export default {
	component: ProjectContent,
	props: {
		title: 'MY PROJECTS',
		projects: [
			{
				title: 'Project 1',
				description: 'This is a project description',
				image: 'https://picsum.photos/200/300',
				link: 'https://google.com',
				code: 'https://github.com',
				tags: ['tag1', 'tag2', 'tag3']
			},
			{
				title: 'Project 2',
				description: 'This is a project description',
				image: 'https://picsum.photos/200/300',
				link: 'https://google.com',
				code: 'https://github.com',
				tags: ['tag1', 'tag2', 'tag3']
			}
		]
	}
};
