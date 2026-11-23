import { getWhoWeArePage, getSiteChrome } from '$lib/content/site';

export async function load() {
	const [page, chrome] = await Promise.all([getWhoWeArePage(), getSiteChrome()]);

	return { page, chrome, routeKey: 'educoreWhoWeAre' as const };
}
