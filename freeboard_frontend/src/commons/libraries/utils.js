export const getDate = (date) => {
  const today = new Date();
  const newDate = new Date(date);

  const gapTime = Math.floor((today.getTime() - newDate.getTime()) / 1000 / 60);
  if (gapTime < 1) return "방금전";
  if (gapTime < 60) {
    return `${gapTime}분전`;
  }

  const gapHour = Math.floor(gapTime / 60);
  if (gapHour < 24) {
    return `${gapHour}시간전`;
  }

  const gapDay = Math.floor(gapTime / 60 / 24);
  if (gapDay < 7) {
    return `${gapDay}일전`;
  }

  const yyyy = newDate.getFullYear();
  const mm = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const dd = newDate.getDate().toString().padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
