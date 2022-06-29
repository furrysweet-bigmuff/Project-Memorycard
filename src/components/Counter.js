const Counter = (props) => {
  const { count, best } = props;
  return ( 
    <div className="counter">
      <span>Score: { count } | Best: { best }</span>
    </div>
   );
}
 
export default Counter