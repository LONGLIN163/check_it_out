import PageComponent from "../components/PageComponent";
import SurveyItem from "../components/SurveyItem";
import { UserStateContext } from "../store/ContextProvider";

const Surveys = () => {
    const {surveys}=UserStateContext();
    console.log(surveys)
    const onDeleteClick= () => {
      console.log("del....")
    }
    
    return (  
        <>
            <PageComponent title="Surveys">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {
                        surveys.map(
                            survey => (
                              <SurveyItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                            )
                          )
                    }

                </div>
            </PageComponent>
        </>
    );
}
 
export default Surveys;