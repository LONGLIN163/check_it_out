import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PageComponent from "../components/PageComponent";
import SurveyItem from "../components/SurveyItem";
import TButton from "../components/ui/TButton";
import { UserStateContext } from "../store/ContextProvider";

const Surveys = () => {
    const {surveys}=UserStateContext();
    console.log(surveys)
    const onDeleteClick= () => {
      console.log("del....")
    }
    
    return (  
        <>
            <PageComponent 
              title="Surveys"
              buttons={(
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2"/>
                    Create
                </TButton>
              )}
            >
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