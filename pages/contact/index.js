import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledContactSection } from "../../components/StyledComponents";
import { GithubSVG, LinkedInSVG } from "../../components/SvgIcons";
import NumberFormat from "react-number-format";

const defaultDimensions = {
  height: 720,
  width: 1080,
};

const handleMouseIn = (e, bg) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "rgb(120,120,120)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(4.45)";
  cursorInner.style.backgroundColor = bg;
  cursorInner.style.borderColor = bg;

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "rgba(25,70,55,.5)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(.2)";
  cursorInner.style.backgroundColor = "rgba(255,255,255,0)";
  cursorInner.style.borderColor = "#111";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "#111";
};

export default function Contact(props) {
  const { height, width } = props.dimensions || defaultDimensions;
  const [threshold, setThreshold] = useState(0);

  const [ref, inView, entry] = useInView({
    threshold: threshold,
  });

  const router = useRouter();

  useEffect(() => {
    console.log(inView);
    if (inView) router.push("/", "/contact", { shallow: true });
    else if (!inView && router.asPath !== "/contact")
      router.push("/", router.asPath, { shallow: true });
    else router.push("/", undefined, { shallow: true });
  }, [inView]);

  useEffect(() => {
    let pageHeight = 0;

    if (entry) pageHeight = entry.boundingClientRect.height;
    setThreshold(
      height < pageHeight / 2 ? 0.09 : height < pageHeight ? 0.18 : 0.36
    );
  }, [props.dimensions, entry]);

  return (
    <StyledContactSection
      id="contact"
      className="contact page"
      inView={inView}
      ref={ref}
      name="contact"
    >
      <div className="contact__wrapper">
        <div className="contact--title">Contact</div>
        <div className="contact--details">
          <div className="contact--details__item contact--details__phone">
            480.526.0704
          </div>
          <div className="contact--details__item contact--details__email">
            Me@Seananthony.io
          </div>
          <div className="contact--details--social__wrapper">
            <div className="contact--details--social__item">
              <a
                href="https://github.com/19Sean96"
                target="_blank"
                onMouseOver={(e) => handleMouseIn(e, "#d77")}
                onMouseOut={handleMouseOut}
              >
                <GithubSVG />
              </a>
            </div>
            <div className="contact--details--social__item">
              <a
                href="https://www.linkedin.com/in/sean-a-alexander/"
                target="_blank"
                onMouseOver={(e) => handleMouseIn(e, "#7d7")}
                onMouseOut={handleMouseOut}
              >
                <LinkedInSVG />
              </a>
            </div>
          </div>
        </div>
        <div className="contact--form__wrapper">
          <div className="contact--form--title">shoot me a message</div>
          <NetlifyForm setFormSubmitted={props.setFormSubmitted} />
        </div>
      </div>
    </StyledContactSection>
  );
}

const NetlifyForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setFormSubmitted(true);
      }}
      className="contact--form"
      method="POST"
      data-netlify="true"
      action={"/"}
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact--input__wrapper">
        <label htmlFor="name" className="contact--input__label">
          Name
        </label>
        <input
          name="name"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.name && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--input__wrapper">
        <label htmlFor="number" className="contact--input__label">
          Number
        </label>
        <NumberFormat
          name="number"
          format="+1 (###) ###-####"
          mask="_"
          getInputRef={register({ required: true })}
          className="contact--input"
        />
        {errors.number && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>{" "}
      <div className="contact--input__wrapper">
        <label htmlFor="email" className="contact--input__label">
          Email
        </label>
        <input
          name="email"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.email && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--input__wrapper">
        <label htmlFor="message" className="contact--input__label">
          Message
        </label>
        <input
          name="message"
          ref={register({ required: true })}
          className="contact--input"
        />
        {errors.message && (
          <span className="contact--input__error">This field is required</span>
        )}
      </div>
      <div className="contact--submit__wrapper">
        <input className="contact--submit" type="submit" />
      </div>
    </form>
  );
};
