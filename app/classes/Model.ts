
export class Course {		
	private title: string;
	private hours: number;
	private teacher: Teacher;
	private level: string;
	private active: boolean;

	constructor(title: string, hours: number, teacher: Teacher, level: string, active: boolean) {
		this.title = title;
		this.hours = hours;
		this.teacher = teacher;
		this.level = level;
		this.active = active;
	}
	
	public getTitle(): string {
		return this.title;
	}
	public getHours(): number {
		return this.hours;
	}
	public getTeacher(): Teacher {
		return this.teacher;
	}
	public getLevel(): string {
		return this.level;
	}
	public isActive(): boolean {			
		return this.active;			
	}
}

export class Teacher {
	private id: number;
	private name: string;
	private lastName1: string;
	private lastName2: string;

	constructor(id: number, name?: string, lastName1?: string, lastName2?: string) {
		this.id = id;
		this.name = name;
		this.lastName1 = lastName1;
		this.lastName2 = lastName2;
	}

	public getName(): string {
		return this.name;
	}
	public getLastName1(): string {
		return this.lastName1;
	}
	public getApellido2(): string {
		return this.lastName2;
	}
}