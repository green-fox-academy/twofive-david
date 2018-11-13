import { Thing } from "./thing";

class Fleet {
	private things: Thing[];


	constructor() {
		this.things = [];
	}

	add(thing: Thing) {
		this.things.push(thing);
	}

	get theseThings() {
		return this.things;
	}

	print() {
		for (let i = 0; i < this.things.length; i++) {
			if (this.things[i].isComplete) {
				console.log(`[x] ${this.things[i].getName}`);
			} else {
				console.log(`[ ] ${this.things[i].getName}`);
			}
		}
	}

}
export { Fleet };