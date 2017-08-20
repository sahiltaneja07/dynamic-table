export class Company {
	constructor(
		public description: string,
		public employees: number,
		public founders: string[],
		public location: string,
		public market: string[],
		public name: string,
		public stage: string,
		public website: string
	) {}
}
