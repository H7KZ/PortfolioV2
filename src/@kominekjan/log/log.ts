import { usePocketBase } from '$kominekjan/PocketBase';
import type { RequestEvent } from '@sveltejs/kit';

export default async function log(
	event: RequestEvent<Partial<Record<string, string>>, string | null>
): Promise<void> {
	usePocketBase
		.collection('logs')
		.create({
			a_im: event.request.headers.get('A-IM')?.toString(),
			accept: event.request.headers.get('Accept')?.toString(),
			accept_charset: event.request.headers.get('Accept-Charset')?.toString(),
			accept_datetime: event.request.headers.get('Accept-Datetime')?.toString(),
			accept_encoding: event.request.headers.get('Accept-Encoding')?.toString(),
			accept_language: event.request.headers.get('Accept-Language')?.toString(),
			access_control_request_method: event.request.headers
				.get('Access-Control-Request-Method')
				?.toString(),
			authorization: event.request.headers.get('Authorization')?.toString(),
			cache_control: event.request.headers.get('Cache-Control')?.toString(),
			connection: event.request.headers.get('Connection')?.toString(),
			content_encoding: event.request.headers.get('Content-Encoding')?.toString(),
			content_length: event.request.headers.get('Content-Length')?.toString(),
			content_md5: event.request.headers.get('Content-MD5')?.toString(),
			content_type: event.request.headers.get('Content-Type')?.toString(),
			cookie: event.request.headers.get('Cookie')?.toString(),
			date: event.request.headers.get('Date')?.toString(),
			expect: event.request.headers.get('Expect')?.toString(),
			forwarded: event.request.headers.get('Forwarded')?.toString(),
			from: event.request.headers.get('From')?.toString(),
			host: event.request.headers.get('Host')?.toString(),
			http2_settings: event.request.headers.get('HTTP2-Settings')?.toString(),
			if_match: event.request.headers.get('If-Match')?.toString(),
			if_modified_since: event.request.headers.get('If-Modified-Since')?.toString(),
			if_none_match: event.request.headers.get('If-None-Match')?.toString(),
			if_range: event.request.headers.get('If-Range')?.toString(),
			if_unmodified_since: event.request.headers.get('If-Unmodified-Since')?.toString(),
			max_forwards: event.request.headers.get('Max-Forwards')?.toString(),
			origin: event.request.headers.get('Origin')?.toString(),
			pragma: event.request.headers.get('Pragma')?.toString(),
			prefer: event.request.headers.get('Prefer')?.toString(),
			proxy_authorization: event.request.headers.get('Proxy-Authorization')?.toString(),
			range: event.request.headers.get('Range')?.toString(),
			referer: event.request.headers.get('Referer')?.toString(),
			te: event.request.headers.get('TE')?.toString(),
			trailer: event.request.headers.get('Trailer')?.toString(),
			transfer_encoding: event.request.headers.get('Transfer-Encoding')?.toString(),
			user_agent: event.request.headers.get('User-Agent')?.toString(),
			upgrade: event.request.headers.get('Upgrade')?.toString(),
			via: event.request.headers.get('Via')?.toString(),
			warning: event.request.headers.get('Warning')?.toString(),
			x_forwarded_for: event.request.headers.get('X-Forwarded-For')?.toString(),
			x_forwarded_host: event.request.headers.get('X-Forwarded-Host')?.toString(),
			x_forwarded_proto: event.request.headers.get('X-Forwarded-Proto')?.toString(),
			x_att_deviceid: event.request.headers.get('X-ATT-DeviceId')?.toString(),
			x_uidh: event.request.headers.get('X-UIDH')?.toString(),
			x_csrf_token: event.request.headers.get('X-CSRF-Token')?.toString(),
			x_request_id: event.request.headers.get('X-Request-ID')?.toString(),
			save_data: event.request.headers.get('Save-Data')?.toString()
		})
		.catch((err) => console.error('| PB: ', err.data.code, err.data.message));
}
