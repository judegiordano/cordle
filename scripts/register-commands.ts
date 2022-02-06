import { CommandBuilder } from '../src/Helpers';
import { HandlerType, ICommand } from '../src/Types';
import debug from 'debug';

const logSystem = debug('cordle:scripts');

async function main() {
	const commands = await CommandBuilder.ImportFiles<ICommand>(HandlerType.Commands);
	await CommandBuilder.RegisterCommands(commands);
}

try {
	main();
} catch (error) {
	console.log(error);
}
