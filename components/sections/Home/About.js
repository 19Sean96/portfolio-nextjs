import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledSection = styled.section`
  opacity: ${props => props.inView ? 1 : 0};
  transition: .75s opacity ease-in-out;
`
const StyledArticle = styled.article`
opacity: ${props => props.inView ? 1 : 0};
transform: translate${props => props.inView ? "(0,0)" : props.translate};
transition: .25s opacity ${props => props.delay}s ease-in-out,
            .5s transform ${props => props.delay}s ease-out;
`

export default function About() {

  const [ref, inView, entry] = useInView({
    threshold: .43
  })

  return (
    <StyledSection className="about page" inView={inView} ref={ref}>
      <div className="about__wrapper">
        <h3 className="about--title">about.</h3>
        <div className="about--paragraph__wrapper">
          <StyledArticle inView={inView} delay={.1} translate={"(0,-25%)"} className="about--paragraph about--paragraph-1">
            <h4 className="about--paragraph--title">Process</h4>
            <p class="about--paragraph--text">
              Understanding & visualizing what is important - this is the first
              step that both Design & Development fundamentally share. With
              endless opportunity for creating experiences on the web, a
              targeted vision is needed to avoid wasting time and focus on the
              most impactful factors to the application end-goal.
            </p>
            <p class="about--paragraph--text">
              To me, being able to visualize an application architecture and
              understand its impact on future development is indistinguishable
              to visualizing a design language for a web-app or website and
              understand how the user experience will be impacted.
            </p>
          </StyledArticle>
          <StyledArticle inView={inView} delay={.2} translate={"(-25%,0)"} className="about--paragraph about--paragraph-2">
            <h4 className="about--paragraph--title">Purpose</h4>
            <p className="about--paragraph--text">
              With proven capabilities in mathematics & creative design, I see
              myself as being ambidextrous to both creative & technical work.
              Neutral to either department, I enjoy acting as the translator
              between technical & creative teams.
            </p>
            <p className="about--paragraph--text">
              Communication is essential to success in any industry, and it’s a
              hard, dynamic skill to master, yet one that returns dividends. It
              impacts business operations, marketing, development timeframes,
              and so much more. My role is to be that impact through
              transparency, cooperation & understanding audiences.
            </p>
          </StyledArticle>
          <StyledArticle inView={inView} delay={.3} translate={"(25%,0)"} className="about--paragraph about--paragraph-3">
            <h4 className="about--paragraph--title">Passion</h4>
            <p className="about--paragraph--text">
              Original ideas are nothing more than a “mixing” of pre-existing
              ideas to create something brand new - an innovation. Meaning, an
              original idea is only as good as the existing ideas the thinker
              was already exposed to.
            </p>
            <p className="about--paragraph--text">
              I’m passionate about diversifying the ideas I’m exposed to.
              Whether that be peaking through history, sharing a conversation of
              ideals with someone from a different country, or simply watching
              nature documentaries, everything leaves an impact on how I
              approach life and work. I love digesting what I observe & finding
              analogies that seem to make more sense when combined with
              otherwise unrelated topics.
            </p>
          </StyledArticle>
        </div>
      </div>
    </StyledSection>
  );
}
