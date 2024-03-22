function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button onClick={() => setCounter(counter + 1)} className="btn btn-primary">
            Increment</button>
          <button onClick={() => setCounter(counter - 1)} className="btn btn-primary">
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;