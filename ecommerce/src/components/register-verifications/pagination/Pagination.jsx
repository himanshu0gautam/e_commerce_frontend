
import style from './Pagination.module.css'
const Pagination = ({currentStep,setCurrentStep,totalSteps}) => {
    

    const increasePage = () => {
        if(currentStep<totalSteps) setCurrentStep(currentStep+1)
    }
    const decreasePage = () => {
        if(currentStep>1) setCurrentStep(currentStep-1)
    }

  return (
    <div className={style.pageContainer}>
        <span>Step {currentStep} of {totalSteps}</span>
        <div className={style.ButtonSection}>
            <button onClick={decreasePage} disabled={currentStep === 1}>Back</button>
            <button onClick={increasePage} disabled={currentStep === totalSteps}>Continue</button>
        </div>
    </div>
  )
}

export default Pagination