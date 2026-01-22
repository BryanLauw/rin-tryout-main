import { fetchExamByUserId } from "@/be/fetch/question";
import PageMessage from "@/components/PageMessage";
import { getErrorMessage } from "@/lib/getErrorMessage";
import DomLoaded from "@/components/DomLoaded";
import Exam from "./_components/Exam";
import { ExamProvider } from "../../../context/ExamContext";
import { getUser, isUserHasAnswer } from "@/be/action/user";
import EndExam from "./_components/EndExam";
import CheckClientId from "./_components/CheckClientId";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  try {
    const exam = await fetchExamByUserId(id);
    const res = await isUserHasAnswer(id);

    console.log("id", id);
    console.log("res", res);
    console.log("exam", exam);

    if (res.hasAnswer) return <EndExam />;

    return (
      <DomLoaded>
        <ExamProvider exam={exam} userId={id}>
          <CheckClientId>
            <Exam />
          </CheckClientId>
        </ExamProvider>
      </DomLoaded>
    );
  } catch (error) {
    return <PageMessage>{getErrorMessage(error)}</PageMessage>;
  }
}
