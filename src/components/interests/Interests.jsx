import "./interests.scss";
import VerticalTabs from '../verticalTabs/VerticalTabs';

export default function Interests() {
    const tabs = [
        {
          label: 'Airtifical Intelligence',
          content: <div className="aiTab">In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

        </div>,
        },
        {
          label: 'Data Science',
          content: <div className="dsTab"> 
             Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of 'dolorem ipsum' ('pain itself').
          
          Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI
          </div>,
        },
        {
          label: 'Deep Learning',
          content: <div className="dlTab">This is deep learning tab</div>,
        },
        {
            label: 'Computer Vision',
            content: <div className="cvTab">This is computer vision tab</div>,
        },
      ];

    return (
        <div className="interests sectionDefault">
          <p className="sectionHeading">What I do?</p>
            <VerticalTabs tabs={tabs} />
        </div>
    )
}