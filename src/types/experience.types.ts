export type Experience = {
	firm: string;
	firmLink?: string;
	icon: string;
	color: string;
	position: string;
	time: string;
	start_date: Date | null;
	end_date: Date | null;
	location: string;
	skills: string[];
};

export type ExperienceArray = Experience[];
