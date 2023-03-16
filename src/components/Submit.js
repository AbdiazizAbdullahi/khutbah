import React from 'react'
import '../CSS/Submit.css'

function Submit() {
  return (
    <div className='submit'>
      <div className="submit-container">
        <div className="submit-form">
            <h2 className="submit-header">Submit Khutbah PDF</h2>
            <p className="submit-text">Please make sure the file you upload is in PDF format</p>
            <form action="submit">
              <label >Title</label>
              <input type="text" name='title' placeholder='name of title' />
              <label>Category</label>
              <input type="text" name='category' placeholder='choose category'/>
              <label >PDF</label>
              <input type="file" name="file" id="file" />
              <button>Submit</button>
            </form>
        </div>
        <div className="info">
          <h2>FAQ</h2>
          <h3>What is Lorem Ipsum?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <br />
          <h3>How do I use Lorem Ipsum?</h3>
          <p>Lorem Ipsum is often used as a placeholder in designs and layouts to give an idea of what the final product will look like. Simply copy and paste the Lorem Ipsum text into your design or layout.</p>
          <br />
          <h3>Why do I use Lorem Ipsum?</h3>
          <p>Lorem Ipsum is used as a placeholder text because it has a more-or-less normal distribution of letters, making it look like readable English. This makes it easier to visualize the design or layout of a document or website.</p>
          <br />
          <h3>Where does Lorem Ipsum come from?</h3>
          <p>Lorem Ipsum is derived from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. The original text was altered to create the Lorem Ipsum passage.</p>
        </div>
      </div>
    </div>
  )
}

export default Submit;