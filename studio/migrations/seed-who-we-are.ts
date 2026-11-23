import {getCliClient} from 'sanity/cli'

// Seeds the EDUcore "Who We Are" team page (_id: whoWeAre) and adds a
// "Who We Are" nav item to the EDUcore navigation. Idempotent; safe to re-run.
//
//   npx sanity exec migrations/seed-who-we-are.ts --with-user-token
//
// Run AFTER the whoWeAre schema is deployed (npm run studio:deploy).
// Photos were uploaded to the dataset separately; referenced here by asset id.

const client = getCliClient({apiVersion: '2026-06-01'})

type Block = {
	_type: 'block'
	_key: string
	style: 'normal'
	markDefs: never[]
	children: {_type: 'span'; _key: string; text: string; marks: string[]}[]
}

type MemberSeed = {
	slug: string
	name: string
	role: string | null
	affiliation: string | null
	photo: string | null
	bio: string[]
}

function paragraphs(slug: string, paras: string[]): Block[] {
	return paras.map((text, i) => ({
		_type: 'block',
		_key: `${slug}-b${i}`,
		style: 'normal',
		markDefs: [],
		children: [{_type: 'span', _key: `${slug}-s${i}`, text, marks: []}]
	}))
}

const seeds: MemberSeed[] = [
	{
		"slug": "duane-brown",
		"name": "Duane Brown",
		"role": null,
		"affiliation": null,
		"photo": "image-c1af5f9f37b9c5b37a8c980a6d320efd6f1ed4ea-1256x1288-jpg",
		"bio": [
			"Duane Brown is a Senior Business Analyst at AEM Corporation with 18 years of experience in education data standards, interoperability, and state longitudinal data systems. He serves as Open Source Community Lead for the Common Education Data Standards (CEDS), facilitating collaboration among federal, state, and local education stakeholders to advance standards evolution and community engagement nationwide."
		]
	},
	{
		"slug": "david-clarkson",
		"name": "David Clarkson",
		"role": "Stakeholder Partnership Manager",
		"affiliation": null,
		"photo": "image-427641fefff721ba687383def902fb879acdbf0d-972x1296-jpg",
		"bio": [
			"David Clarkson is a business and IT professional with more than 25 years of experience bridging the gap between technical teams and the stakeholders they serve. His career spans healthcare IT, HR technology, staffing solutions, and internet infrastructure — with a consistent focus on building durable relationships, translating complex needs into actionable outcomes, and shepherding organizations through change. He has managed client portfolios at the enterprise level, led service delivery operations, and served as a liaison between engineering teams and C-suite stakeholders across industries. At EDUcore, David brings that same relationship-driven approach to stakeholder outreach — connecting practitioners, agencies, and community members with the standards work underway and ensuring that the voices of those closest to education and workforce challenges are heard and reflected in the project's development."
		]
	},
	{
		"slug": "brandon-dorman",
		"name": "Brandon Dorman",
		"role": "Lead Solution Architect",
		"affiliation": null,
		"photo": "image-6b46bf2c50f04e66f15fb1170b02d560702d79bb-2000x1333-jpg",
		"bio": [
			"Brandon was a math teacher for 9 years before jumping into education technology in 2014 to help make technology work for everyone. He's been involved in 1EdTech and HROpen Skills related workgroups for a handful of years as well as building products from Early Education through Workforce to make learning visible. Past positions include Director of Skills, Senior Product Manager, Interoperability Expert, AI consultant and now Solution Architect."
		]
	},
	{
		"slug": "jim-goodell",
		"name": "Jim Goodell",
		"role": null,
		"affiliation": null,
		"photo": "image-8f88545847c49eaf7ecb998a71d5e3b2a9b0a727-1424x2000-jpg",
		"bio": [
			"Jim Goodell is founder of INFERable, a Public Benefit Corporation democratizing access to learning analytics to support adaptive learning on any platform. He is editor and co-author of Learning Engineering Toolkit, Chair of the IEEE Learning Technology Standards Committee, and Secretary of the Board of Directors of the Institute for Infrastructure and Interoperable Data in Learning. He is a consultant to the U.S. Chamber of Commerce Foundation's T3 Innovation Network and leads Architecture and Development for the Jobs and Employment Data Exchange (JEDx). He co-led development of the Learning and Employment Record (LER) Wrapper Specification."
		]
	},
	{
		"slug": "alex-jackl",
		"name": "Alex Jackl",
		"role": "Project Director",
		"affiliation": null,
		"photo": "image-6c3cf2218e22bacc522706e245034f77c937e2a3-800x786-webp",
		"bio": [
			"Alex Jackl, CEO and Chief Technology Officer of Landmark Worldwide, has volunteered for decades leading education standards bodies, councils, and consortiums nationwide. He is on the Board of Directors for the Post Secondary Standards Council (PESC), Co-Chair of the PESC Micro-Credentials Task Force, Co-Chair of the North American Technical Board of Access For Learning (A4L), Co-Chair of 1434.3 IEEE Working Group, and Chair of the Data and Technology Standards Network (DTSN) for the T3 Innovation Network (U.S. Chamber of Commerce Foundation). Alex is a technology strategist, futurist, and data scientist who specializes in developing ecosystems that support learners and educators."
		]
	},
	{
		"slug": "jim-kelly",
		"name": "Jim Kelly",
		"role": "Use Cases",
		"affiliation": null,
		"photo": "image-975a78699724fc185c7ed2db02475eaa434bedc1-269x283-jpg",
		"bio": [
			"Jim Kelly is a subject matter expert in educational and workforce data interoperability with over two decades of leadership experience. He served 20 years as Chief Technology and Information Officer for Educational Credential Evaluators (ECE), where he implemented the PESC XML Transcript in ECE’s Evaluation Reports. His consulting work spans major public education systems, including multiple California Community Colleges Chancellor’s Office initiatives and four SUNY data projects totaling $40M. He co-authored the seminal LER definition document and contributed to IEEE 1484.2-2024. Active with PESC since 2015—serving as Board Chair, helping found the PESC GEO Code, and contributing to the PESC JSON-LD Transcript standard—he currently leads use case development for the EDUcore project."
		]
	},
	{
		"slug": "john-lovell",
		"name": "John Lovell",
		"role": null,
		"affiliation": null,
		"photo": "image-51b4a19ef6fa4819d5524f20c84f68bdff5fe9cd-325x326-png",
		"bio": [
			"John Lovell is a technology leader focused on education data interoperability, privacy, and standards-based innovation. He works at the intersection of K–12 data systems, technical architecture, and community-driven standards efforts, helping organizations turn complex data challenges into practical, scalable solutions. His work has included advancing interoperability initiatives, supporting privacy-focused data practices, and exploring how emerging technologies such as AI and semantic data models can strengthen the future of education technology."
		]
	},
	{
		"slug": "joshua-marks",
		"name": "Joshua Marks",
		"role": null,
		"affiliation": null,
		"photo": "image-9a4b3b471396a7eaeeff38eff969f0ba1848486f-750x563-jpg",
		"bio": []
	},
	{
		"slug": "david-k-moldoff",
		"name": "David K. Moldoff",
		"role": "Founding Architect, P20W+ Strategy and Semantic Interoperability",
		"affiliation": "Founder and CEO, AcademyOne | Founder, KSAWorks",
		"photo": "image-5633a266db3a9c6ac3efccf0b8dee591b89cdf9c-1080x1080-jpg",
		"bio": [
			"David K. Moldoff is an entrepreneur, researcher, author, and technology architect whose work connects education policy, lifelong learning, and workforce opportunity. As founder and CEO of AcademyOne and founder of KSAWorks, he develops systems that help people navigate educational pathways and gain recognition for learning acquired throughout their lives.",
			"For more than three decades, David has contributed leadership, advisory service, and volunteer expertise to education data standards and interoperability efforts through PESC, IMS Global, Internet2, A4L, CEDS, DSU (Data Standards United) the Groningen Declaration Network, RS3G, and early Statewide Longitudinal Data Systems initiatives. His research examines global, national, and regional education policies and practices, with particular emphasis on prior learning assessment and recognition, academic credit portability, and connections between education and work.",
			"An inventor and incubator of new technologies, David brings extensive experience in cloud architecture, systems integration, and data management across institutions and the P20W+ continuum—from early learning through postsecondary education and the workforce. His current work explores how semantic dictionaries, shared data standards, and large language models can support scalable enterprise systems and trustworthy applications of artificial intelligence.",
			"David is the author of seven books, including the Pedegreed series, and an invited speaker and panelist on education policy, learning recognition, interoperability, and emerging technologies. He brings to EDUcore a perspective grounded in standards collaboration, practical engineering, and a commitment to making learning more visible, portable, and valued."
		]
	},
	{
		"slug": "elizabeth-murphy",
		"name": "Elizabeth Murphy",
		"role": "Program Director",
		"affiliation": null,
		"photo": null,
		"bio": []
	},
	{
		"slug": "greg-nadeau",
		"name": "Greg Nadeau",
		"role": null,
		"affiliation": null,
		"photo": "image-0f2b3f05bed3863f5ff0b553e309df57e10d3584-228x288-jpg",
		"bio": [
			"For 30+ years, Greg has been leading innovative education and workforce data systems projects and standards at the local, state, and national levels. As CIO of the MA DOE and then as a consultant, Greg has directed successful statewide education data projects in 11 states. He led the team that created the CEDS data model, co-chaired the development of CASE and CLR standards at IMS Global, and led the workgroup that published IEEE 1484.2, the LER Ecosystem Standard. Greg is the convenor of Ed3."
		]
	},
	{
		"slug": "vince-paredes",
		"name": "Vince Paredes",
		"role": "Developer and JEDx Liason",
		"affiliation": null,
		"photo": "image-023d1ab3a14ad49c2cec43aa68435d3359406c90-1024x1024-webp",
		"bio": [
			"Vince Paredes is Chief Data Architect at Bardic Systems with over 20 years in education data standards, including more than a decade contributing to SIF. He has led major initiatives, including the development of a national education data model and ontology using semantic web technologies like OWL and RDF. With a background spanning software development, statistics, and research into how people learn, Vince brings both technical depth and real-world perspective to building systems that drive better outcomes."
		]
	},
	{
		"slug": "kayla-smith",
		"name": "Kayla Smith",
		"role": null,
		"affiliation": null,
		"photo": null,
		"bio": [
			"Stakeholder Outreach."
		]
	},
	{
		"slug": "tq-white-ii",
		"name": "TQ White II",
		"role": "AI Genius",
		"affiliation": null,
		"photo": "image-0c3859135517f046745e720302346912a3bd6ddc-194x185-jpg",
		"bio": [
			"TQ White II is a visionary architect of digital solutions and master programmer with a 72-year legacy of technological mastery. At Databright Management Systems, he operates at the intersection of high-level strategy and hands-on engineering—specializing in advanced API design, database schema, and server administration. A true polymath, TQ combines deep expertise in JavaScript, MongoDB, and BASH with a creative flair for UI design and single-page applications. He blends the rigorous discipline of a veteran developer with the adventurous spirit of a \"bon vivant,\" making him not just a coder, but a craftsman of digital joy and efficiency."
		]
	}
]

const members = seeds.map((m) => ({
	_key: m.slug,
	_type: 'teamMember',
	name: m.name,
	...(m.role ? {role: m.role} : {}),
	...(m.affiliation ? {affiliation: m.affiliation} : {}),
	...(m.photo
		? {photo: {_type: 'image', asset: {_type: 'reference', _ref: m.photo}, alt: m.name}}
		: {}),
	bio: paragraphs(m.slug, m.bio)
}))

const doc = {
	_id: 'whoWeAre',
	_type: 'whoWeAre',
	hero: {
		_type: 'heroContent',
		chip: 'EDUcore',
		title: 'Who We Are',
		description:
			'The people building the shared semantic backbone for education and workforce data interoperability.',
		ctas: []
	},
	members
}

await client.createOrReplace(doc)
console.log(`Seeded whoWeAre with ${members.length} team members.`)

// Add a "Who We Are" nav item to the EDUcore navigation (idempotent).
const educoreNav = await client.getDocument('sitePageEducore')
if (!educoreNav) {
	console.warn('sitePageEducore not found — add the "Who We Are" nav item manually.')
} else {
	const items = (educoreNav.navigationItems as {destination?: {pageKey?: string}}[]) ?? []
	if (items.some((item) => item.destination?.pageKey === 'educoreWhoWeAre')) {
		console.log('EDUcore nav already links to Who We Are — no change.')
	} else {
		await client
			.patch('sitePageEducore')
			.setIfMissing({navigationItems: []})
			.append('navigationItems', [
				{
					_key: 'who-we-are',
					_type: 'navItem',
					label: 'Who We Are',
					disabled: false,
					hidden: false,
					destination: {_type: 'linkDestination', type: 'internalPage', pageKey: 'educoreWhoWeAre'}
				}
			])
			.commit()
		console.log('Added "Who We Are" nav item to the EDUcore navigation.')
	}
}
