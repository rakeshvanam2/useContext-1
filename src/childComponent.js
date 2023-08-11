import SubChildComponent from "./subChildComponent";
const ChildComponent = (props) => {
  return (
    <div>
      <h2> child Componet</h2>
      <SubChildComponent userDetails={props.userDetails} />
    </div>
  );
};
export default ChildComponent;
