export interface Observer {
  // Receive update from subject.
  update(newData: any): void;
}
