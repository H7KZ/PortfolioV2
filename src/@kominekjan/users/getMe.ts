import { User } from '../types/user.types';

export default async function getMe(): Promise<User> {
	return new User('', '', '', '', '', '', false, false, '', '', '', '', []);
}
