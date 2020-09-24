export interface Figure {
	createdAt: string;
	createdBy: number;
	deletedAt: string;
	deletedBy: string;
	groupFigureId: {
		closeAt: number;
		createdAt: string;
		createdBy: number;
		deletedAt: string;
		deletedBy: string;
		id: number;
		lastUpdatedAt: string;
		lastUpdatedBy: string;
		name: string;
		opportunity: number;
		selectFigure: boolean;
		status: string;
		used: boolean;
	};
	id: number;
	lastUpdatedAt: string;
	lastUpdatedBy: string;
	name: string;
	positionsWinner: Array<any>;
	status: string;
	used: boolean;
}
