export default Greeter;

declare class Greeter {
	constructor(message: string);
	showGreeting(p: Greeter.Person): void;
	logMessage(m: string): void;
}

declare namespace Greeter {
	export interface Person {
		name: string;
		lastName: string;
		address: string;
		age: number; 
	}
}