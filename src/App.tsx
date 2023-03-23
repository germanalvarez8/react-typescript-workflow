import { useEffect, useState } from 'react';
import { ObjectCloner, Step, StepsConfiguration, ToolboxConfiguration } from 'sequential-workflow-designer';
import { SequentialWorkflowDesigner, wrapDefinition } from 'sequential-workflow-designer-react';
import { GlobalEditor } from './GlobalEditor';
import { StepEditor } from './StepEditor';
import { createSwitchStep, createTaskStepWithName, createTaskStepList } from './StepUtils';
import { WorkflowDefinition } from './model';

const startDefinition: WorkflowDefinition = {
	properties: {},
	sequence: []
};

const toolboxConfiguration: ToolboxConfiguration = {
	groups: [
		{
			name: 'Status',
			steps: createTaskStepList(['ENVIADA', 'ENTREGADA', 'INGRESADA'])
		},
		{
			name: 'Actions',
			steps: [createTaskStepWithName('SendMessage')]
		},
		{
			name: 'Conditions',
			steps: [createSwitchStep()]
		},
	]
	// groups: [{ name: 'Status', steps: [createTaskStep(), createSwitchStep()] }]
};

const stepsConfiguration: StepsConfiguration = {
	validator: (step: Step) => Boolean(step.name)
};

export function App() {
	const [isVisible] = useState(true);
	const [definition, setDefinition] = useState(() => wrapDefinition(startDefinition));
	const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
	const [isReadonly, setIsReadonly] = useState(false);
	const definitionJson = JSON.stringify(definition.value, null, 2);

	useEffect(() => {
		console.log(`definition updated, isValid=${definition.isValid}`);
	}, [definition]);

	function toggleIsReadonlyClicked() {
		setIsReadonly(!isReadonly);
	}

	return (
		<>
			{isVisible && (
				<div>
					<SequentialWorkflowDesigner
						undoStackSize={10}
						definition={definition}
						onDefinitionChange={setDefinition}
						selectedStepId={selectedStepId}
						isReadonly={isReadonly}
						onSelectedStepIdChanged={setSelectedStepId}
						toolboxConfiguration={toolboxConfiguration}
						stepsConfiguration={stepsConfiguration}
						controlBar={true}
						globalEditor={<GlobalEditor />}
						stepEditor={<StepEditor />}
					/>
				</div>
			)}

			<ul>
				<li>Definition: {definitionJson.length} bytes</li>
				<li>Selected step: {selectedStepId}</li>
				<li>Is readonly: {isReadonly ? '✅ Yes' : 'No'}</li>
				<li>Is valid: {definition.isValid === undefined ? '?' : definition.isValid ? '✅ Yes' : '⛔ No'}</li>
			</ul>

			<div>
				<button onClick={toggleIsReadonlyClicked}>Toggle readonly</button>
			</div>

			<div>
				<textarea value={definitionJson} readOnly={true} cols={100} rows={15} />
			</div>
		</>
	);
}