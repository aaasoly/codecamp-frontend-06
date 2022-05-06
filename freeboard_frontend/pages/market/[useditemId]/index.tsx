import { withAuth } from "../../../src/commons/hoc/withAuth";
import UseditemQuestionList from "../../../src/components/unit/useditem/comment/question_list/Question.List.container";
import UseditemQuestionWrite from "../../../src/components/unit/useditem/comment/question_write/Question.Write.container";
import UsedItemDetail from "../../../src/components/unit/useditem/detail/UsedItem.detail.container";

function UsedItemDetailPage() {
  return (
    <div>
      <UsedItemDetail />
      <UseditemQuestionWrite />
      <UseditemQuestionList />
    </div>
  );
}

export default withAuth(UsedItemDetailPage);
