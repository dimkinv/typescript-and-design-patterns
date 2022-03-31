import { Observer } from "./Observer";

// The object that has some interesting state is often called subject.

export interface Subject {
  // Attach an observer to the subject.
  addObserver(observer: Observer): void;
  // Detach an observer from the subject.
  removeObserver(observer: Observer): void;
  // Notify all observers about an event.
  notifyObservers(): void;
}
