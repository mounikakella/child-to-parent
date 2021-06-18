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

class Parent1 extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child1 ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child1 extends React.Component {
  getAlert() {
    alert("getAlert from Child");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
