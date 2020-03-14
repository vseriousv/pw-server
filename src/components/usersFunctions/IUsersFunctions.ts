export interface IUsersFunctions {
  getFunctions(): object[],
  getFunctionId(id: number): object,
  createFunction(id: number, name: string, body: string): void,
  updateFunction(id: number, name: string, body: string): void,
  removeFunction(id: number): void
}

