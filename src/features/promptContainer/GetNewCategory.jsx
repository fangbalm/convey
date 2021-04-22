import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import * as Yup from 'yup';
import GetNewPrompt from "./GetNewPrompt";

function GetNewCategory({currentUser, setCurrentUser, allJournals, setAllJournals, allPrompts, setAllPrompts, allCategories, setNewSelectedCategory, newSelectedCategory, setNewEntryPrompt}){

    const [isSubmitted, setIsSubmitted] = useState(false); 
    const validationSchema = Yup.object({
        category: Yup.string().required('Please Select Category'),
      });
    
    return(
    <div className="get-new-category">
    <Segment clearing>
    <Formik
      initialValues={{
        categorySelection: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          setNewSelectedCategory(values)
          setIsSubmitted(true); 
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          <div className="col-sm-12">
            <h3>Get Category</h3>
          </div>
          <div className="col-sm-12">
            <Form className='ui form'>
              <div className="form-group">
                <br />
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="categorySelection"
                    value="Social"
                    id="inlineRadio1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                Social
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="categorySelection"
                    value="Vent"
                    id="inlineRadio2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                Vent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="categorySelection"
                    value="Self-Care"
                    id="inlineRadio3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                Self-Care
                  </label>
                </div>
              </div>
              <div className="form-group">
                <Button className="submit-category-btn" type="submit">
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
    </Segment>
    {isSubmitted ? <GetNewPrompt allCategories={allCategories} allPrompts={allPrompts} setAllPrompts={setAllPrompts} currentUser={currentUser} setCurrentUser={setCurrentUser} allJournals={allJournals} setAllJournals={setAllJournals}  setNewSelectedCategory={setNewSelectedCategory} newSelectedCategory={newSelectedCategory} setNewEntryPrompt={setNewEntryPrompt}/> : null}
    </div>
    )
};
export default GetNewCategory;  