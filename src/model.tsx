import { Step, BranchedStep, Definition, Branches } from 'sequential-workflow-designer';

export interface WorkflowDefinition extends Definition {
	properties: {
		alfa?: string;
	};
}

export interface TaskStep extends Step {
	componentType: 'task';
	type: 'task';
	name: string
	properties: {
		x?: string;
		y?: string;
	};
}

export interface SwitchStep extends BranchedStep {
	type: 'switch';
	name: string;
	properties: {
		x?: string;
		y?: string;
	};
	branches: Branches
}