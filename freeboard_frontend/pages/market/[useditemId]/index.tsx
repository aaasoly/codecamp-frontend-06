import UseditemQuestionList from "../../../src/components/unit/useditem/comment/list/Comment.List.container";
import UseditemQuestionWrite from "../../../src/components/unit/useditem/comment/write/Question.Write.container";
import UsedItemDetail from "../../../src/components/unit/useditem/detail/UsedItem.detail.container";

export default function UsedItemDetailPage() {
  return (
    <div>
      <UsedItemDetail />
      <UseditemQuestionWrite />
      <UseditemQuestionList />
    </div>
  );
}
