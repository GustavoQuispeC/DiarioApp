
import { DiarioLayout } from "../layout/DiarioLayout";
import { NoteView } from "../views";

export const DiarioPage = () => {
  return (
    <>
      <DiarioLayout>
        {/* <NothingSelectedView /> */}
        <NoteView />
      </DiarioLayout>
    </>
  );
};
