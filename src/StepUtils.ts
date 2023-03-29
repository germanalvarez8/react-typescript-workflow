import { Uid, Branches } from 'sequential-workflow-designer';
import { SwitchStep, TaskStep } from './model';

export function createTaskStep(): TaskStep {
	return {
		id: Uid.next(),
		componentType: 'task',
		type: 'task',
		name: 'chau',
		properties: {}
	};
}

export function createSwitchStep(): SwitchStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'switch',
		name: 'if',
		properties: {},
		branches: {
			true: [],
			false: []
		}
	};
}

export function createSwitchStepWithName(): SwitchStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'switch',
		name: 'if',
		properties: {},
		branches: {
			true: [],
			false: []
		}
	};
}

export function createInitialSwitchStep(name: string, branches: Branches): SwitchStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'switch',
		name: name,
		properties: {},
		branches: branches
	};
}

export function createTaskStepWithName(step: string): TaskStep {
	return {
		id: Uid.next(),
		componentType: 'task',
		type: 'task',
		name: step,
		properties: {}
	};
}

export function createTaskStepList(steps: string[]): TaskStep[] {
	return steps.map((step) => (createTaskStepWithName(step)));
}