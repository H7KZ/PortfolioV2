import TestimonialContent from '$src/lib/Testimonial/Testimonial.svelte';

export default {
	component: TestimonialContent,
	props: {
		title: 'TESTIMONIALS',
		reviews: [
			{
				name: 'John Doe',
				position: 'CEO at Company',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, nec aliquam nisl nunc vel lorem. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, nec aliquam nisl nunc vel lorem.',
				image: '/images/JohnDoe.png'
			},
			{
				name: 'John Doe',
				position: 'CEO at Company',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, nec aliquam nisl nunc vel lorem. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, nec aliquam nisl nunc vel lorem.',
				image: '/images/JohnDoe.png'
			}
		]
	}
};
