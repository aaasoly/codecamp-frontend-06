import FuctionalComponentChildPage from "../21-02-functional-component-child";

export default function FuctionalComponentParentPage() {
  // return <FuctionalComponentChildPage count={123} />;
  return <>{FuctionalComponentChildPage({ count: 123 })}</>;
}
