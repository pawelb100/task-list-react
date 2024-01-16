import { SectionStyled, SectionHeader, SectionTitle, SectionContent } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionStyled>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionContent>
            {body}
        </SectionContent>
    </SectionStyled>
);

export default Section;