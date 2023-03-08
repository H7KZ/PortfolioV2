import LanguagesAndTools from '$lib/LanguagesAndTools/LanguagesAndTools.svelte';

export default {
	component: LanguagesAndTools,
	props: {
		title: 'Languages and tools',
		content: [
			{
				icon: '/icons/csharp.png',
				href: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
			},
			{
				icon: '/icons/js.png',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{
				icon: '/icons/ts.png',
				href: 'https://www.typescriptlang.org/'
			},
			{
				icon: '/icons/java.png',
				href: 'https://www.java.com/en/'
			},
			{
				icon: '/icons/html.png',
				href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
			},
			{
				icon: '/icons/css.png',
				href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
			},
			{
				icon: '/icons/sass.png',
				href: 'https://sass-lang.com/'
			},
			{
				icon: '/icons/tailwind.png',
				href: 'https://tailwindcss.com/'
			},
			{
				icon: '/icons/express.png',
				href: 'https://expressjs.com/'
			},
			{
				icon: '/icons/nodejs.png',
				href: 'https://nodejs.org/en/'
			},
			{
				icon: '/icons/svelte.png',
				href: 'https://svelte.dev/'
			},
			{
				icon: '/icons/react.png',
				href: 'https://reactjs.org/'
			},
			{
				icon: '/icons/vue.png',
				href: 'https://vuejs.org/'
			},
			{
				icon: '/icons/mongo.png',
				href: 'https://www.mongodb.com/'
			},
			{
				icon: '/icons/pocketbase.png',
				href: 'https://www.pocketbase.io/'
			},
			{
				icon: '/icons/git.png',
				href: 'https://git-scm.com/'
			},
			{
				icon: '/icons/tux.png',
				href: 'https://www.linux.org/'
			},
			{
				icon: '/icons/mui.png',
				href: 'https://mui.com/'
			},
			{
				icon: '/icons/playwright.png',
				href: 'https://playwright.dev/'
			},
			{
				icon: '/icons/slack.png',
				href: 'https://slack.com/'
			},
			{
				icon: '/icons/teams.png',
				href: 'https://teams.microsoft.com/'
			},
			{
				icon: '/icons/github.png',
				href: 'https://github.com/'
			},
			{
				icon: '/icons/gitlab.png',
				href: 'https://about.gitlab.com/'
			},
			{
				icon: '/icons/vs2022.png',
				href: 'https://visualstudio.microsoft.com/vs/'
			},
			{
				icon: '/icons/vscode.png',
				href: 'https://code.visualstudio.com/'
			},
			{
				icon: '/icons/postman.png',
				href: 'https://www.postman.com/'
			},
			{
				icon: '/icons/figma.png',
				href: 'https://www.figma.com/'
			}
		]
	}
};
