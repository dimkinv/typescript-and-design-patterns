export interface Observer {
  name: string;
  // Receive update from subject.
  update(newData: any): void;
}
