// Pass data and function using functional component

const Parent = () => {
  const [name, setName] = useState("test");
  const childRef = useRef();
  return (
    <div>
      <button onClick={() => childRef.current.childFunc()}>
        Click in parent to call child function
      </button>
      {name}
      <Child
        parentCallback={(data) => {
          console.log(data);
          setName(data);
        }}
        ref={childRef}
      />
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  console.log(ref);
  useImperativeHandle(ref, () => ({
    childFunc() {
      console.log("this is child fun");
    },
  }));
  return (
    <div>
      <input
        type="submit"
        value="Child button"
        onClick={() => {
          console.log("hii");
          props.parentCallback("Data9");
        }}
      />
    </div>
  );
});
