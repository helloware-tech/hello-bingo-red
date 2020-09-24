export interface Profile {
	accountNonExpired: boolean;
	accountNonLocked: boolean;
	authorities: string;
	createdAt: string;
	createdBy: number;
	credentialsExpired: boolean;
	credentialsNonExpired: boolean;
	deletedAt: string;
	deletedBy: string;
	enabled: boolean;
	expired: boolean;
	lastNames: string;
	lastUpdatedAt: string;
	lastUpdatedBy: number;
	locked: boolean;
	names: string;
	password: string;
	rolDTO: {
		rolId: number;
		name: string;
		status: string;
		createdAt: string;
		createdBy: string;
	};
	rolId: number;
	status: string;
	userId: number;
	username: string;
}
