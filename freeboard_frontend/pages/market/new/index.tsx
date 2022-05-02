import { withAuth } from "../../../src/commons/hoc/withAuth";
import CreateUsedItem from "../../../src/components/unit/useditem/write/UsedItem.write.container";

function CreateUsedItemPage() {
  return <CreateUsedItem isEdit={false} />;
}

export default withAuth(CreateUsedItemPage);
