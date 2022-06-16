import { withAuth } from "../../../src/commons/hoc/withAuth";
import UsedItemDetail from "../../../src/components/unit/useditem/detail/UsedItem.detail.container";

function UsedItemDetailPage() {
  return (
    <div>
      <UsedItemDetail />
    </div>
  );
}

export default withAuth(UsedItemDetailPage);
