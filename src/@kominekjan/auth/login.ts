import type { ErrorKominekJan } from '$kominekjan/types/error.type';

export default async function login(
	username: string,
	password: string
): Promise<boolean | ErrorKominekJan> {
	return true;
}
