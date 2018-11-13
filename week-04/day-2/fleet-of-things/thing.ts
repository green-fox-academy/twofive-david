class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }

  get getName() {
    return this.name;
} 

	get isComplete() {
		return this.completed;
    }
}

export { Thing };
