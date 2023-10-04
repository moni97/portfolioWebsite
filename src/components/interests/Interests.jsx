import "./interests.scss";
import VerticalTabs from '../verticalTabs/VerticalTabs';

export default function Interests() {
    const tabs = [
        {
          label: 'Airtifical Intelligence',
          content: <div className="aiTab">
            <ul className="tabContentList">
              <li>- Pursuing a Doctorate, under Professor Piotr Gmytriciewicz(check spelling).</li>
              <li>- Developing new frameworks and insights into multi-agent interaction and communication. </li>
              <li>- Looking into the theory of mind and architectures for multi-agent planning. </li>
              <li>- Looking into multi-agent communication possible models of communication and information volunteering in different environments.</li>
            </ul>
        </div>,
        },
        {
          label: 'Reinforcement Learning',
          content: <div className="aiTab"> Citations (mention as a point somehow)
          - I developed a research paper based off of it @ link to paper.
          (Slideshow of how the project works if possible?)
          - Link to the project with thiru. 
        </div>,
        },
        {
          label: 'Data Science',
          content: <div className="dsTab"> 
          - I'm an excellent orator and very proficient at Data Science storytelling.
- Proficient at deploying and training models on extremely large amounts of data.
- Adept at inventing and developing new use cases from scratch that add value to an organization.
          </div>,
        },
        {
          label: 'Deep Learning',
          content: <div className="dlTab">- Adept at using pytorch for Developing, Training, and Finetuning Models.
          - Adept at theory and practical use of novel Reinforcement Learning architectures. 
          - Passed a really hard Neural Networks Class CD 569(number wrong).</div>,
        },
        {
            label: 'Computer Vision',
            content: <div className="cvTab">- Can develop and use computer vision models for real-world applications for example Classifying videos from camera videos attached to aurdrino chips)
            - Developed solutions to classify objects Based on extracted pixel ratios from raw pixel data</div>,
        },
      ];

    return (
        <div className="interests sectionDefault">
          <p className="sectionHeading">What I do?</p>
            <VerticalTabs tabs={tabs} />
        </div>
    )
}